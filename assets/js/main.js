let currentCategory = "all";
let currentSearch = "";
let currentPage = 1;
const itemsPerPage = 10;

function renderCategories() {
    const nav = document.getElementById("categoryNav");
    if (!nav || typeof categories === "undefined") return;

    nav.innerHTML = categories.map(e => {
        const isActive = currentCategory === e.id;
        const navClass = isActive ? "nav-item-active font-normal" : "nav-item-inactive font-normal";
        
        return `
            <button onclick="selectCategory('${e.id}')" 
                    class="category-button ${navClass}">
                <i class="${e.icon}" aria-hidden="true"></i>
                <span>${e.name}</span>
            </button>
        `;
    }).join("");
}

function selectCategory(categoryId) {
    currentCategory = categoryId;
    currentPage = 1;
    renderCategories();
    
    const cat = typeof categories !== "undefined" ? categories.find(t => t.id === categoryId) : null;
    const titleElem = document.getElementById("categoryTitle");
    if (titleElem) {
        titleElem.innerText = cat ? cat.name : "Todas as Aulas";
    }
    
    renderGrid();
    closeSidebarOnMobile();
}

function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("sidebarOverlay");
    const menuButton = document.getElementById("mobileMenuToggle");
    if (!sidebar || !overlay || !menuButton) return;

    const isOpen = sidebar.classList.toggle("sidebar-open");
    overlay.classList.toggle("is-hidden", !isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
}

function toggleSidebarCollapse() {
    if (window.innerWidth <= 767) return;

    const sidebar = document.getElementById("sidebar");
    const toggle = document.getElementById("sidebarCollapseToggle");
    const logoMark = document.querySelector(".logo-mark");
    if (!sidebar || !toggle) return;

    const isCollapsed = sidebar.classList.toggle("sidebar-collapsed");
    toggle.setAttribute("aria-expanded", String(!isCollapsed));
    toggle.setAttribute("aria-label", isCollapsed ? "Expandir sidebar" : "Recolher sidebar");
    if (logoMark) {
        logoMark.setAttribute("aria-label", isCollapsed ? "Expandir sidebar" : "Recolher sidebar");
    }
    toggle.innerHTML = `<i class="bi bi-list" aria-hidden="true"></i>`;
}

function closeSidebarOnMobile() {
    if (window.innerWidth > 767) return;

    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("sidebarOverlay");
    const menuButton = document.getElementById("mobileMenuToggle");
    if (!sidebar || !overlay || !menuButton) return;

    sidebar.classList.remove("sidebar-open");
    overlay.classList.add("is-hidden");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Abrir menu");
}

function handleSearch(value) {
    currentSearch = value.toLowerCase().trim();
    currentPage = 1;
    renderGrid();
}

function getFilteredCourses() {
    if (typeof coursesData === "undefined") return [];
    return coursesData.filter(course => {
        const matchesCategory = "all" === currentCategory || 
            ("favoritos" === currentCategory ? course.favorite : course.category === currentCategory);
        const matchesSearch = "" === currentSearch || 
            course.title.toLowerCase().includes(currentSearch) || 
            course.instructor.toLowerCase().includes(currentSearch);
        return matchesCategory && matchesSearch;
    });
}

function renderGrid() {
    const grid = document.getElementById("courseGrid");
    if (!grid) return;

    const filtered = getFilteredCourses();
    const totalPages = Math.ceil(filtered.length / itemsPerPage) || 1;
    
    if (currentPage > totalPages) {
        currentPage = totalPages;
    }
    
    const startIndex = itemsPerPage * (currentPage - 1);
    const paginatedItems = filtered.slice(startIndex, startIndex + itemsPerPage);
    
    renderPagination(totalPages);
    
    if (paginatedItems.length > 0) {
        grid.innerHTML = paginatedItems.map(course => `
            <a href="course/?id=${course.id}" class="course-card" style="text-decoration: none; display: block;">
                 <figure class="course-poster-frame">
                    <img src="${course.poster}" alt="${course.title}" 
                         loading="lazy"
                         onerror="this.src='https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=80'"
                         class="course-poster">
                </figure>
                <div class="course-card-title">
                    <h3 class="course-title-text">
                        <span class="course-title-short">${course.title}</span>
                        <span class="course-title-marquee">
                            <span class="course-title-loop">${course.title}</span>
                            <span class="course-title-loop">${course.title}</span>
                        </span>
                    </h3>
                </div>
            </a>
        `).join("");
    } else {
        grid.innerHTML = `
            <div class="empty-state">
                <i class="bi bi-mortarboard-fill" aria-hidden="true"></i>
                <p>Nenhuma aula encontrada nesta categoria ou busca.</p>
            </div>
        `;
    }

    requestAnimationFrame(adjustCourseTitleElements);
}

function adjustCourseTitleElements() {
    document.querySelectorAll("#courseGrid .course-title-text").forEach(titleContainer => {
        const shortText = titleContainer.querySelector(".course-title-short");
        const marqueeContainer = titleContainer.querySelector(".course-title-marquee");
        const loopText = titleContainer.querySelector(".course-title-loop");
        if (!shortText || !marqueeContainer || !loopText) return;

        const overflow = loopText.scrollWidth - titleContainer.clientWidth;
        const gap = parseFloat(getComputedStyle(marqueeContainer).gap) || 0;

        if (overflow > 0) {
            const distance = -(loopText.scrollWidth + gap);
            const duration = Math.abs(distance) / 38;
            titleContainer.style.setProperty("--title-distance", `${distance}px`);
            titleContainer.style.setProperty("--title-duration", `${duration}s`);
            titleContainer.classList.add("has-overflow");
        } else {
            titleContainer.classList.remove("has-overflow");
            titleContainer.style.removeProperty("--title-distance");
            titleContainer.style.removeProperty("--title-duration");
        }
    });
}

function renderPagination(totalPages) {
    const status = document.getElementById("paginationStatus");
    const prevBtn = document.getElementById("paginationPrevious");
    const nextBtn = document.getElementById("paginationNext");

    if (status) status.innerText = `Página ${currentPage} de ${totalPages}`;
    if (prevBtn) prevBtn.classList.toggle("is-hidden", totalPages <= 1);
    if (nextBtn) nextBtn.classList.toggle("is-hidden", totalPages <= 1);
}

function changePage(delta) {
    const totalPages = Math.ceil(getFilteredCourses().length / itemsPerPage) || 1;
    const targetPage = currentPage + delta;
    
    if (targetPage >= 1 && targetPage <= totalPages) {
        currentPage = targetPage;
        renderGrid();
    }
}

function goToPage(page) {
    const totalPages = Math.ceil(getFilteredCourses().length / itemsPerPage) || 1;
    currentPage = Math.max(1, Math.min(page, totalPages));
    renderGrid();
}

// Fallback de compatibilidade caso haja cache no navegador
function openCourseDetail(courseId) {
    window.location.href = `course/?id=${courseId}`;
}
window.openCourseDetail = openCourseDetail;

window.addEventListener("resize", () => {
    if (window.innerWidth <= 767) {
        const sidebar = document.getElementById("sidebar");
        if (sidebar) sidebar.classList.remove("sidebar-collapsed");
    }

    adjustCourseTitleElements();
});

window.addEventListener("DOMContentLoaded", () => {
    renderCategories();
    renderGrid();
});