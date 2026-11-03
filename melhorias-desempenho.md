# Melhorias de desempenho para reaplicar

Notas para aplicar em outro projeto com catálogo de aulas, thumbnails e player do YouTube.

## Player

- Criar o iframe do YouTube assim que a aula for exibida, deixando-o atrás da thumbnail. Assim o player começa a carregar antes da interação.
- Inicializar o iframe sem reprodução automática (`autoplay=0`) e habilitar a API do player (`enablejsapi=1`).
- Ao clicar no botão Play, esconder a thumbnail e chamar `playVideo()` no player já carregado. Se o player ainda não estiver pronto, guardar a intenção de reproduzir e iniciar assim que o evento `onReady` chegar.
- Ao trocar de aula antes do Play, preparar a nova aula sem iniciar a reprodução. Depois que a reprodução já começou, trocar a aula com `loadVideoById()`.
- Manter somente `maxresdefault` para a thumbnail grande do player; não percorrer `sddefault` e `hqdefault` como tentativas alternativas.

## Thumbnails da lista

- Usar `loading="lazy"` para deixar o navegador adiar imagens fora da área visível.
- Usar `decoding="async"` e `fetchpriority="low"` para não disputar prioridade com conteúdo mais importante.
- Reservar o espaço da imagem antes do carregamento, mantendo as dimensões ou a proporção 16:9.
- Deixar a imagem invisível enquanto carrega; após `load`, aguardar `image.decode()` e só então aplicar uma classe que a revela.
- Mostrar uma cor de fundo próxima à paleta do site enquanto a thumbnail ainda não está pronta, evitando áreas brancas ou quadros parciais.
- Se `maxresdefault` falhar, manter o fallback de dados da aula (`item.thumb`), sem tentar vários tamanhos intermediários.
- Aplicar `content-visibility: auto` aos cards fora da tela e definir um `contain-intrinsic-size` aproximado para evitar mudanças de layout quando forem renderizados.
- Aplicar `contain: paint` ao contêiner da thumbnail para isolar sua pintura.

## Evitar trabalho redundante

- Não usar `loading="lazy"` no iframe se ele só é criado ao abrir o player; nesse fluxo, o carregamento começa junto com a criação.
- Evitar etapas que não mudam a apresentação. Por exemplo, não usar `image.decode()` para controlar uma transição se a imagem já é revelada somente após a decodificação.
- Evitar `will-change` em todas as imagens. Reservar camadas de composição sem necessidade pode aumentar o uso de memória.
- Preferir o `loading="lazy"` nativo a um `IntersectionObserver` manual quando não houver comportamento adicional a implementar.

## Ajuste de interação relacionado

- Usar `user-select: none` em cards clicáveis e controles (por exemplo, fechar, assistir e favoritar) para evitar seleção acidental de texto. Isso melhora a interação, mas não é uma otimização de carregamento.

## Observação

Pré-carregar o iframe reduz a espera depois do clique, mas faz o player e seus recursos começarem a carregar antes da interação. Use essa abordagem quando a prioridade for iniciar o vídeo rapidamente após o Play.
