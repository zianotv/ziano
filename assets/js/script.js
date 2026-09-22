let currentCategory = 'all';
let currentSearch = '';
let currentPage = 1;
const itemsPerPage = 10;
const favoritesKey = 'zianotv-favorites';

const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const categoryNav = document.getElementById('categoryNav');
const categoryTitle = document.getElementById('categoryTitle');
const courseGrid = document.getElementById('courseGrid');
const paginationStatus = document.getElementById('paginationStatus');
const previous = document.getElementById('previous');
const next = document.getElementById('next');
const mobileMenu = document.getElementById('mobileMenu');
const courseModal = document.getElementById('courseModal');
const courseModalContent = document.getElementById('courseModalContent');

function getFavorites() {
  try {
    return JSON.parse(localStorage.getItem(favoritesKey)) || [];
  } catch {
    return [];
  }
}

function isFavorite(id) {
  return getFavorites().includes(id);
}

function toggleFavorite(id) {
  const favorites = getFavorites();
  const index = favorites.indexOf(id);

  if (index === -1) {
    favorites.push(id);
  } else {
    favorites.splice(index, 1);
  }

  localStorage.setItem(favoritesKey, JSON.stringify(favorites));

  openCourse(id);
  renderCategories();
  renderGrid();
}

function renderCategories() {
  categoryNav.innerHTML = categories.map(category => `
    <button
      class="category-button ${currentCategory === category.id ? 'active' : ''}"
      onclick="selectCategory('${category.id}')"
    >
      <i class="${category.icon}"></i>
      <span>${category.name}</span>
    </button>
  `).join('');
}

function selectCategory(id) {
  currentCategory = id;
  currentPage = 1;

  const category = categories.find(item => item.id === id);

  categoryTitle.textContent = category
    ? category.name
    : 'Todos os Cursos';

  renderCategories();
  renderGrid();
  closeSidebarOnMobile();
}

function toggleSidebar() {
  if (window.innerWidth > 768) return;

  const open = sidebar.classList.toggle('open');

  overlay.classList.toggle('hidden', !open);
  mobileMenu.setAttribute('aria-expanded', String(open));
}

function toggleSidebarCollapse() {
  if (window.innerWidth <= 768) return;

  const collapsed = sidebar.classList.toggle('collapsed');

  document.getElementById('sidebarToggle').setAttribute(
    'aria-expanded',
    String(!collapsed)
  );
}

function closeSidebarOnMobile() {
  if (window.innerWidth > 768) return;

  sidebar.classList.remove('open');
  overlay.classList.add('hidden');
  mobileMenu.setAttribute('aria-expanded', 'false');
}

function handleSearch(value) {
  currentSearch = value.toLowerCase().trim();
  currentPage = 1;
  renderGrid();
}

function getFilteredCourses() {
  const favorites = getFavorites();

  return coursesData.filter(course => {
    const categoryMatch =
      currentCategory === 'all' ||
      (
        currentCategory === 'favoritos' &&
        favorites.includes(course.id)
      ) ||
      course.category === currentCategory;

    const searchMatch =
      !currentSearch ||
      course.title.toLowerCase().includes(currentSearch) ||
      course.instructor.toLowerCase().includes(currentSearch);

    return categoryMatch && searchMatch;
  });
}

function renderGrid() {
  const courses = getFilteredCourses();
  const totalPages = Math.ceil(courses.length / itemsPerPage) || 1;

  if (currentPage > totalPages) {
    currentPage = totalPages;
  }

  const start = (currentPage - 1) * itemsPerPage;
  const visible = courses.slice(start, start + itemsPerPage);

  paginationStatus.textContent =
    `Página ${currentPage} de ${totalPages}`;

  previous.style.visibility =
    totalPages > 1 ? 'visible' : 'hidden';

  next.style.visibility =
    totalPages > 1 ? 'visible' : 'hidden';

  if (!visible.length) {
    courseGrid.innerHTML = `
      <div class="empty">
        <i class="bi bi-mortarboard-fill"></i>
        <p>Nenhum curso encontrado.</p>
      </div>
    `;

    return;
  }

  courseGrid.innerHTML = visible.map(course => `
    <article
      class="card"
      onclick="openCourse(${course.id})"
    >
      <figure class="poster">
        <img
          src="${course.poster}"
          alt="${course.title}"
          loading="lazy"
        >
      </figure>

      <h2 class="title">${course.title}</h2>
    </article>
  `).join('');
}

function openCourse(id) {
  const course = coursesData.find(item => item.id === id);

  if (!course) return;

  const favorite = isFavorite(course.id);

  courseModalContent.innerHTML = `
    <button
      class="modal-close"
      onclick="closeCourse()"
      aria-label="Fechar"
    >
      <i class="bi bi-x-lg"></i>
    </button>

    <section class="modal-header">

      <img
        src="${course.poster}"
        alt="${course.title}"
        class="modal-thumb"
      >

      <div class="modal-info">

        <h2>${course.title}</h2>

        <div class="meta-line">
          <strong>Instrutor:</strong>
          <span>${course.instructor}</span>
        </div>

        <div class="meta-line">
          <strong>Categoria:</strong>
          <span>
            ${course.category.charAt(0).toUpperCase() + course.category.slice(1)}
          </span>
        </div>

        <div class="meta-line">
          <strong>Nível:</strong>
          <span>${course.level}</span>
        </div>

        <div class="meta-line">
          <strong>Duração:</strong>
          <span>${course.duration}</span>
        </div>

        <div class="meta-line">
          <strong>Lançamento:</strong>
          <span>${course.date}</span>
        </div>

        <div class="meta-line">
          <strong>Descrição:</strong>
          <span>${course.description}</span>
        </div>

        <div class="modal-actions">

          <a
            class="watch"
            href="player/?curso=${course.id}"
          >
            <svg
              fill="currentColor"
              viewBox="0 0 36 36"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M32.16,16.08,8.94,4.47A2.07,2.07,0,0,0,6,6.32V29.53a2.06,2.06,0,0,0,3,1.85L32.16,19.77a2.07,2.07,0,0,0,0-3.7Z"></path>
            </svg>

            Assistir
          </a>

          <button
            class="favorite-modal ${favorite ? 'active' : ''}"
            onclick="toggleFavorite(${course.id})"
            aria-label="${favorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.9986 5L17.8856 17.4776L4 19.4911L14.0589 29.3251L11.6544 43L23.9986 36.4192L36.3454 43L33.9586 29.3251L44 19.4911L30.1913 17.4776L23.9986 5Z"
                fill="none"
                stroke="#fff"
                stroke-width="4"
                stroke-linejoin="round"
              />
            </svg>

            ${favorite ? 'Favoritado' : 'Favoritar'}
          </button>

        </div>

      </div>

    </section>
  `;

  courseModal.showModal();
}

function closeCourse() {
  courseModal.close();
}

courseModal.addEventListener('click', event => {
  if (event.target === courseModal) {
    closeCourse();
  }
});

courseModal.addEventListener('cancel', event => {
  event.preventDefault();
  closeCourse();
});

function changePage(delta) {
  const totalPages =
    Math.ceil(getFilteredCourses().length / itemsPerPage) || 1;

  const page = currentPage + delta;

  if (page < 1 || page > totalPages) return;

  currentPage = page;
  renderGrid();
}

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    sidebar.classList.remove('open');
    overlay.classList.add('hidden');
  }
});

window.addEventListener('DOMContentLoaded', () => {
  renderCategories();
  renderGrid();
});