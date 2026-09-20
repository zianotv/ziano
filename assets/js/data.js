const categories = [
    { id: 'all', name: 'Todos os Cursos', icon: 'bi bi-grid' },
    { id: 'programacao', name: 'Programação', icon: 'bi bi-code-slash' },
    { id: 'design', name: 'Design & UI/UX', icon: 'bi bi-palette' },
    { id: 'negocios', name: 'Negócios & Gestão', icon: 'bi bi-graph-up' },
    { id: 'marketing', name: 'Marketing Digital', icon: 'bi bi-megaphone' },
    { id: 'dados', name: 'Ciência de Dados', icon: 'bi bi-database' },
    { id: 'ia', name: 'Inteligência Artificial', icon: 'bi bi-robot' },
    { id: 'empreendedorismo', name: 'Empreendedorismo', icon: 'bi bi-lightbulb' },
    { id: 'favoritos', name: 'Favoritos', icon: 'bi bi-star' }
];

const coursesData = [
    {
        id: 1,
        title: 'Git e GitHub',
        category: 'programacao',
        instructor: 'Téo Calvo',
        level: 'Iniciante',
        duration: '14 horas',
        date: '2025',
        favorite: false,
        poster: 'https://img.youtube.com/vi/84FhNXNWoig/maxresdefault.jpg',
        description: 'Se você tem interesse pela área de tecnologia ou dados, Git será uma ferramenta bastante companheira. Esse material poderá te ajudar nessa tragetória.',
        "lessons": [
            {
                "title": "Introdução ao Git e Github - INSTALAÇÃO e PRIMEIROS CONCEITOS",
                "duration": "30:35",
                "thumb": "https://img.youtube.com/vi/84FhNXNWoig/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/84FhNXNWoig?rel=0"
            },
            {
                "title": "Introdução ao Git e GitHub - PRIMEIROS COMANDOS",
                "duration": "52:18",
                "thumb": "https://img.youtube.com/vi/RZ0g18hstwQ/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/RZ0g18hstwQ?rel=0"
            },
            {
                "title": "Introdução ao Git e GitHub - BRANCHES",
                "duration": "51:12",
                "thumb": "https://img.youtube.com/vi/pzjdEQOmsLA/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/pzjdEQOmsLA?rel=0"
            },
            {
                "title": "Introdução ao Git e GitHub - RESOLVENDO CONFLITOS",
                "duration": "24:51",
                "thumb": "https://img.youtube.com/vi/IRmjluONHxU/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/IRmjluONHxU?rel=0"
            },
            {
                "title": "Introdução ao Git e GitHub - PULL REQUEST",
                "duration": "44:23",
                "thumb": "https://img.youtube.com/vi/Y_fFZjzw-D4/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/Y_fFZjzw-D4?rel=0"
            },
            {
                "title": "Introdução ao Git e GitHub - CRIANDO FORK",
                "duration": "20:54",
                "thumb": "https://img.youtube.com/vi/vWtrTmjis2w/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/vWtrTmjis2w?rel=0"
            },
            {
                "title": "Introdução ao Git e GitHub - INTEGRAÇÃO VSCODE",
                "duration": "15:41",
                "thumb": "https://img.youtube.com/vi/M-mBmYj7Jh4/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/M-mBmYj7Jh4?rel=0"
            },
            {
                "title": "Introdução ao Git e GitHub - GIT FLOW",
                "duration": "23:13",
                "thumb": "https://img.youtube.com/vi/l44uGe-sxgM/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/l44uGe-sxgM?rel=0"
            },
            {
                "title": "Introdução ao Git e GitHub - GITKEEP e GITIGNORE",
                "duration": "22:14",
                "thumb": "https://img.youtube.com/vi/spoUnf34R4A/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/spoUnf34R4A?rel=0"
            }
        ]
    },
    {
        id: 2,
        title: 'Python',
        category: 'programacao',
        instructor: 'Téo Calvo',
        level: 'Iniciante',
        duration: '14 horas',
        date: '2025',
        favorite: true,
        poster: 'https://img.youtube.com/vi/OeKzVjiiRm4/maxresdefault.jpg',
        description: 'A ideia principal deste curso é fornecer o conhecimento mínimo sobre lógica de programação, sintaxe da linguagem Python e suas principais estruturas de dados e controle de fluxo, como laços de repetição e operadores lógicos/condicionais.',
        lessons: [
            {
                "title": "Introdução ao Python 01: Conceitos de Programação e Instalação",
                "duration": "55:12",
                "thumb": "https://img.youtube.com/vi/OeKzVjiiRm4/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/OeKzVjiiRm4?rel=0"
            },
            {
                "title": "Introdução ao Python 02: PRIMEIROS COMANDOS",
                "duration": "35:03",
                "thumb": "https://img.youtube.com/vi/wp23DUYKQt4/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/wp23DUYKQt4?rel=0"
            },
            {
                "title": "Introdução ao Python 03: RECEBENDO DADOS",
                "duration": "34:16",
                "thumb": "https://img.youtube.com/vi/_40Lzu_C_Ko/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/_40Lzu_C_Ko?rel=0"
            },
            {
                "title": "Introdução ao Python 04: IF ELIF ELSE",
                "duration": "52:38",
                "thumb": "https://img.youtube.com/vi/FV9Pzj3BIuU/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/FV9Pzj3BIuU?rel=0"
            },
            {
                "title": "Introdução ao Python 05: LAÇOS DE REPETIÇÃO",
                "duration": "1:11:45",
                "thumb": "https://img.youtube.com/vi/HcCH_xXwOcA/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/HcCH_xXwOcA?rel=0"
            },
            {
                "title": "Introdução ao Python 06: Listas",
                "duration": "1:16:50",
                "thumb": "https://img.youtube.com/vi/deWlTenrlv4/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/deWlTenrlv4?rel=0"
            },
            {
                "title": "Introdução ao Python 07: Dicionários e Tuplas",
                "duration": "1:22:45",
                "thumb": "https://img.youtube.com/vi/EueiZ_TXe_c/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/EueiZ_TXe_c?rel=0"
            },
            {
                "title": "Introdução ao Python 08: Criando Funções",
                "duration": "1:17:35",
                "thumb": "https://img.youtube.com/vi/JZlJ1otXBD8/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/JZlJ1otXBD8?rel=0"
            },
            {
                "title": "Introdução ao Python 09: MÓDULOS",
                "duration": "10:02",
                "thumb": "https://img.youtube.com/vi/7U_NG78HuA4/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/7U_NG78HuA4?rel=0"
            },
            {
                "title": "Introdução ao Python 10: Lidando com ARQUIVOS",
                "duration": "43:34",
                "thumb": "https://img.youtube.com/vi/3h15kc10fCY/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/3h15kc10fCY?rel=0"
            },
            {
                "title": "Introdução ao Python 11: Loteria da Babilônia",
                "duration": "28:12",
                "thumb": "https://img.youtube.com/vi/lIczWRig7S8/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/lIczWRig7S8?rel=0"
            },
            {
                "title": "Introdução ao Python 12: Dados de API",
                "duration": "1:09:32",
                "thumb": "https://img.youtube.com/vi/iBsyZ0RQCqc/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/iBsyZ0RQCqc?rel=0"
            },
            {
                "title": "Introdução ao Python 13: Ambientes Virtuais",
                "duration": "22:16",
                "thumb": "https://img.youtube.com/vi/Xa9SSu8qLHs/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/Xa9SSu8qLHs?rel=0"
            },
            {
                "title": "Introdução ao Python 14: Mais sobre Listas",
                "duration": "17:47",
                "thumb": "https://img.youtube.com/vi/QE5_WPaflU0/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/QE5_WPaflU0?rel=0"
            },
            {
                "title": "Introdução ao Python 15: Exercícios Parte I",
                "duration": "19:11",
                "thumb": "https://img.youtube.com/vi/XMmbAlsiPXM/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/XMmbAlsiPXM?rel=0"
            },
            {
                "title": "Introdução ao Python 16: Exercícios Parte II",
                "duration": "32:32",
                "thumb": "https://img.youtube.com/vi/qND0UuYZ730/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/qND0UuYZ730?rel=0"
            },
            {
                "title": "Introdução ao Python 16: Exercícios Parte III",
                "duration": "17:25",
                "thumb": "https://img.youtube.com/vi/rcbyyoNJ-mo/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/rcbyyoNJ-mo?rel=0"
            }
        ]
    },
    {
        id: 3,
        title: 'Aprenda SQL - Primeiras Magias',
        category: 'dados',
        instructor: 'Téo Calvo',
        level: 'Iniciante',
        duration: '22 horas',
        date: '2025',
        favorite: false,
        poster: 'https://img.youtube.com/vi/VmkJG8awKqM/maxresdefault.jpg',
        description: 'Curso de SQL completamente do zero até o avançado. Por aqui você vai aprender a sintaxe SQL e também conceitos importantes sobre banco de dados relacionais.',
        lessons: [
            {
                "title": "Aprenda SQL - Dia 00: Introdução",
                "duration": "38:34",
                "thumb": "https://img.youtube.com/vi/VmkJG8awKqM/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/VmkJG8awKqM?rel=0"
            },
            {
                "title": "Aprenda SQL - Dia 01: Primeiros Conceitos",
                "duration": "27:00",
                "thumb": "https://img.youtube.com/vi/AYIEGnTtMsY/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/AYIEGnTtMsY?rel=0"
            },
            {
                "title": "Aprenda SQL - Dia 02: O tal SQL",
                "duration": "10:25",
                "thumb": "https://img.youtube.com/vi/dXdo-KtGzRk/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/dXdo-KtGzRk?rel=0"
            },
            {
                "title": "Aprenda SQL - Dia 03: SETUP",
                "duration": "8:07",
                "thumb": "https://img.youtube.com/vi/nuOIjVCz2zs/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/nuOIjVCz2zs?rel=0"
            },
            {
                "title": "Aprenda SQL - Dia 04: OLÁ MUNDO!",
                "duration": "21:08",
                "thumb": "https://img.youtube.com/vi/uHMCwfyWwuE/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/uHMCwfyWwuE?rel=0"
            },
            {
                "title": "Aprenda SQL - Dia 05: Dúvidas",
                "duration": "10:10",
                "thumb": "https://img.youtube.com/vi/zkTIJBBIiwY/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/zkTIJBBIiwY?rel=0"
            },
            {
                "title": "Aprenda SQL - Dia 06: Revisão SELECT",
                "duration": "12:41",
                "thumb": "https://img.youtube.com/vi/00kRo-4BvOA/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/00kRo-4BvOA?rel=0"
            },
            {
                "title": "Aprenda SQL - Dia 07: FROM",
                "duration": "12:01",
                "thumb": "https://img.youtube.com/vi/ZvAXR06HC9Y/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/ZvAXR06HC9Y?rel=0"
            },
            {
                "title": "Aprenda SQL - Dia 08: WHERE",
                "duration": "43:44",
                "thumb": "https://img.youtube.com/vi/Cbl93-R89rw/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/Cbl93-R89rw?rel=0"
            },
            {
                "title": "Aprenda SQL - Dia 09: Novas COLUNAS",
                "duration": "31:54",
                "thumb": "https://img.youtube.com/vi/-1Jyhq_1cXA/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/-1Jyhq_1cXA?rel=0"
            },
            {
                "title": "Aprenda SQL - Dia 10: EXERCÍCIOS",
                "duration": "25:39",
                "thumb": "https://img.youtube.com/vi/PpYNbpLlCVI/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/PpYNbpLlCVI?rel=0"
            },
            {
                "title": "Aprenda SQL - Dia 11: ORDER BY",
                "duration": "15:22",
                "thumb": "https://img.youtube.com/vi/AFdXBhhLsuk/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/AFdXBhhLsuk?rel=0"
            },
            {
                "title": "Aprenda SQL - Dia 12: CASE WHEN",
                "duration": "22:48",
                "thumb": "https://img.youtube.com/vi/j_RgoKL1PgI/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/j_RgoKL1PgI?rel=0"
            },
            {
                "title": "Aprenda SQL - Dia 13: COUNT",
                "duration": "11:00",
                "thumb": "https://img.youtube.com/vi/YMKDvy7O7t8/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/YMKDvy7O7t8?rel=0"
            },
            {
                "title": "Aprenda SQL - Dia 14: DISTINCT",
                "duration": "19:58",
                "thumb": "https://img.youtube.com/vi/lxhbbrCZnsU/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/lxhbbrCZnsU?rel=0"
            },
            {
                "title": "Aprenda SQL - Dia 15: ESTATÍSTICAS",
                "duration": "23:58",
                "thumb": "https://img.youtube.com/vi/Ds7RYPRhh-Y/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/Ds7RYPRhh-Y?rel=0"
            },
            {
                "title": "Aprenda SQL - Dia 16: GROUP BY",
                "duration": "20:33",
                "thumb": "https://img.youtube.com/vi/vyXP640E8vw/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/vyXP640E8vw?rel=0"
            },
            {
                "title": "Aprenda SQL - Dia 17: HAVING",
                "duration": "6:08",
                "thumb": "https://img.youtube.com/vi/AKDAkZDXQu8/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/AKDAkZDXQu8?rel=0"
            },
            {
                "title": "Aprenda SQL - Dia 18: EXERCÍCIOS",
                "duration": "50:08",
                "thumb": "https://img.youtube.com/vi/TFt5Hs-L6F4/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/TFt5Hs-L6F4?rel=0"
            },
            {
                "title": "Aprenda SQL - Dia 19: Cruzamento de Dados",
                "duration": "22:04",
                "thumb": "https://img.youtube.com/vi/G0zcV0OZJM0/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/G0zcV0OZJM0?rel=0"
            },
            {
                "title": "Aprenda SQL - Dia 20: JOINs",
                "duration": "46:05",
                "thumb": "https://img.youtube.com/vi/PwL4h66oPZs/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/PwL4h66oPZs?rel=0"
            },
            {
                "title": "Aprenda SQL - Dia 21: EXERCÍCIOS",
                "duration": "31:32",
                "thumb": "https://img.youtube.com/vi/oSYUkr_x83s/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/oSYUkr_x83s?rel=0"
            },
            {
                "title": "Aprenda SQL - Dia 22: SubQueries",
                "duration": "25:42",
                "thumb": "https://img.youtube.com/vi/GMq_i5D2Jw4/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/GMq_i5D2Jw4?rel=0"
            },
            {
                "title": "Aprenda SQL - Dia 23: CTEs",
                "duration": "33:48",
                "thumb": "https://img.youtube.com/vi/6kh8pQyz-jA/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/6kh8pQyz-jA?rel=0"
            },
            {
                "title": "Aprenda SQL - Dia 24: EXERCÍCIOS",
                "duration": "35:52",
                "thumb": "https://img.youtube.com/vi/i3vsaRzvWKE/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/i3vsaRzvWKE?rel=0"
            },
            {
                "title": "Aprenda SQL - Dia 25: ENUMERANDO LINHAS",
                "duration": "27:31",
                "thumb": "https://img.youtube.com/vi/cwDfakRemVw/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/cwDfakRemVw?rel=0"
            },
            {
                "title": "Aprenda SQL - Dia 26: WINDOW FUNCTIONS",
                "duration": "27:30",
                "thumb": "https://img.youtube.com/vi/Zql3MJ26xsw/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/Zql3MJ26xsw?rel=0"
            },
            {
                "title": "Aprenda SQL - Dia 27: EXERCÍCIOS",
                "duration": "32:55",
                "thumb": "https://img.youtube.com/vi/U29Lp2c2ZCM/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/U29Lp2c2ZCM?rel=0"
            },
            {
                "title": "Aprenda SQL - Dia 28: DDL e DML",
                "duration": "43:47",
                "thumb": "https://img.youtube.com/vi/52-TAulVmYU/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/52-TAulVmYU?rel=0"
            },
            {
                "title": "Aprenda SQL - Dia 29: PROJETO FINAL",
                "duration": "1:50:24",
                "thumb": "https://img.youtube.com/vi/kyxQGR9ubyA/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/kyxQGR9ubyA?rel=0"
            }
        ]
    },
        {
        id: 10,
        title: 'Demoday',
        category: 'empreendedorismo',
        instructor: 'Itaipu Parquetec',
        level: 'Iniciante',
        duration: '1h49',
        date: '2025',
        favorite: false,
        poster: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&auto=format&fit=crop&q=80',
        description: 'Apresentações e projetos do Demoday Itaipu Parquetec, reunindo ideias, soluções e iniciativas empreendedoras.',
        lessons: [
            { title: '01. ExemploInspirador(AlunosRecebemInvestimento)', duration: '4:18', thumb: 'https://drive.google.com/thumbnail?id=1bVe1aZY1yKF6rtlwHbQL4pNyd5LYiDVT&sz=w800', video: 'https://drive.google.com/file/d/1bVe1aZY1yKF6rtlwHbQL4pNyd5LYiDVT/preview' },
            { title: '02. PrevMaint(PitchElogiado)', duration: '4:21', thumb: 'https://drive.google.com/thumbnail?id=1CTOLu1YgrJWNPs66uXZsB2ijXwursuIW&sz=w800', video: 'https://drive.google.com/file/d/1CTOLu1YgrJWNPs66uXZsB2ijXwursuIW/preview' },
            { title: '03. InspiraçãoEnfermagem_20260613_094845', duration: '4:05', thumb: 'https://drive.google.com/thumbnail?id=1xFCQjhrYdNCotaGYHreEhz6O8iDTSQam&sz=w800', video: 'https://drive.google.com/file/d/1xFCQjhrYdNCotaGYHreEhz6O8iDTSQam/preview' },
            { title: '04. VID_20260613_095325', duration: '1:56', thumb: 'https://drive.google.com/thumbnail?id=1nW2cigFz-FN_iwOrNncUtWO1q2SmxM60&sz=w800', video: 'https://drive.google.com/file/d/1nW2cigFz-FN_iwOrNncUtWO1q2SmxM60/preview' },
            { title: '05. VID_20260613_095530', duration: '2:36', thumb: 'https://drive.google.com/thumbnail?id=1DqcYV4LsuAOY8Cl-SRTcCtvAZn5dZlyY&sz=w800', video: 'https://drive.google.com/file/d/1DqcYV4LsuAOY8Cl-SRTcCtvAZn5dZlyY/preview' },
            { title: '06. VID_20260613_100045', duration: '5:07', thumb: 'https://drive.google.com/thumbnail?id=1kATpcrBRVS0cTwHHUitLzo7FqkPGyR_4&sz=w800', video: 'https://drive.google.com/file/d/1kATpcrBRVS0cTwHHUitLzo7FqkPGyR_4/preview' },
            { title: '07. VID_20260613_100612', duration: '5:45', thumb: 'https://drive.google.com/thumbnail?id=18LhdAYUNvoKJe5Q4zjccn_DYXM_mXaUF&sz=w800', video: 'https://drive.google.com/file/d/18LhdAYUNvoKJe5Q4zjccn_DYXM_mXaUF/preview' },
            { title: '08. VID_20260613_102615', duration: '5:14', thumb: 'https://drive.google.com/thumbnail?id=1QnLlBiPLQc3fcKWzQj_3Rk8S_Rt_jRU0&sz=w800', video: 'https://drive.google.com/file/d/1QnLlBiPLQc3fcKWzQj_3Rk8S_Rt_jRU0/preview' },
            { title: '09. VID_20260613_103159', duration: '4:57', thumb: 'https://drive.google.com/thumbnail?id=1F3rYGW7YjoblXCwLClE43Uwuyl-um-io&sz=w800', video: 'https://drive.google.com/file/d/1F3rYGW7YjoblXCwLClE43Uwuyl-um-io/preview' },
            { title: '10. VID_20260613_103842', duration: '5:17', thumb: 'https://drive.google.com/thumbnail?id=1yGQxaC4--v39FRuCZ_3n4XDV9mcnQDgD&sz=w800', video: 'https://drive.google.com/file/d/1yGQxaC4--v39FRuCZ_3n4XDV9mcnQDgD/preview' },
            { title: '11. VID_20260613_104404', duration: '6:18', thumb: 'https://drive.google.com/thumbnail?id=1q6dZ-ekhLwbNA8YigyxMp61BDMEVPdln&sz=w800', video: 'https://drive.google.com/file/d/1q6dZ-ekhLwbNA8YigyxMp61BDMEVPdln/preview' },
            { title: '12. VID_20260613_105217', duration: '8:04', thumb: 'https://drive.google.com/thumbnail?id=1WHgc_GLF-3-guTnMWkAAO7mTGX9--QSQ&sz=w800', video: 'https://drive.google.com/file/d/1WHgc_GLF-3-guTnMWkAAO7mTGX9--QSQ/preview' },
            { title: '13. VID_20260613_110034', duration: '1:08', thumb: 'https://drive.google.com/thumbnail?id=1vvS32avMmTMdb2qm2PA7mhWqKzlpgMUG&sz=w800', video: 'https://drive.google.com/file/d/1vvS32avMmTMdb2qm2PA7mhWqKzlpgMUG/preview' },
            { title: '14. VID_20260613_111637', duration: '5:42', thumb: 'https://drive.google.com/thumbnail?id=1s7_6YHnmdUSrYv4I0Ibs4XEZTuVo1WQu&sz=w800', video: 'https://drive.google.com/file/d/1s7_6YHnmdUSrYv4I0Ibs4XEZTuVo1WQu/preview' },
            { title: '15. VID_20260613_112223', duration: '4:37', thumb: 'https://drive.google.com/thumbnail?id=1ClpvqFlMlyX-ruuB2kJincMCmHP6yaid&sz=w800', video: 'https://drive.google.com/file/d/1ClpvqFlMlyX-ruuB2kJincMCmHP6yaid/preview' },
            { title: '16. VID_20260613_112810', duration: '2:46', thumb: 'https://drive.google.com/thumbnail?id=1OpInHuHc2i_B6nPgmb1hroDvf3sc0bJ_&sz=w800', video: 'https://drive.google.com/file/d/1OpInHuHc2i_B6nPgmb1hroDvf3sc0bJ_/preview' },
            { title: '17. VID_20260613_113059', duration: '8:23', thumb: 'https://drive.google.com/thumbnail?id=1fUWkG4TpI8uDfnCF5tXIfqDusXOnm31L&sz=w800', video: 'https://drive.google.com/file/d/1fUWkG4TpI8uDfnCF5tXIfqDusXOnm31L/preview' },
            { title: '18. VID_20260613_114011', duration: '5:19', thumb: 'https://drive.google.com/thumbnail?id=1m7mVgqqDyg7S_mP_ZlzJ7e3HuR8btdaF&sz=w800', video: 'https://drive.google.com/file/d/1m7mVgqqDyg7S_mP_ZlzJ7e3HuR8btdaF/preview' },
            { title: '19. VID_20260613_114536', duration: '7:55', thumb: 'https://drive.google.com/thumbnail?id=1dlV7E2BdQTAI3ll40J5i6IzNk3vGG8B3&sz=w800', video: 'https://drive.google.com/file/d/1dlV7E2BdQTAI3ll40J5i6IzNk3vGG8B3/preview' },
            { title: '20. VID_20260613_121220', duration: '1:24', thumb: 'https://drive.google.com/thumbnail?id=19lpeBWF16zegyXugvWrTLzoTOkMGib3H&sz=w800', video: 'https://drive.google.com/file/d/19lpeBWF16zegyXugvWrTLzoTOkMGib3H/preview' },
            { title: '21. VID_20260613_121346', duration: '2:30', thumb: 'https://drive.google.com/thumbnail?id=1v_cOybsboprbtYmOBU8gkGR2Qr2RY9Cc&sz=w800', video: 'https://drive.google.com/file/d/1v_cOybsboprbtYmOBU8gkGR2Qr2RY9Cc/preview' },
            { title: '22. VID_20260613_121727', duration: '6:09', thumb: 'https://drive.google.com/thumbnail?id=197pfd7Nr0Ymb0GD-eiMk62mfiuJgqS5d&sz=w800', video: 'https://drive.google.com/file/d/197pfd7Nr0Ymb0GD-eiMk62mfiuJgqS5d/preview' },
            { title: '23. VID_20260613_122347', duration: '0:23', thumb: 'https://drive.google.com/thumbnail?id=1h-xrkQlC2udhXwys0eQ-kWwGZ2e3gkme&sz=w800', video: 'https://drive.google.com/file/d/1h-xrkQlC2udhXwys0eQ-kWwGZ2e3gkme/preview' },
            { title: '24. VID_20260613_122513', duration: '2:58', thumb: 'https://drive.google.com/thumbnail?id=13NKVCSkagufllynDPgca-3AesQPN2hJ5&sz=w800', video: 'https://drive.google.com/file/d/13NKVCSkagufllynDPgca-3AesQPN2hJ5/preview' }
        ]
    },
    {
        id: 11,
        title: 'Metodologia e Escrita Científica',
        category: 'negocios',
        instructor: 'Tatiana Dornelas',
        level: 'Iniciante',
        duration: '6h16',
        date: '2025',
        favorite: false,
        poster: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=600&auto=format&fit=crop&q=80',
        description: 'Aprenda os fundamentos da metodologia e da escrita científica para planejar pesquisas, organizar trabalhos acadêmicos e apresentar resultados com clareza.',
        lessons: [
            { title: '1.1 Ciência conceito e objetivo', duration: '11:52', thumb: 'https://img.youtube.com/vi/d3NObHJ2t84/hqdefault.jpg', video: 'https://www.youtube.com/embed/d3NObHJ2t84?rel=0' },
            { title: '1.2 O que é conhecimento', duration: '9:19', thumb: 'https://img.youtube.com/vi/vYayS751hrk/hqdefault.jpg', video: 'https://www.youtube.com/embed/vYayS751hrk?rel=0' },
            { title: '1.3 A função social da pesquisa', duration: '7:24', thumb: 'https://img.youtube.com/vi/lkrm0RkpaxA/hqdefault.jpg', video: 'https://www.youtube.com/embed/lkrm0RkpaxA?rel=0' },
            { title: '1.4 Histórico da pesquisa científica', duration: '10:08', thumb: 'https://img.youtube.com/vi/9k7aNIr-Gwk/hqdefault.jpg', video: 'https://www.youtube.com/embed/9k7aNIr-Gwk?rel=0' },
            { title: '1.5 Saber e ciência', duration: '8:47', thumb: 'https://img.youtube.com/vi/u4jYEjW9JDk/hqdefault.jpg', video: 'https://www.youtube.com/embed/u4jYEjW9JDk?rel=0' },
            { title: '2.1 Enfoque de pesquisa e seus processos', duration: '10:28', thumb: 'https://img.youtube.com/vi/NztqSN4b-yM/hqdefault.jpg', video: 'https://www.youtube.com/embed/NztqSN4b-yM?rel=0' },
            { title: '2.2 Quanto aos procedimentos', duration: '11:04', thumb: 'https://img.youtube.com/vi/fGtEud4R1wY/hqdefault.jpg', video: 'https://www.youtube.com/embed/fGtEud4R1wY?rel=0' },
            { title: '2.3 Quanto à abordagem', duration: '10:14', thumb: 'https://img.youtube.com/vi/CzvPfjyq6YY/hqdefault.jpg', video: 'https://www.youtube.com/embed/CzvPfjyq6YY?rel=0' },
            { title: '2.4 Quanto à natureza', duration: '8:21', thumb: 'https://img.youtube.com/vi/jRMi4UseYGw/hqdefault.jpg', video: 'https://www.youtube.com/embed/jRMi4UseYGw?rel=0' },
            { title: '2.5 Quanto aos objetivos', duration: '8:49', thumb: 'https://img.youtube.com/vi/pZ1YK9nzbMU/hqdefault.jpg', video: 'https://www.youtube.com/embed/pZ1YK9nzbMU?rel=0' },
            { title: '3.1 A importância do método científico', duration: '11:48', thumb: 'https://img.youtube.com/vi/hIiqiKtVvvA/hqdefault.jpg', video: 'https://www.youtube.com/embed/hIiqiKtVvvA?rel=0' },
            { title: '3.2 Métodos de pesquisa clássicos', duration: '7:26', thumb: 'https://img.youtube.com/vi/CLPOiLhMIEM/hqdefault.jpg', video: 'https://www.youtube.com/embed/CLPOiLhMIEM?rel=0' },
            { title: '3.3 Demais métodos de pesquisa', duration: '9:17', thumb: 'https://img.youtube.com/vi/cUYcJyoezJI/hqdefault.jpg', video: 'https://www.youtube.com/embed/cUYcJyoezJI?rel=0' },
            { title: '3.4 Métodos de levantamentos e de estudos', duration: '9:38', thumb: 'https://img.youtube.com/vi/f0IPd__Zjq0/hqdefault.jpg', video: 'https://www.youtube.com/embed/f0IPd__Zjq0?rel=0' },
            { title: '3.5 Aplicação de técnicas de pesquisa', duration: '8:21', thumb: 'https://img.youtube.com/vi/O78QyxGLJfo/hqdefault.jpg', video: 'https://www.youtube.com/embed/O78QyxGLJfo?rel=0' },
            { title: '4.1 O que é um artigo científico', duration: '10:21', thumb: 'https://img.youtube.com/vi/JJ12MQXlJgI/hqdefault.jpg', video: 'https://www.youtube.com/embed/JJ12MQXlJgI?rel=0' },
            { title: '4.2 O que é uma monografia', duration: '11:02', thumb: 'https://img.youtube.com/vi/HQZkmqBo3wE/hqdefault.jpg', video: 'https://www.youtube.com/embed/HQZkmqBo3wE?rel=0' },
            { title: '4.3 Técnicas de coleta de dados', duration: '10:44', thumb: 'https://img.youtube.com/vi/FRq_EWpXnXY/hqdefault.jpg', video: 'https://www.youtube.com/embed/FRq_EWpXnXY?rel=0' },
            { title: '4.4 Tipos de amostras para coleta de dados', duration: '7:31', thumb: 'https://img.youtube.com/vi/2o9gKUb5vvE/hqdefault.jpg', video: 'https://www.youtube.com/embed/2o9gKUb5vvE?rel=0' },
            { title: '4.5 Aplicação da pesquisa piloto', duration: '7:17', thumb: 'https://img.youtube.com/vi/fiJ_v03Jg7s/hqdefault.jpg', video: 'https://www.youtube.com/embed/fiJ_v03Jg7s?rel=0' },
            { title: '5.1 Etapas do planejamento de pesquisa', duration: '11:06', thumb: 'https://img.youtube.com/vi/icnCG33XXtE/hqdefault.jpg', video: 'https://www.youtube.com/embed/icnCG33XXtE?rel=0' },
            { title: '5.2 Definição do tema', duration: '10:48', thumb: 'https://img.youtube.com/vi/kZXnArF0kfw/hqdefault.jpg', video: 'https://www.youtube.com/embed/kZXnArF0kfw?rel=0' },
            { title: '5.3 Objetivos e justificativa de pesquisa', duration: '9:39', thumb: 'https://img.youtube.com/vi/arHxmoF6ttU/hqdefault.jpg', video: 'https://www.youtube.com/embed/arHxmoF6ttU?rel=0' },
            { title: '5.4 Projeto de pesquisa', duration: '11:10', thumb: 'https://img.youtube.com/vi/K4FIUXP5LTg/hqdefault.jpg', video: 'https://www.youtube.com/embed/K4FIUXP5LTg?rel=0' },
            { title: '5.5 Fases do projeto de pesquisa', duration: '6:51', thumb: 'https://img.youtube.com/vi/bcXizYRdc_I/hqdefault.jpg', video: 'https://www.youtube.com/embed/bcXizYRdc_I?rel=0' },
            { title: '6.1 Estrutura de um texto científico', duration: '10:16', thumb: 'https://img.youtube.com/vi/TyWLHOguWaw/hqdefault.jpg', video: 'https://www.youtube.com/embed/TyWLHOguWaw?rel=0' },
            { title: '6.2 Elementos pré textuais, textuais e pós textuais', duration: '7:24', thumb: 'https://img.youtube.com/vi/UJurLvNZjwo/hqdefault.jpg', video: 'https://www.youtube.com/embed/UJurLvNZjwo?rel=0' },
            { title: '6.3 ABNT', duration: '10:25', thumb: 'https://img.youtube.com/vi/1l1yvumkDxU/hqdefault.jpg', video: 'https://www.youtube.com/embed/1l1yvumkDxU?rel=0' },
            { title: '6.4 Como fazer referências bibliográficas', duration: '10:39', thumb: 'https://img.youtube.com/vi/ntASmoVgMkQ/hqdefault.jpg', video: 'https://www.youtube.com/embed/ntASmoVgMkQ?rel=0' },
            { title: '6.5 Tipos de citação', duration: '9:19', thumb: 'https://img.youtube.com/vi/X4S0QfVyrXg/hqdefault.jpg', video: 'https://www.youtube.com/embed/X4S0QfVyrXg?rel=0' },
            { title: '7.1 Escolha do tema e definição do problema de pesquisa', duration: '10:40', thumb: 'https://img.youtube.com/vi/8XaSmZplAxQ/hqdefault.jpg', video: 'https://www.youtube.com/embed/8XaSmZplAxQ?rel=0' },
            { title: '7.2 Introdução e Referencial teórico', duration: '10:29', thumb: 'https://img.youtube.com/vi/B9qo8X6-s3U/hqdefault.jpg', video: 'https://www.youtube.com/embed/B9qo8X6-s3U?rel=0' },
            { title: '7.3 Métodos e materiais', duration: '10:53', thumb: 'https://img.youtube.com/vi/_KHy3kCl3_Q/hqdefault.jpg', video: 'https://www.youtube.com/embed/_KHy3kCl3_Q?rel=0' },
            { title: '7.4 Resultados e discussão', duration: '9:54', thumb: 'https://img.youtube.com/vi/x8PGzLC0Vto/hqdefault.jpg', video: 'https://www.youtube.com/embed/x8PGzLC0Vto?rel=0' },
            { title: '7.5 Conclusões e considerações finais', duration: '9:16', thumb: 'https://img.youtube.com/vi/mM6Nq_cucqI/hqdefault.jpg', video: 'https://www.youtube.com/embed/mM6Nq_cucqI?rel=0' },
            { title: '8.1 Ética na realização de uma pesquisa científica', duration: '9:33', thumb: 'https://img.youtube.com/vi/SL-HC8UY5FU/hqdefault.jpg', video: 'https://www.youtube.com/embed/SL-HC8UY5FU?rel=0' },
            { title: '8.2 Documentos necessários', duration: '9:18', thumb: 'https://img.youtube.com/vi/eYMPgYe0Pew/hqdefault.jpg', video: 'https://www.youtube.com/embed/eYMPgYe0Pew?rel=0' },
            { title: '8.3 Atores de uma pesquisa e suas relações éticas', duration: '8:59', thumb: 'https://img.youtube.com/vi/lToZpDDPjQ8/hqdefault.jpg', video: 'https://www.youtube.com/embed/lToZpDDPjQ8?rel=0' },
            { title: '8.4 Dicas para Formatação do Trabalho', duration: '10:12', thumb: 'https://img.youtube.com/vi/135xvJf6rR4/hqdefault.jpg', video: 'https://www.youtube.com/embed/135xvJf6rR4?rel=0' }
        ]
    },
    {
        id: 12,
        title: 'Inteligência Evolutiva',
        category: 'empreendedorismo',
        instructor: ' Ryon Braga e Djalma Fonseca',
        level: 'Todos os níveis',
        duration: '1h56 horas',
        date: '2026',
        favorite: false,
        poster: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=600&auto=format&fit=crop&q=80',
        description: 'Desenvolva sua Inteligência Evolutiva por meio de novos conhecimentos, autoconhecimento e práticas que estimulam o crescimento pessoal, a consciência e a capacidade de transformar desafios em oportunidades.',
        lessons: [
            { title: '1.1 Inteligência Evolutiva', duration: '9:07', thumb: 'https://img.youtube.com/vi/lcHAXrVkG9o/hqdefault.jpg', video: 'https://www.youtube.com/embed/lcHAXrVkG9o?rel=0' },
            { title: '1.2 Inteligência Evolutiva', duration: '9:13', thumb: 'https://img.youtube.com/vi/I2yWnESmVRw/hqdefault.jpg', video: 'https://www.youtube.com/embed/I2yWnESmVRw?rel=0' },
            { title: '1.3 Inteligência Evolutiva', duration: '9:45', thumb: 'https://img.youtube.com/vi/H9aUja7-vrY/hqdefault.jpg', video: 'https://www.youtube.com/embed/H9aUja7-vrY?rel=0' },
            { title: '1.4 Inteligência Evolutiva', duration: '10:19', thumb: 'https://img.youtube.com/vi/2XJKGvooYZs/hqdefault.jpg', video: 'https://www.youtube.com/embed/2XJKGvooYZs?rel=0' },
            { title: '1.5 Inteligência Evolutiva', duration: '11:01', thumb: 'https://img.youtube.com/vi/juoBr2UuAxI/hqdefault.jpg', video: 'https://www.youtube.com/embed/juoBr2UuAxI?rel=0' },
            { title: '1.6 Inteligência Evolutiva', duration: '12:19', thumb: 'https://img.youtube.com/vi/aUOnHW6WcHs/hqdefault.jpg', video: 'https://www.youtube.com/embed/aUOnHW6WcHs?rel=0' },
            { title: '2.1 Inteligência Evolutiva', duration: '8:18', thumb: 'https://img.youtube.com/vi/SD1KOrEY7bg/hqdefault.jpg', video: 'https://www.youtube.com/embed/SD1KOrEY7bg?rel=0' },
            { title: '2.2 Inteligência Evolutiva', duration: '8:49', thumb: 'https://img.youtube.com/vi/ZCmBD_EjEXM/hqdefault.jpg', video: 'https://www.youtube.com/embed/ZCmBD_EjEXM?rel=0' },
            { title: '2.3 Inteligência Evolutiva', duration: '9:10', thumb: 'https://img.youtube.com/vi/TWnFGpkYFkc/hqdefault.jpg', video: 'https://www.youtube.com/embed/TWnFGpkYFkc?rel=0' },
            { title: '2.4 Inteligência Evolutiva', duration: '8:06', thumb: 'https://img.youtube.com/vi/nrDnaWSbhFo/hqdefault.jpg', video: 'https://www.youtube.com/embed/nrDnaWSbhFo?rel=0' },
            { title: '2.5 Inteligência Evolutiva', duration: '11:23', thumb: 'https://img.youtube.com/vi/39jD3ZtV3fU/hqdefault.jpg', video: 'https://www.youtube.com/embed/39jD3ZtV3fU?rel=0' },
            { title: '2.6 Inteligência Evolutiva', duration: '8:49', thumb: 'https://img.youtube.com/vi/mKcc87zAWxg/hqdefault.jpg', video: 'https://www.youtube.com/embed/mKcc87zAWxg?rel=0' }
        ]
    },
];

