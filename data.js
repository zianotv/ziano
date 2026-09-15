const categories = [
{ id: 'all', name: 'Todas as Aulas', icon: 'bi bi-grid' },
{ id: 'programacao', name: 'Programação', icon: 'bi bi-code-slash' },
{ id: 'design', name: 'Design & UI/UX', icon: 'bi bi-palette' },
{ id: 'negocios', name: 'Negócios & Gestão', icon: 'bi bi-graph-up' },
{ id: 'marketing', name: 'Marketing Digital', icon: 'bi bi-megaphone' },
{ id: 'dados', name: 'Ciência de Dados', icon: 'bi bi-database' },
{ id: 'ia', name: 'Inteligência Artificial', icon: 'bi bi-robot' },
{ id: 'favoritos', name: 'Favoritos', icon: 'bi bi-star' }
];

const coursesData = [
{
    id: 'course-1',
    title: 'Desenvolvimento Web Fullstack',
    category: 'programacao',
    instructor: 'Prof. Ricardo Silva',
    level: 'Iniciante ao Avançado',
    duration: '42 horas',
    date: '2025',
    favorite: false,
    poster: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80',
    description: 'Aprenda a criar aplicações modernas com HTML5, CSS3, JavaScript, React e Node.js. Um curso prático com projetos reais aplicados ao mercado de trabalho.',
    lessons: [
        { title: '01. Introdução à Arquitetura Web de Alta Performance e Microsserviços', duration: '15 min' },
        { title: '02. HTML5 Semântico e Estruturação', duration: '28 min' },
        { title: '03. CSS Moderno, Flexbox Layout e Grid System Responsivo', duration: '35 min' },
        { title: '04. Lógica com JavaScript ES6+', duration: '45 min' }
    ]
},
{
    id: 'course-2',
    title: 'UX/UI Design de Interfaces TV',
    category: 'design',
    instructor: 'Amanda Oliveira',
    level: 'Intermediário',
    duration: '18 horas',
    date: '2025',
    favorite: true,
    poster: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&auto=format&fit=crop&q=80',
    description: 'Especialize-se na criação de interfaces para Smart TVs e sistemas embarcados. Domine navegação por controle remoto, contraste de cores e legibilidade de telas grandes.',
    lessons: [
        { title: '01. Fundamentos de UI para TV e Dispositivos de Grande Formato', duration: '20 min' },
        { title: '02. Ergonomia da Visão à Distância', duration: '25 min' },
        { title: '03. Prototipagem de Componentes Interativos Avançados', duration: '40 min' }
    ]
},
{
    id: 'course-3',
    title: 'Inteligência Artificial & Prompt Engineering',
    category: 'ia',
    instructor: 'Dr. Lucas Mendes',
    level: 'Todos os níveis',
    duration: '30 horas',
    date: '2026',
    favorite: false,
    poster: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?w=600&auto=format&fit=crop&q=80',
    description: 'Aprenda a utilizar modelos de linguagem avançados, automação com IA e criação de agentes inteligentes para otimizar fluxos de trabalho corporativos.',
    lessons: [
        { title: '01. Conceitos Fundamentais de LLMs', duration: '18 min' },
        { title: '02. Engenharia de Prompts Avançada', duration: '32 min' },
        { title: '03. Automação de Tarefas com Agentes Autônomos em Nuvem', duration: '50 min' }
    ]
},
{
    id: 'course-4',
    title: 'Ciência de Dados com Python & Pandas',
    category: 'dados',
    instructor: 'Camila Torres',
    level: 'Intermediário',
    duration: '25 horas',
    date: '2025',
    favorite: false,
    poster: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80',
    description: 'Transforme dados brutos em insights valiosos. Aprenda manipulação de dataframes, estatística descritiva e visualização gráfica interativa.',
    lessons: [
        { title: '01. Manipulação de Estruturas de Dados', duration: '22 min' },
        { title: '02. Limpeza e Tratamento de Dados', duration: '30 min' },
        { title: '03. Visualização Visual Impactante', duration: '40 min' }
    ]
},
{
    id: 'course-5',
    title: 'Gestão Ágil e Scrum na Prática',
    category: 'negocios',
    instructor: 'Fernando Costa',
    level: 'Iniciante',
    duration: '14 horas',
    date: '2024',
    favorite: false,
    poster: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&auto=format&fit=crop&q=80',
    description: 'Aprenda como gerenciar equipes de tecnologia com eficiência utilizando metodologias ágeis, Kanban, sprints e ciclos de feedback rápido.',
    lessons: [
        { title: '01. Princípios do Manifesto Ágil', duration: '15 min' },
        { title: '02. Papéis e Ritos no Scrum', duration: '25 min' },
        { title: '03. Gestão de Backlog e Entregas', duration: '35 min' }
    ]
},
{
    id: 'course-6',
    title: 'Marketing de Conteúdo & SEO',
    category: 'marketing',
    instructor: 'Beatriz Lima',
    level: 'Iniciante ao Intermediário',
    duration: '20 horas',
    date: '2025',
    favorite: true,
    poster: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80',
    description: 'Estratégias completas para atração orgânica de alunos e clientes. Pesquisa de palavras-chave, copy de conversão e métricas de desempenho.',
    lessons: [
        { title: '01. Planejamento Editorial', duration: '18 min' },
        { title: '02. Otimização SEO On-Page', duration: '28 min' },
        { title: '03. Copywriting Persuasivo', duration: '33 min' }
    ]
},
{
    id: 'course-7',
    title: 'Arquitetura de Software em Nuvem',
    category: 'programacao',
    instructor: 'Eduardo Martins',
    level: 'Avançado',
    duration: '36 horas',
    date: '2025',
    favorite: false,
    poster: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=80',
    description: 'Projete sistemas escaláveis, microsserviços e contêineres com Docker, Kubernetes e soluções de computação em nuvem.',
    lessons: [
        { title: '01. Conceitos de Microsserviços', duration: '25 min' },
        { title: '02. Conteinerização com Docker', duration: '40 min' }
    ]
},
{
    id: 'course-8',
    title: 'Design Systems e Figma Avançado',
    category: 'design',
    instructor: 'Mariana Duarte',
    level: 'Avançado',
    duration: '22 horas',
    date: '2026',
    favorite: false,
    poster: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&auto=format&fit=crop&q=80',
    description: 'Construa bibliotecas de componentes consistentes e documentadas. Tokens de design, auto-layout avançado e variáveis de tema.',
    lessons: [
        { title: '01. Estruturação de Tokens de Cor', duration: '20 min' },
        { title: '02. Componentes Variáveis e Auto Layout', duration: '35 min' }
    ]
},
{
    id: 'course-9',
    title: 'Machine Learning Aplicado',
    category: 'ia',
    instructor: 'Dr. Lucas Mendes',
    level: 'Avançado',
    duration: '40 horas',
    date: '2025',
    favorite: false,
    poster: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=80',
    description: 'Crie modelos preditivos de regressão e classificação utilizando Scikit-Learn e TensorFlow em problemas reais do mercado.',
    lessons: [
        { title: '01. Algoritmos de Aprendizado Supervisionado', duration: '30 min' },
        { title: '02. Avaliação e Ajuste de Hiperparâmetros', duration: '45 min' }
    ]
},
{
    id: 'course-10',
    title: 'Liderança Tecnológica & CTO Mindset',
    category: 'negocios',
    instructor: 'Roberto Alves',
    level: 'Avançado',
    duration: '16 horas',
    date: '2024',
    favorite: false,
    poster: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&auto=format&fit=crop&q=80',
    description: 'Desenvolva habilidades executivas para liderar times de engenharia, tomar decisões de arquitetura e gerenciar orçamento de tecnologia.',
    lessons: [
        { title: '01. Estruturação de Engenharia de Software', duration: '20 min' },
        { title: '02. Cultura de Alta Performance', duration: '30 min' }
    ]
}
];

