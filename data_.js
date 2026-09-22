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
        "id": "marketing",
        "name": "Marketing Digital",
        "icon": "bi bi-megaphone"
    },
    {
        "id": "dados",
        "name": "Ciência de Dados",
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
        id: 1,
        title: 'Metodologia e Escrita Científica',
        category: 'negocios',
        instructor: 'Tatiana Dornelas',
        level: 'Iniciante',
        duration: '6h16',
        date: '2025',
        favorite: false,
        poster: 'https://img.youtube.com/vi/hIiqiKtVvvA/maxresdefault.jpg',
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
        id: 2,
        title: 'Inteligência Evolutiva',
        category: 'empreendedorismo',
        instructor: ' Ryon Braga e Djalma Fonseca',
        level: 'Todos os níveis',
        duration: '1h56 horas',
        date: '2026',
        favorite: false,
        poster: 'https://img.youtube.com/vi/aUOnHW6WcHs/maxresdefault.jpg',
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
    {
        id: 3,
        title: 'Demoday',
        category: 'empreendedorismo',
        instructor: 'Itaipu Parquetec',
        level: 'Iniciante',
        duration: '1h49',
        date: '2025',
        favorite: false,
        poster: 'https://lh3.googleusercontent.com/d/1bVe1aZY1yKF6rtlwHbQL4pNyd5LYiDVT=w720',
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
];