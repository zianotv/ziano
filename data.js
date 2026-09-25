const categories = [
    {
        "id": "all",
        "name": "Todos os Cursos",
        "icon": "bi bi-grid"
    },
    {
        "id": "programacao",
        "name": "Programação",
        "icon": "bi bi-code-slash"
    },
    {
        "id": "design",
        "name": "Design & UI/UX",
        "icon": "bi bi-palette"
    },
    {
        "id": "negocios",
        "name": "Negócios & Gestão",
        "icon": "bi bi-graph-up"
    },
    {
        "id": "dados",
        "name": "Dados",
        "icon": "bi bi-database"
    },
    {
        "id": "ia",
        "name": "Inteligência Artificial",
        "icon": "bi bi-robot"
    },
    {
        "id": "empreendedorismo",
        "name": "Empreendedorismo",
        "icon": "bi bi-lightbulb"
    },
    {
        "id": "favoritos",
        "name": "Favoritos",
        "icon": "bi bi-star"
    }
];

const coursesData = [
    {
        "id": 1,
        "title": "Git e GitHub",
        "category": "programacao",
        "instructor": "Téo Calvo",
        "level": "Iniciante",
        "duration": "4h 45m",
        "date": "2025",
        "favorite": false,
        "poster": "https://img.youtube.com/vi/84FhNXNWoig/maxresdefault.jpg",
        "description": "Se você tem interesse pela área de tecnologia ou dados, Git será uma ferramenta bastante companheira. Esse material poderá te ajudar nessa tragetória.",
        "lessons": [
            {
                "title": "INSTALAÇÃO e PRIMEIROS CONCEITOS",
                "duration": "30:35",
                "thumb": "https://img.youtube.com/vi/84FhNXNWoig/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/84FhNXNWoig?rel=0"
            },
            {
                "title": "PRIMEIROS COMANDOS",
                "duration": "52:18",
                "thumb": "https://img.youtube.com/vi/RZ0g18hstwQ/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/RZ0g18hstwQ?rel=0"
            },
            {
                "title": "BRANCHES",
                "duration": "51:12",
                "thumb": "https://img.youtube.com/vi/pzjdEQOmsLA/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/pzjdEQOmsLA?rel=0"
            },
            {
                "title": "RESOLVENDO CONFLITOS",
                "duration": "24:51",
                "thumb": "https://img.youtube.com/vi/IRmjluONHxU/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/IRmjluONHxU?rel=0"
            },
            {
                "title": "PULL REQUEST",
                "duration": "44:23",
                "thumb": "https://img.youtube.com/vi/Y_fFZjzw-D4/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/Y_fFZjzw-D4?rel=0"
            },
            {
                "title": "CRIANDO FORK",
                "duration": "20:54",
                "thumb": "https://img.youtube.com/vi/vWtrTmjis2w/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/vWtrTmjis2w?rel=0"
            },
            {
                "title": "INTEGRAÇÃO VSCODE",
                "duration": "15:41",
                "thumb": "https://img.youtube.com/vi/M-mBmYj7Jh4/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/M-mBmYj7Jh4?rel=0"
            },
            {
                "title": "GIT FLOW",
                "duration": "23:13",
                "thumb": "https://img.youtube.com/vi/l44uGe-sxgM/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/l44uGe-sxgM?rel=0"
            },
            {
                "title": "GITKEEP e GITIGNORE",
                "duration": "22:14",
                "thumb": "https://img.youtube.com/vi/spoUnf34R4A/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/spoUnf34R4A?rel=0"
            }
        ]
    },
    {
        "id": 2,
        "title": "Python",
        "category": "programacao",
        "instructor": "Téo Calvo",
        "level": "Iniciante",
        "duration": "12h 26m",
        "date": "2025",
        "favorite": false,
        "poster": "https://img.youtube.com/vi/OeKzVjiiRm4/maxresdefault.jpg",
        "description": "A ideia principal deste curso é fornecer o conhecimento mínimo sobre lógica de programação, sintaxe da linguagem Python e suas principais estruturas de dados e controle de fluxo, como laços de repetição e operadores lógicos/condicionais.",
        "lessons": [
            {
                "title": "Conceitos de Programação e Instalação",
                "duration": "55:12",
                "thumb": "https://img.youtube.com/vi/OeKzVjiiRm4/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/OeKzVjiiRm4?rel=0"
            },
            {
                "title": "PRIMEIROS COMANDOS",
                "duration": "35:03",
                "thumb": "https://img.youtube.com/vi/wp23DUYKQt4/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/wp23DUYKQt4?rel=0"
            },
            {
                "title": "RECEBENDO DADOS",
                "duration": "34:16",
                "thumb": "https://img.youtube.com/vi/_40Lzu_C_Ko/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/_40Lzu_C_Ko?rel=0"
            },
            {
                "title": "IF ELIF ELSE",
                "duration": "52:38",
                "thumb": "https://img.youtube.com/vi/FV9Pzj3BIuU/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/FV9Pzj3BIuU?rel=0"
            },
            {
                "title": "LAÇOS DE REPETIÇÃO",
                "duration": "1:11:45",
                "thumb": "https://img.youtube.com/vi/HcCH_xXwOcA/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/HcCH_xXwOcA?rel=0"
            },
            {
                "title": "Listas",
                "duration": "1:16:50",
                "thumb": "https://img.youtube.com/vi/deWlTenrlv4/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/deWlTenrlv4?rel=0"
            },
            {
                "title": "Dicionários e Tuplas",
                "duration": "1:22:45",
                "thumb": "https://img.youtube.com/vi/EueiZ_TXe_c/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/EueiZ_TXe_c?rel=0"
            },
            {
                "title": "Criando Funções",
                "duration": "1:17:35",
                "thumb": "https://img.youtube.com/vi/JZlJ1otXBD8/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/JZlJ1otXBD8?rel=0"
            },
            {
                "title": "MÓDULOS",
                "duration": "10:02",
                "thumb": "https://img.youtube.com/vi/7U_NG78HuA4/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/7U_NG78HuA4?rel=0"
            },
            {
                "title": "Lidando com ARQUIVOS",
                "duration": "43:34",
                "thumb": "https://img.youtube.com/vi/3h15kc10fCY/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/3h15kc10fCY?rel=0"
            },
            {
                "title": "Loteria da Babilônia",
                "duration": "28:12",
                "thumb": "https://img.youtube.com/vi/lIczWRig7S8/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/lIczWRig7S8?rel=0"
            },
            {
                "title": "Dados de API",
                "duration": "1:09:32",
                "thumb": "https://img.youtube.com/vi/iBsyZ0RQCqc/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/iBsyZ0RQCqc?rel=0"
            },
            {
                "title": "Ambientes Virtuais",
                "duration": "22:16",
                "thumb": "https://img.youtube.com/vi/Xa9SSu8qLHs/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/Xa9SSu8qLHs?rel=0"
            },
            {
                "title": "Mais sobre Listas",
                "duration": "17:47",
                "thumb": "https://img.youtube.com/vi/QE5_WPaflU0/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/QE5_WPaflU0?rel=0"
            },
            {
                "title": "Exercícios Parte I",
                "duration": "19:11",
                "thumb": "https://img.youtube.com/vi/XMmbAlsiPXM/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/XMmbAlsiPXM?rel=0"
            },
            {
                "title": "Exercícios Parte II",
                "duration": "32:32",
                "thumb": "https://img.youtube.com/vi/qND0UuYZ730/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/qND0UuYZ730?rel=0"
            },
            {
                "title": "Exercícios Parte III",
                "duration": "17:25",
                "thumb": "https://img.youtube.com/vi/rcbyyoNJ-mo/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/rcbyyoNJ-mo?rel=0"
            }
        ]
    },
    {
        "id": 3,
        "title": "SQL",
        "category": "dados",
        "instructor": "Téo Calvo",
        "level": "Iniciante",
        "duration": "14h 8m",
        "date": "2025",
        "favorite": false,
        "poster": "https://img.youtube.com/vi/VmkJG8awKqM/maxresdefault.jpg",
        "description": "Curso de SQL completamente do zero até o avançado. Por aqui você vai aprender a sintaxe SQL e também conceitos importantes sobre banco de dados relacionais.",
        "lessons": [
            {
                "title": "Introdução",
                "duration": "38:34",
                "thumb": "https://img.youtube.com/vi/VmkJG8awKqM/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/VmkJG8awKqM?rel=0"
            },
            {
                "title": "Primeiros Conceitos",
                "duration": "27:00",
                "thumb": "https://img.youtube.com/vi/AYIEGnTtMsY/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/AYIEGnTtMsY?rel=0"
            },
            {
                "title": "O tal SQL",
                "duration": "10:25",
                "thumb": "https://img.youtube.com/vi/dXdo-KtGzRk/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/dXdo-KtGzRk?rel=0"
            },
            {
                "title": "SETUP",
                "duration": "8:07",
                "thumb": "https://img.youtube.com/vi/nuOIjVCz2zs/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/nuOIjVCz2zs?rel=0"
            },
            {
                "title": "OLÁ MUNDO!",
                "duration": "21:08",
                "thumb": "https://img.youtube.com/vi/uHMCwfyWwuE/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/uHMCwfyWwuE?rel=0"
            },
            {
                "title": "Dúvidas",
                "duration": "10:10",
                "thumb": "https://img.youtube.com/vi/zkTIJBBIiwY/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/zkTIJBBIiwY?rel=0"
            },
            {
                "title": "Revisão SELECT",
                "duration": "12:41",
                "thumb": "https://img.youtube.com/vi/00kRo-4BvOA/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/00kRo-4BvOA?rel=0"
            },
            {
                "title": "FROM",
                "duration": "12:01",
                "thumb": "https://img.youtube.com/vi/ZvAXR06HC9Y/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/ZvAXR06HC9Y?rel=0"
            },
            {
                "title": "WHERE",
                "duration": "43:44",
                "thumb": "https://img.youtube.com/vi/Cbl93-R89rw/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/Cbl93-R89rw?rel=0"
            },
            {
                "title": "Novas COLUNAS",
                "duration": "31:54",
                "thumb": "https://img.youtube.com/vi/-1Jyhq_1cXA/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/-1Jyhq_1cXA?rel=0"
            },
            {
                "title": "EXERCÍCIOS 1",
                "duration": "25:39",
                "thumb": "https://img.youtube.com/vi/PpYNbpLlCVI/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/PpYNbpLlCVI?rel=0"
            },
            {
                "title": "ORDER BY",
                "duration": "15:22",
                "thumb": "https://img.youtube.com/vi/AFdXBhhLsuk/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/AFdXBhhLsuk?rel=0"
            },
            {
                "title": "CASE WHEN",
                "duration": "22:48",
                "thumb": "https://img.youtube.com/vi/j_RgoKL1PgI/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/j_RgoKL1PgI?rel=0"
            },
            {
                "title": "COUNT",
                "duration": "11:00",
                "thumb": "https://img.youtube.com/vi/YMKDvy7O7t8/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/YMKDvy7O7t8?rel=0"
            },
            {
                "title": "DISTINCT",
                "duration": "19:58",
                "thumb": "https://img.youtube.com/vi/lxhbbrCZnsU/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/lxhbbrCZnsU?rel=0"
            },
            {
                "title": "ESTATÍSTICAS",
                "duration": "23:58",
                "thumb": "https://img.youtube.com/vi/Ds7RYPRhh-Y/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/Ds7RYPRhh-Y?rel=0"
            },
            {
                "title": "GROUP BY",
                "duration": "20:33",
                "thumb": "https://img.youtube.com/vi/vyXP640E8vw/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/vyXP640E8vw?rel=0"
            },
            {
                "title": "HAVING",
                "duration": "6:08",
                "thumb": "https://img.youtube.com/vi/AKDAkZDXQu8/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/AKDAkZDXQu8?rel=0"
            },
            {
                "title": "EXERCÍCIOS 2",
                "duration": "50:08",
                "thumb": "https://img.youtube.com/vi/TFt5Hs-L6F4/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/TFt5Hs-L6F4?rel=0"
            },
            {
                "title": "Cruzamento de Dados",
                "duration": "22:04",
                "thumb": "https://img.youtube.com/vi/G0zcV0OZJM0/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/G0zcV0OZJM0?rel=0"
            },
            {
                "title": "JOINs",
                "duration": "46:05",
                "thumb": "https://img.youtube.com/vi/PwL4h66oPZs/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/PwL4h66oPZs?rel=0"
            },
            {
                "title": "EXERCÍCIOS 3",
                "duration": "31:32",
                "thumb": "https://img.youtube.com/vi/oSYUkr_x83s/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/oSYUkr_x83s?rel=0"
            },
            {
                "title": "SubQueries",
                "duration": "25:42",
                "thumb": "https://img.youtube.com/vi/GMq_i5D2Jw4/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/GMq_i5D2Jw4?rel=0"
            },
            {
                "title": "CTEs",
                "duration": "33:48",
                "thumb": "https://img.youtube.com/vi/6kh8pQyz-jA/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/6kh8pQyz-jA?rel=0"
            },
            {
                "title": "EXERCÍCIOS 4",
                "duration": "35:52",
                "thumb": "https://img.youtube.com/vi/i3vsaRzvWKE/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/i3vsaRzvWKE?rel=0"
            },
            {
                "title": "ENUMERANDO LINHAS",
                "duration": "27:31",
                "thumb": "https://img.youtube.com/vi/cwDfakRemVw/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/cwDfakRemVw?rel=0"
            },
            {
                "title": "WINDOW FUNCTIONS",
                "duration": "27:30",
                "thumb": "https://img.youtube.com/vi/Zql3MJ26xsw/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/Zql3MJ26xsw?rel=0"
            },
            {
                "title": "EXERCÍCIOS 5",
                "duration": "32:55",
                "thumb": "https://img.youtube.com/vi/U29Lp2c2ZCM/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/U29Lp2c2ZCM?rel=0"
            },
            {
                "title": "DDL e DML",
                "duration": "43:47",
                "thumb": "https://img.youtube.com/vi/52-TAulVmYU/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/52-TAulVmYU?rel=0"
            },
            {
                "title": "PROJETO FINAL",
                "duration": "1:50:24",
                "thumb": "https://img.youtube.com/vi/kyxQGR9ubyA/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/kyxQGR9ubyA?rel=0"
            }
        ]
    },
    {
        "id": 4,
        "title": "Pandas",
        "category": "dados",
        "instructor": "Téo Calvo",
        "level": "Iniciante",
        "duration": "10h 42m",
        "date": "2025",
        "favorite": false,
        "poster": "https://img.youtube.com/vi/9Cw7iIjFlBc/maxresdefault.jpg",
        "description": "Pandas é uma biblioteca do ecossistema Python, uma das mais utilizadas e melhores documentadas para se trabalhar com processamento e análise de dados.",
        "lessons": [
            {
                "title": "Ensinando Pandas Ep 01 - Setup + Series",
                "duration": "39:20",
                "thumb": "https://img.youtube.com/vi/9Cw7iIjFlBc/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/9Cw7iIjFlBc?rel=0"
            },
            {
                "title": "Ensinando Pandas Ep 02 - iloc e loc",
                "duration": "45:35",
                "thumb": "https://img.youtube.com/vi/mAR5V-22oA4/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/mAR5V-22oA4?rel=0"
            },
            {
                "title": "Ensinando Pandas Ep 03 - Importando dados",
                "duration": "27:31",
                "thumb": "https://img.youtube.com/vi/7E5Cr9lMdpU/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/7E5Cr9lMdpU?rel=0"
            },
            {
                "title": "Ensinando Pandas Ep 04 - Dataframes",
                "duration": "44:23",
                "thumb": "https://img.youtube.com/vi/bMEXh1K17eg/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/bMEXh1K17eg?rel=0"
            },
            {
                "title": "Ensinando Pandas Ep 05 - Filtros",
                "duration": "46:08",
                "thumb": "https://img.youtube.com/vi/GNX0Bvo40M0/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/GNX0Bvo40M0?rel=0"
            },
            {
                "title": "Ensinando Pandas Ep 06 - Filtros não são cópias",
                "duration": "13:20",
                "thumb": "https://img.youtube.com/vi/Tg3NVMbcgHs/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/Tg3NVMbcgHs?rel=0"
            },
            {
                "title": "Ensinando Pandas Ep 07 - Novas colunas e ordenação",
                "duration": "38:58",
                "thumb": "https://img.youtube.com/vi/NluSWHRZPFY/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/NluSWHRZPFY?rel=0"
            },
            {
                "title": "Ensinando Pandas Ep 08 - ASTYPE e REPLACE",
                "duration": "19:37",
                "thumb": "https://img.youtube.com/vi/fWy5cNTWTeM/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/fWy5cNTWTeM?rel=0"
            },
            {
                "title": "Ensinando Pandas Ep 09 - Dados Faltantes!",
                "duration": "25:43",
                "thumb": "https://img.youtube.com/vi/nN3MmJGDNxM/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/nN3MmJGDNxM?rel=0"
            },
            {
                "title": "Ensinando Pandas Ep 10 - DUPLICATAS",
                "duration": "30:29",
                "thumb": "https://img.youtube.com/vi/USpeepeztTI/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/USpeepeztTI?rel=0"
            },
            {
                "title": "Ensinando Pandas Ep 11 - APPLY",
                "duration": "59:53",
                "thumb": "https://img.youtube.com/vi/OyO7lzlG3r8/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/OyO7lzlG3r8?rel=0"
            },
            {
                "title": "Ensinando Pandas Ep 12 - GROUP BY",
                "duration": "49:11",
                "thumb": "https://img.youtube.com/vi/VKclVgd7kZw/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/VKclVgd7kZw?rel=0"
            },
            {
                "title": "Ensinando Pandas Ep 13 - MERGE",
                "duration": "54:10",
                "thumb": "https://img.youtube.com/vi/w5PLsNnUCTA/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/w5PLsNnUCTA?rel=0"
            },
            {
                "title": "Ensinando Pandas Ep 14 - CONCAT",
                "duration": "35:26",
                "thumb": "https://img.youtube.com/vi/wOWCd-b8AuE/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/wOWCd-b8AuE?rel=0"
            },
            {
                "title": "Ensinando Pandas Ep 15 - Conexão com Banco de Dados SQL",
                "duration": "45:37",
                "thumb": "https://img.youtube.com/vi/u_K93Ry04U4/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/u_K93Ry04U4?rel=0"
            },
            {
                "title": "Ensinando Pandas Ep 16 - Stack, Unstack e Pivot",
                "duration": "35:11",
                "thumb": "https://img.youtube.com/vi/YxfYe2NeFAI/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/YxfYe2NeFAI?rel=0"
            },
            {
                "title": "Ensinando Pandas Ep 17 - EXPLODE",
                "duration": "31:52",
                "thumb": "https://img.youtube.com/vi/e3j9PTAjqAk/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/e3j9PTAjqAk?rel=0"
            }
        ]
    },
    {
        "id": 5,
        "title": "Estatística",
        "instructor": "Téo Calvo",
        "description": "Estatística é uma das principais disciplinas para a área de dados. Desde análise simples, mas tambem, toda base para avançarmos em aprendizado de máquina, se faz necessário o conhecimento de métodos e modelos estatísticos.",
        "category": "dados",
        "level": "Iniciante",
        "date": "2025",
        "poster": "https://img.youtube.com/vi/D0hlGcAmc94/maxresdefault.jpg",
        "duration": "12h 50m",
        "favorite": false,
        "lessons": [
            {
                "title": "APRENDA ESTATÍSTICA 01: População e Amostra",
                "duration": "58:38",
                "thumb": "https://img.youtube.com/vi/4CcgZXXIl7o/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/4CcgZXXIl7o?rel=0"
            },
            {
                "title": "APRENDA ESTATÍSTICA 02: Tipos de Variáveis",
                "duration": "21:06",
                "thumb": "https://img.youtube.com/vi/FPZBAp8QSRM/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/FPZBAp8QSRM?rel=0"
            },
            {
                "title": "APRENDA ESTATÍSTICA 03: Tabela de Frequência",
                "duration": "19:33",
                "thumb": "https://img.youtube.com/vi/qca5fOJ2TTg/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/qca5fOJ2TTg?rel=0"
            },
            {
                "title": "APRENDA ESTATÍSTICA 04: Tabela de Frequência na PRÁTICA",
                "duration": "48:05",
                "thumb": "https://img.youtube.com/vi/cVpO7V0fu_s/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/cVpO7V0fu_s?rel=0"
            },
            {
                "title": "APRENDA ESTATÍSTICA 05: Somatórios e Média",
                "duration": "39:38",
                "thumb": "https://img.youtube.com/vi/D0hlGcAmc94/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/D0hlGcAmc94?rel=0"
            },
            {
                "title": "APRENDA ESTATÍSTICA 06: Mediana e Quartis",
                "duration": "38:13",
                "thumb": "https://img.youtube.com/vi/sL5tbdc2rCE/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/sL5tbdc2rCE?rel=0"
            },
            {
                "title": "APRENDA ESTATÍSTICA 07: Medidas de Resumo na Prática (PLANILHAS)",
                "duration": "25:22",
                "thumb": "https://img.youtube.com/vi/hgxLeea6Hr8/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/hgxLeea6Hr8?rel=0"
            },
            {
                "title": "APRENDA ESTATÍSTICA 08: Medidas de Resumo na Prática (PYTHON)",
                "duration": "17:27",
                "thumb": "https://img.youtube.com/vi/9D_c_22lRL8/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/9D_c_22lRL8?rel=0"
            },
            {
                "title": "APRENDA ESTATÍSTICA 09: Medidas de Resumo na Prática (SQL)",
                "duration": "23:26",
                "thumb": "https://img.youtube.com/vi/eTBXmQmyqMc/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/eTBXmQmyqMc?rel=0"
            },
            {
                "title": "APRENDA ESTATÍSTICA 10: Medidas de Dispersão",
                "duration": "22:41",
                "thumb": "https://img.youtube.com/vi/0kdgO0E4Rg8/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/0kdgO0E4Rg8?rel=0"
            },
            {
                "title": "APRENDA ESTATÍSTICA 11: Medidas de Dispersão (PLANILHAS)",
                "duration": "11:23",
                "thumb": "https://img.youtube.com/vi/BCAbwdkdfhM/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/BCAbwdkdfhM?rel=0"
            },
            {
                "title": "APRENDA ESTATÍSTICA 12: Medidas de Dispersão (PYTHON)",
                "duration": "10:55",
                "thumb": "https://img.youtube.com/vi/aZ7ufhnsblY/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/aZ7ufhnsblY?rel=0"
            },
            {
                "title": "APRENDA ESTATÍSTICA 13: Gráficos",
                "duration": "55:02",
                "thumb": "https://img.youtube.com/vi/BAhz7OgJyAQ/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/BAhz7OgJyAQ?rel=0"
            },
            {
                "title": "APRENDA ESTATÍSTICA 14: Gráficos (PLANILHAS)",
                "duration": "18:24",
                "thumb": "https://img.youtube.com/vi/ZmYG2dPJxfw/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/ZmYG2dPJxfw?rel=0"
            },
            {
                "title": "APRENDA ESTATÍSTICA 15: Gráficos (PYTHON)",
                "duration": "27:54",
                "thumb": "https://img.youtube.com/vi/_PzfSLBn22k/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/_PzfSLBn22k?rel=0"
            },
            {
                "title": "APRENDA ESTATÍSTICA 16: Probabilidade",
                "duration": "1:28:58",
                "thumb": "https://img.youtube.com/vi/cZyp6Tq9V-0/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/cZyp6Tq9V-0?rel=0"
            },
            {
                "title": "APRENDA ESTATÍSTICA 17: Probabilidade (PLANILHAS)",
                "duration": "13:37",
                "thumb": "https://img.youtube.com/vi/P48vFrhhKf0/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/P48vFrhhKf0?rel=0"
            },
            {
                "title": "APRENDA ESTATÍSTICA 18: Distribuição Bernoulli",
                "duration": "55:27",
                "thumb": "https://img.youtube.com/vi/QoMwhXw5aD4/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/QoMwhXw5aD4?rel=0"
            },
            {
                "title": "APRENDA ESTATÍSTICA 19: Distribuição Normal",
                "duration": "24:41",
                "thumb": "https://img.youtube.com/vi/pbN-W7gV_kM/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/pbN-W7gV_kM?rel=0"
            },
            {
                "title": "APRENDA ESTATÍSTICA 20: Intervalo de Confiança",
                "duration": "59:34",
                "thumb": "https://img.youtube.com/vi/Xy2esjcmcdI/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/Xy2esjcmcdI?rel=0"
            },
            {
                "title": "APRENDA ESTATÍSTICA 20.1: Intervalo de Confiança (PYTHON)",
                "duration": "15:50",
                "thumb": "https://img.youtube.com/vi/ueFCFsPHRRo/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/ueFCFsPHRRo?rel=0"
            },
            {
                "title": "APRENDA ESTATÍSTICA 21: Teste de Hipótese",
                "duration": "1:15:02",
                "thumb": "https://img.youtube.com/vi/qrv5rFhrM4Q/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/qrv5rFhrM4Q?rel=0"
            }
        ]
    },
    {
        "id": 6,
        "title": "Machine Learning",
        "instructor": "Téo Calvo",
        "description": "O uso de técnicas voltadas à Aprendizado de Máquina tem sido cada dia mais comuns em diferentes mercados e indústricas. Dominar os principais conceitos te ajudará a alcançar não só objetivos da sua empresa, mas também, de crescimento profissional.",
        "category": "ia",
        "level": "Iniciante",
        "date": "2026",
        "poster": "https://img.youtube.com/vi/80B4Ze11qWw/maxresdefault.jpg",
        "duration": "13h 30m",
        "favorite": false,
        "lessons": [
            {
                "title": "Machine Learning 01: Sobre o curso e dados",
                "duration": "39:25",
                "thumb": "https://img.youtube.com/vi/oz_rZ92Tmls/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/oz_rZ92Tmls?rel=0"
            },
            {
                "title": "Machine Learning 02: Construindo Modelo",
                "duration": "30:12",
                "thumb": "https://img.youtube.com/vi/dPL3eZNjsMs/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/dPL3eZNjsMs?rel=0"
            },
            {
                "title": "Machine Learning 03: Prática no Python (Frutas)",
                "duration": "24:53",
                "thumb": "https://img.youtube.com/vi/80B4Ze11qWw/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/80B4Ze11qWw?rel=0"
            },
            {
                "title": "Machine Learning 04: Prática no Python (Cerveja)",
                "duration": "19:03",
                "thumb": "https://img.youtube.com/vi/wc8o423bwi8/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/wc8o423bwi8?rel=0"
            },
            {
                "title": "Machine Learning 05: Case Star Wars",
                "duration": "21:59",
                "thumb": "https://img.youtube.com/vi/s8jFHHM679s/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/s8jFHHM679s?rel=0"
            },
            {
                "title": "Machine Learning 06: Ciclo Analítico",
                "duration": "14:36",
                "thumb": "https://img.youtube.com/vi/KIGKWjmWavU/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/KIGKWjmWavU?rel=0"
            },
            {
                "title": "Machine Learning 07: Regressão Linear",
                "duration": "31:45",
                "thumb": "https://img.youtube.com/vi/IZcDceAjFWk/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/IZcDceAjFWk?rel=0"
            },
            {
                "title": "Machine Learning 08: Árvore de Decisão - Regressão",
                "duration": "14:59",
                "thumb": "https://img.youtube.com/vi/pPWxZpSkt1s/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/pPWxZpSkt1s?rel=0"
            },
            {
                "title": "Machine Learning 09: Prática no Python (Reg. Linear e Árvore)",
                "duration": "28:20",
                "thumb": "https://img.youtube.com/vi/baTTP48cOho/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/baTTP48cOho?rel=0"
            },
            {
                "title": "Machine Learning 10: Regressão Logística",
                "duration": "22:19",
                "thumb": "https://img.youtube.com/vi/Pk7cHs9H1OY/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/Pk7cHs9H1OY?rel=0"
            },
            {
                "title": "Machine Learning 11: Árvore de Decisão (Classificação)",
                "duration": "25:36",
                "thumb": "https://img.youtube.com/vi/4HwFrWAULkk/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/4HwFrWAULkk?rel=0"
            },
            {
                "title": "Machine Learning 12: Naive Bayes",
                "duration": "28:59",
                "thumb": "https://img.youtube.com/vi/ahJks3rmK34/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/ahJks3rmK34?rel=0"
            },
            {
                "title": "Machine Learning 13: Prática no Python (Classificação)",
                "duration": "22:37",
                "thumb": "https://img.youtube.com/vi/QhjyjH8CRKw/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/QhjyjH8CRKw?rel=0"
            },
            {
                "title": "Machine Learning 14: Métricas de ajuste - Introdução",
                "duration": "28:04",
                "thumb": "https://img.youtube.com/vi/ImWgtWmP61s/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/ImWgtWmP61s?rel=0"
            },
            {
                "title": "Machine Learning 15: Métricas de ajuste (Matriz de Confusão)",
                "duration": "1:04:49",
                "thumb": "https://img.youtube.com/vi/oB6vEx11vZU/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/oB6vEx11vZU?rel=0"
            },
            {
                "title": "Machine Learning 16: Prevendo a Felicidade",
                "duration": "33:19",
                "thumb": "https://img.youtube.com/vi/KjI3xyZEj-w/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/KjI3xyZEj-w?rel=0"
            },
            {
                "title": "Machine Learning 17: Projeto Churn - Sample",
                "duration": "52:23",
                "thumb": "https://img.youtube.com/vi/QMThkUWSEVM/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/QMThkUWSEVM?rel=0"
            },
            {
                "title": "Machine Learning 18: Projeto Churn - Explore",
                "duration": "35:59",
                "thumb": "https://img.youtube.com/vi/GdFvcj_m4VE/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/GdFvcj_m4VE?rel=0"
            },
            {
                "title": "Machine Learning 19: Projeto Churn - Modify",
                "duration": "57:31",
                "thumb": "https://img.youtube.com/vi/u23Ld3ji_nk/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/u23Ld3ji_nk?rel=0"
            },
            {
                "title": "Machine Learning 20: Projeto Churn - Modify (Python)",
                "duration": "27:33",
                "thumb": "https://img.youtube.com/vi/QbKjOfY_bpQ/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/QbKjOfY_bpQ?rel=0"
            },
            {
                "title": "Machine Learning 21: Projeto Churn - Pipeline",
                "duration": "32:54",
                "thumb": "https://img.youtube.com/vi/kPQAla_r8d0/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/kPQAla_r8d0?rel=0"
            },
            {
                "title": "Machine Learning 22: Projeto Churn - Assess",
                "duration": "40:32",
                "thumb": "https://img.youtube.com/vi/jK5ljNa_Qrs/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/jK5ljNa_Qrs?rel=0"
            },
            {
                "title": "Machine Learning 23: Projeto Churn - Tuning",
                "duration": "45:24",
                "thumb": "https://img.youtube.com/vi/lYXyYmSOZLM/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/lYXyYmSOZLM?rel=0"
            },
            {
                "title": "Machine Learning 24: Projeto Churn - Novas predições",
                "duration": "44:50",
                "thumb": "https://img.youtube.com/vi/iWFBeR552Hc/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/iWFBeR552Hc?rel=0"
            },
            {
                "title": "Machine Learning 25: Métricas Adicionais",
                "duration": "22:01",
                "thumb": "https://img.youtube.com/vi/LhXiEDrt418/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/LhXiEDrt418?rel=0"
            }
        ]
    },{
        "id": 7,
        "title": "MLFlow",
        "instructor": "Téo Calvo",
        "description": "MLFlow é uma peça fundamental para se ganhar produtividade em projetos de Machine Learning e Inteligência Artificial.",
        "category": "ia",
        "level": "Iniciante",
        "date": "2025",
        "poster": "https://img.youtube.com/vi/W8bxk42C9UE/maxresdefault.jpg",
        "duration": "58m",
        "favorite": false,
        "lessons": [
            {
                "title": "O que é MLFLOW e como INSTALAR",
                "duration": "16:03",
                "thumb": "https://img.youtube.com/vi/W8bxk42C9UE/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/W8bxk42C9UE?rel=0"
            },
            {
                "title": "Tracking de modelos com MLFlow",
                "duration": "23:46",
                "thumb": "https://img.youtube.com/vi/V-Zc_T6iuJc/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/V-Zc_T6iuJc?rel=0"
            },
            {
                "title": "REGISTRANDO e CONSUMINDO modelos do MLFLOW",
                "duration": "12:03",
                "thumb": "https://img.youtube.com/vi/K2MYiW5m5Ug/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/K2MYiW5m5Ug?rel=0"
            },
            {
                "title": "Atualização AUTOMÁTICA do modelo com MLFLOW",
                "duration": "6:58",
                "thumb": "https://img.youtube.com/vi/KdnRZSH6Drk/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/KdnRZSH6Drk?rel=0"
            }
        ]
    },
    {
        "id": 8,
        "title": "Linguagem Go",
        "instructor": "Téo Calvo",
        "description": "Curso de Go para iniciantes na linguagem com foco em sua sintaxe, exemplos e principais características da linguagem.",
        "category": "programacao",
        "level": "Iniciante",
        "date": "2025",
        "poster": "https://img.youtube.com/vi/LDuWS595vsU/maxresdefault.jpg",
        "duration": "12h 27m",
        "favorite": false,
        "lessons": [
            {
                "title": "Curso Linguagem Go: Sobre o Curso",
                "duration": "24:17",
                "thumb": "https://img.youtube.com/vi/LDuWS595vsU/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/LDuWS595vsU?rel=0"
            },
            {
                "title": "Curso Linguagem Go: Sobre o Go e Instalação",
                "duration": "7:43",
                "thumb": "https://img.youtube.com/vi/WM4WhVYNBPw/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/WM4WhVYNBPw?rel=0"
            },
            {
                "title": "Curso Linguagem Go: Olá, Mundo!",
                "duration": "14:59",
                "thumb": "https://img.youtube.com/vi/EarYUT9N88U/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/EarYUT9N88U?rel=0"
            },
            {
                "title": "Curso Linguagem Go: Tipos Numéricos",
                "duration": "12:10",
                "thumb": "https://img.youtube.com/vi/aiN4-ow1-yU/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/aiN4-ow1-yU?rel=0"
            },
            {
                "title": "Curso Linguagem Go: Tipo String",
                "duration": "8:27",
                "thumb": "https://img.youtube.com/vi/2VAHVYi1Obk/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/2VAHVYi1Obk?rel=0"
            },
            {
                "title": "Curso Linguagem Go: Tipo Bool",
                "duration": "2:43",
                "thumb": "https://img.youtube.com/vi/mcyWxNAC3jw/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/mcyWxNAC3jw?rel=0"
            },
            {
                "title": "Curso Linguagem Go: Exercícios Bloco 01",
                "duration": "7:10",
                "thumb": "https://img.youtube.com/vi/8mB9GB2ss_c/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/8mB9GB2ss_c?rel=0"
            },
            {
                "title": "Curso Linguagem Go: Variáveis",
                "duration": "19:51",
                "thumb": "https://img.youtube.com/vi/D3XLpDVMRxk/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/D3XLpDVMRxk?rel=0"
            },
            {
                "title": "Curso Linguagem Go: Recebendo Entradas",
                "duration": "5:41",
                "thumb": "https://img.youtube.com/vi/aqxwmkSuvVQ/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/aqxwmkSuvVQ?rel=0"
            },
            {
                "title": "Curso Linguagem Go: Exercícios Bloco 02",
                "duration": "24:07",
                "thumb": "https://img.youtube.com/vi/M3dVw_IfXx4/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/M3dVw_IfXx4?rel=0"
            },
            {
                "title": "Curso Linguagem Go: IF e ELSE",
                "duration": "17:10",
                "thumb": "https://img.youtube.com/vi/zdVQQdujFYM/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/zdVQQdujFYM?rel=0"
            },
            {
                "title": "Curso Linguagem Go: Switch",
                "duration": "11:29",
                "thumb": "https://img.youtube.com/vi/DZNLckEvI5s/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/DZNLckEvI5s?rel=0"
            },
            {
                "title": "Curso Linguagem Go: Exercícios Bloco 03",
                "duration": "43:51",
                "thumb": "https://img.youtube.com/vi/lPdysvEl4Eg/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/lPdysvEl4Eg?rel=0"
            },
            {
                "title": "Curso Linguagem Go: Laços de Repetição",
                "duration": "24:15",
                "thumb": "https://img.youtube.com/vi/PjiWvbR3spg/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/PjiWvbR3spg?rel=0"
            },
            {
                "title": "Curso Linguagem Go: Exercícios Bloco 04",
                "duration": "24:19",
                "thumb": "https://img.youtube.com/vi/f02dMZKm09w/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/f02dMZKm09w?rel=0"
            },
            {
                "title": "Curso Linguagem Go: Arrays",
                "duration": "18:46",
                "thumb": "https://img.youtube.com/vi/skRjOj8lEhc/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/skRjOj8lEhc?rel=0"
            },
            {
                "title": "Curso Linguagem Go: Fatias",
                "duration": "16:07",
                "thumb": "https://img.youtube.com/vi/hOpB47oUZPM/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/hOpB47oUZPM?rel=0"
            },
            {
                "title": "Curso Linguagem Go: Exercícios Bloco 05",
                "duration": "17:46",
                "thumb": "https://img.youtube.com/vi/8lUe7_Bz3lc/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/8lUe7_Bz3lc?rel=0"
            },
            {
                "title": "Curso Linguagem Go: Mapas",
                "duration": "26:14",
                "thumb": "https://img.youtube.com/vi/fXVtnJphAXk/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/fXVtnJphAXk?rel=0"
            },
            {
                "title": "Curso Linguagem Go: Exercícios Bloco 06",
                "duration": "14:57",
                "thumb": "https://img.youtube.com/vi/qHqD085K39o/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/qHqD085K39o?rel=0"
            },
            {
                "title": "Curso Linguagem Go: Funções",
                "duration": "33:58",
                "thumb": "https://img.youtube.com/vi/9jwLK5R_xgU/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/9jwLK5R_xgU?rel=0"
            },
            {
                "title": "Curso Linguagem Go: defer, panic, recover",
                "duration": "16:28",
                "thumb": "https://img.youtube.com/vi/8uEyCO0Ydyk/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/8uEyCO0Ydyk?rel=0"
            },
            {
                "title": "Curso Linguagem Go: Ponteiros",
                "duration": "13:22",
                "thumb": "https://img.youtube.com/vi/L4Mg4RE2bo8/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/L4Mg4RE2bo8?rel=0"
            },
            {
                "title": "Curso Linguagem Go: Exercícios Bloco 07",
                "duration": "23:08",
                "thumb": "https://img.youtube.com/vi/E_nguMPoadc/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/E_nguMPoadc?rel=0"
            },
            {
                "title": "Curso Linguagem Go: Criação de Tipos",
                "duration": "18:40",
                "thumb": "https://img.youtube.com/vi/Ojx4-8Ckvxk/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/Ojx4-8Ckvxk?rel=0"
            },
            {
                "title": "Curso Linguagem Go: Structs",
                "duration": "27:03",
                "thumb": "https://img.youtube.com/vi/SFNYr3dT16o/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/SFNYr3dT16o?rel=0"
            },
            {
                "title": "Curso Linguagem Go: Tipos Incluídos",
                "duration": "14:14",
                "thumb": "https://img.youtube.com/vi/_gh_rDJViUU/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/_gh_rDJViUU?rel=0"
            },
            {
                "title": "Curso Linguagem Go: Interfaces",
                "duration": "38:06",
                "thumb": "https://img.youtube.com/vi/rck0DOd4Nc0/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/rck0DOd4Nc0?rel=0"
            },
            {
                "title": "Curso Linguagem Go: GoRoutines",
                "duration": "17:19",
                "thumb": "https://img.youtube.com/vi/Xuiq5Qr4PeA/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/Xuiq5Qr4PeA?rel=0"
            },
            {
                "title": "Curso Linguagem Go: Centenas de Goroutines",
                "duration": "9:53",
                "thumb": "https://img.youtube.com/vi/DW_O80zhMB0/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/DW_O80zhMB0?rel=0"
            },
            {
                "title": "Curso Linguagem Go: Canais",
                "duration": "10:19",
                "thumb": "https://img.youtube.com/vi/sWT3T5IXMoA/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/sWT3T5IXMoA?rel=0"
            },
            {
                "title": "Curso Linguagem Go: SELECT",
                "duration": "15:34",
                "thumb": "https://img.youtube.com/vi/ZX4QksTUM3A/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/ZX4QksTUM3A?rel=0"
            },
            {
                "title": "Curso Linguagem Go: Canais com Buffer",
                "duration": "24:27",
                "thumb": "https://img.youtube.com/vi/N_WEcmNk15w/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/N_WEcmNk15w?rel=0"
            },
            {
                "title": "Curso Linguagem Go: Desafio FiGourinhas",
                "duration": "41:14",
                "thumb": "https://img.youtube.com/vi/6JWBNYbriwU/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/6JWBNYbriwU?rel=0"
            },
            {
                "title": "Curso Linguagem Go: Exercícios para casa",
                "duration": "1:42:10",
                "thumb": "https://img.youtube.com/vi/V87PTX2r_eY/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/V87PTX2r_eY?rel=0"
            }
        ]
    }
];