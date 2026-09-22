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
        "title": "Aprenda SQL - Primeiras Magias",
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
    }
];