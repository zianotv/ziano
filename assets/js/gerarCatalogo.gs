const NOME_ARQUIVO = 'catalogo.json';

const PLAYLISTS = [
  {
    playlist: 'https://www.youtube.com/playlist?list=COLE_AQUI_O_ID',
    category: 'programacao',     
    instructor: 'Téo Calvo',
    level: 'Iniciante',
    title: 'Título customizado',       
    description: 'Descrição custom',    
  },
];

const PADRAO = {
  category: 'programacao',
  instructor: '',
  level: 'Iniciante',
  favorite: false,
};

// ========================================================

function gerarCatalogo() {
  const cursos = PLAYLISTS.map((cfg, i) => montarCurso_(cfg, i + 1));
  const json = JSON.stringify(cursos, null, 4);
  const arquivo = salvarNaPastaDoScript_(NOME_ARQUIVO, json);
  Logger.log('Salvo: %s (%s cursos) -> %s', arquivo.getName(), cursos.length, arquivo.getUrl());
}

function montarCurso_(cfg, id) {
  const opts = Object.assign({}, PADRAO, cfg);
  const playlistId = extrairPlaylistId_(opts.playlist);

  const pl = YouTube.Playlists.list('snippet', { id: playlistId }).items;
  if (!pl || !pl.length) throw new Error('Playlist não encontrada: ' + opts.playlist);
  const snippet = pl[0].snippet;

  // IDs dos vídeos na ordem da playlist
  const videoIds = [];
  let pageToken;
  do {
    const resp = YouTube.PlaylistItems.list('contentDetails,status', {
      playlistId: playlistId,
      maxResults: 50,
      pageToken: pageToken,
    });
    resp.items.forEach(it => {
      const privado = it.status && it.status.privacyStatus === 'private';
      if (!privado) videoIds.push(it.contentDetails.videoId);
    });
    pageToken = resp.nextPageToken;
  } while (pageToken);

  // Detalhes dos vídeos (até 50 por chamada)
  const detalhes = {};
  for (let i = 0; i < videoIds.length; i += 50) {
    const lote = videoIds.slice(i, i + 50).join(',');
    YouTube.Videos.list('snippet,contentDetails', { id: lote, maxResults: 50 })
      .items.forEach(v => (detalhes[v.id] = v));
  }

  let totalSeg = 0;
  const lessons = [];
  videoIds.forEach(vid => {
    const v = detalhes[vid];
    if (!v) return; // removido/indisponível
    const seg = isoParaSegundos_(v.contentDetails.duration);
    totalSeg += seg;
    lessons.push({
      title: v.snippet.title,
      duration: formatarAula_(seg),
      thumb: 'https://img.youtube.com/vi/' + vid + '/hqdefault.jpg',
      video: 'https://www.youtube.com/embed/' + vid + '?rel=0',
      description: v.snippet.description || '',
    });
  });

  const primeiro = lessons.length ? videoIds.find(id => detalhes[id]) : null;

  return {
    id: opts.id || id,
    title: opts.title || snippet.title,
    category: opts.category,
    instructor: opts.instructor || snippet.channelTitle,
    level: opts.level,
    duration: formatarCurso_(totalSeg),
    date: opts.date || String(new Date(snippet.publishedAt).getFullYear()),
    favorite: opts.favorite,
    poster: primeiro ? 'https://img.youtube.com/vi/' + primeiro + '/maxresdefault.jpg' : '',
    description: opts.description || snippet.description || '',
    lessons: lessons,
  };
}

// ---------- utilitários ----------

function extrairPlaylistId_(valor) {
  const m = String(valor).match(/[?&]list=([^&#]+)/);
  return m ? m[1] : String(valor).trim();
}

// "PT1H2M3S" -> 3723
function isoParaSegundos_(iso) {
  const m = String(iso).match(/P(?:(\d+)D)?T?(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!m) return 0;
  return (+m[1] || 0) * 86400 + (+m[2] || 0) * 3600 + (+m[3] || 0) * 60 + (+m[4] || 0);
}

// 1830 -> "30:30" | 4305 -> "1:11:45"
function formatarAula_(seg) {
  const h = Math.floor(seg / 3600);
  const m = Math.floor((seg % 3600) / 60);
  const s = seg % 60;
  const pad = n => String(n).padStart(2, '0');
  return h ? h + ':' + pad(m) + ':' + pad(s) : m + ':' + pad(s);
}

// 17100 -> "4h 45m" | 3480 -> "58m"
function formatarCurso_(seg) {
  const totalMin = Math.round(seg / 60);
  const h = Math.floor(totalMin / 60);
  const m = totalMin % 60;
  return h ? h + 'h ' + m + 'm' : m + 'm';
}

function salvarNaPastaDoScript_(nome, conteudo) {
  const scriptFile = DriveApp.getFileById(ScriptApp.getScriptId());
  const parents = scriptFile.getParents();
  const pasta = parents.hasNext() ? parents.next() : DriveApp.getRootFolder();

  const existentes = pasta.getFilesByName(nome);
  if (existentes.hasNext()) {
    const f = existentes.next();
    f.setContent(conteudo); // sobrescreve mantendo o mesmo ID/link
    return f;
  }
  return pasta.createFile(nome, conteudo, MimeType.PLAIN_TEXT);
}
