let currentCategory = "all";
let currentSearch = "";
let currentPage = 1;
const itemsPerPage = 10;
let selectedCourseId = null;
let selectedLessonIndex = 0;

function renderCategories() {
    document.getElementById("categoryNav").innerHTML = categories.map(e => {
        const t = currentCategory === e.id;
        const n = t ? "nav-item-active font-normal" : "nav-item-inactive font-normal";
        
        return `
            <button onclick="selectCategory('${e.id}')" 
                    class="category-button ${n}">
                <i class="${e.icon}" aria-hidden="true"></i>
                <span>${e.name}</span>
            </button>
        `;
    }).join("");
}

function selectCategory(e) {
    currentCategory = e;
    currentPage = 1;
    renderCategories();
    
    const t = categories.find(t => t.id === e);
    document.getElementById("categoryTitle").innerText = t ? t.name : "Todas as Aulas";
    
    showCatalogView();
    renderGrid();
    closeSidebarOnMobile();
}

function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("sidebarOverlay");
    const menuButton = document.getElementById("mobileMenuToggle");
    const isOpen = sidebar.classList.toggle("sidebar-open");

    overlay.classList.toggle("is-hidden", !isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
}

function toggleSidebarCollapse() {
    if (window.innerWidth <= 767) return;

    const sidebar = document.getElementById("sidebar");
    const toggle = document.getElementById("sidebarCollapseToggle");
    const isCollapsed = sidebar.classList.toggle("sidebar-collapsed");

    toggle.setAttribute("aria-expanded", String(!isCollapsed));
    toggle.setAttribute("aria-label", isCollapsed ? "Expandir sidebar" : "Recolher sidebar");
    document.querySelector(".logo-mark").setAttribute("aria-label", isCollapsed ? "Expandir sidebar" : "Recolher sidebar");
    toggle.innerHTML = `<i class="bi bi-list" aria-hidden="true"></i>`;
}

function closeSidebarOnMobile() {
    if (window.innerWidth > 767) return;

    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("sidebarOverlay");
    const menuButton = document.getElementById("mobileMenuToggle");

    sidebar.classList.remove("sidebar-open");
    overlay.classList.add("is-hidden");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Abrir menu");
}

function handleSearch(e) {
    currentSearch = e.toLowerCase().trim();
    currentPage = 1;
    showCatalogView();
    renderGrid();
}

function getFilteredCourses() {
    return coursesData.filter(e => {
        const t = "all" === currentCategory || ("favoritos" === currentCategory ? e.favorite : e.category === currentCategory);
        const n = "" === currentSearch || e.title.toLowerCase().includes(currentSearch) || e.instructor.toLowerCase().includes(currentSearch);
        return t && n;
    });
}

function renderGrid() {
    const e = document.getElementById("courseGrid");
    const t = getFilteredCourses();
    const n = Math.ceil(t.length / itemsPerPage) || 1;
    
    if (currentPage > n) {
        currentPage = n;
    }
    
    const r = itemsPerPage * (currentPage - 1);
    const a = t.slice(r, r + itemsPerPage);
    
    renderPagination(n);
    
    if (0 !== a.length) {
        e.innerHTML = a.map(e => `
            <article onclick="openCourseDetail('${e.id}')" 
                     class="course-card">
                 <figure class="course-poster-frame">
                    <img src="${e.poster}" alt="${e.title}" 
                        loading="lazy"
                         onerror="this.src='https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=80'"
                         class="course-poster">
                </figure>
                <div class="course-card-title">
                    <h3 class="course-title-text">
                        <span class="course-title-short">${e.title}</span>
                        <span class="course-title-marquee">
                            <span class="course-title-loop">${e.title}</span>
                            <span class="course-title-loop">${e.title}</span>
                        </span>
                    </h3>
                </div>
            </article>
        `).join("");
    } else {
        e.innerHTML = `
            <div class="empty-state">
                <i class="bi bi-mortarboard-fill" aria-hidden="true"></i>
                <p>Nenhuma aula encontrada nesta categoria ou busca.</p>
            </div>
        `;
    }

    requestAnimationFrame(adjustCourseTitleElements);
}

function adjustCourseTitleElements() {
    document.querySelectorAll("#courseGrid .course-title-text").forEach(e => {
        const t = e.querySelector(".course-title-short");
        const n = e.querySelector(".course-title-marquee");
        const loopText = e.querySelector(".course-title-loop");
        if (!t || !n || !loopText) return;

        const overflow = loopText.scrollWidth - e.clientWidth;
        const gap = parseFloat(getComputedStyle(n).gap) || 0;

        if (overflow > 0) {
            const distance = -(loopText.scrollWidth + gap);
            const duration = Math.abs(distance) / 38;
            e.style.setProperty("--title-distance", `${distance}px`);
            e.style.setProperty("--title-duration", `${duration}s`);
            e.classList.add("has-overflow");
        } else {
            e.classList.remove("has-overflow");
            e.style.removeProperty("--title-distance");
            e.style.removeProperty("--title-duration");
        }
    });
}

function renderPagination(e) {
    const n = document.getElementById("paginationStatus");
    const r = document.getElementById("paginationPrevious");
    const a = document.getElementById("paginationNext");

    n.innerText = `Página ${currentPage} de ${e}`;
    r.classList.toggle("is-hidden", e <= 1);
    a.classList.toggle("is-hidden", e <= 1);
}

function changePage(e) {
    const t = getFilteredCourses();
    const n = Math.ceil(t.length / itemsPerPage) || 1;
    const r = currentPage + e;
    
    if (r >= 1 && r <= n) {
        currentPage = r;
        renderGrid();
    }
}

function goToPage(e) {
    const totalPages = Math.ceil(getFilteredCourses().length / itemsPerPage) || 1;
    currentPage = Math.max(1, Math.min(e, totalPages));
    renderGrid();
}

function openCourseDetail(e) {
    selectedCourseId = e;
    const t = coursesData.find(t => t.id === e);
    if (!t) return;
    
    document.getElementById("detailTitle").innerText = t.title;
    document.getElementById("detailPoster").src = t.poster;
    document.getElementById("detailPoster").alt = t.title;
    document.getElementById("detailInstructor").innerText = t.instructor;
    document.getElementById("detailLevel").innerText = t.level;
    
    const n = categories.find(e => e.id === t.category);
    document.getElementById("detailCategory").innerText = n ? n.name : "Geral";
    document.getElementById("detailDuration").innerText = `${t.duration} (${t.lessons.length} Aulas)`;
    document.getElementById("detailDate").innerText = t.date;
    document.getElementById("detailDescription").innerText = t.description;
    
    updateFavoriteUI(t.favorite);
    
    document.getElementById("lessonsList").innerHTML = t.lessons.map((e, t) => `
        <li>
            <button onclick="openPlayerModal('${e.title}')" class="lesson-button">
                <span class="lesson-number">
                    ${t + 1}
                </span>
                <img class="lesson-thumb" src="${e.thumb || t.poster}" alt="" aria-hidden="true" onerror="this.onerror=null; this.src='${t.poster}'">
                <div class="lesson-content">
                    <span class="lesson-title">${e.title}</span>
                </div>
                <time class="lesson-duration">
                    <i class="bi bi-play-fill" aria-hidden="true"></i> ${e.duration}
                </time>
            </button>
        </li>
    `).join("");
    
    document.getElementById("catalogView").classList.add("is-hidden");
    document.getElementById("detailView").classList.remove("is-hidden");
    document.getElementById("categoryTitle").classList.add("is-hidden");
    document.getElementById("headerCatalogControls").classList.add("is-hidden");
    document.getElementById("paginationControls").classList.add("is-hidden");
    document.getElementById("headerDetailControls").classList.remove("is-hidden");
    
    requestAnimationFrame(() => {
        adjustMarqueeElements();
    });
}

function adjustMarqueeElements() {
    document.querySelectorAll("#lessonsList .marquee-wrapper").forEach(e => {
        const t = e.querySelector(".marquee-text");
        const loopText = e.querySelector(".lesson-title-loop");
        if (!t || !loopText) return;
        
        const n = e.clientWidth;
        const r = loopText.scrollWidth;
        const gap = parseFloat(getComputedStyle(t).gap) || 0;
        
        if (r > n) {
            const distance = -(r + gap);
            const duration = Math.abs(distance) / 38;
            t.style.setProperty("--marquee-distance", `${distance}px`);
            t.style.setProperty("--marquee-duration", `${duration}s`);
            t.classList.add("has-overflow");
        } else {
            t.classList.remove("has-overflow");
            t.style.removeProperty("--marquee-distance");
            t.style.removeProperty("--marquee-duration");
        }
    });
}

function showCatalogView() {
    document.getElementById("detailView").classList.add("is-hidden");
    document.getElementById("catalogView").classList.remove("is-hidden");
    document.getElementById("categoryTitle").classList.remove("is-hidden");
    document.getElementById("headerDetailControls").classList.add("is-hidden");
    document.getElementById("headerCatalogControls").classList.remove("is-hidden");
    document.getElementById("paginationControls").classList.remove("is-hidden");
}

function toggleFavoriteCurrent() {
    if (!selectedCourseId) return;
    const e = coursesData.find(e => e.id === selectedCourseId);
    if (e) {
        e.favorite = !e.favorite;
        updateFavoriteUI(e.favorite);
        renderCategories();
        renderGrid();
    }
}

function updateFavoriteUI(e) {
    const t = document.getElementById("favIcon");
    const n = document.getElementById("favText");
    
    if (e) {
        t.className = "bi bi-star-fill favorite-icon-active";
        n.innerText = "Favoritado";
    } else {
        t.className = "bi bi-star favorite-icon-inactive";
        n.innerText = "Favoritar";
    }
}

function openPlayerModal(e) {
    const t = coursesData.find(e => e.id === selectedCourseId) || coursesData[0];
    const lessonIndex = e ? t.lessons.findIndex(t => t.title === e) : 0;
    const index = lessonIndex >= 0 ? lessonIndex : 0;
    window.location.href = `player.html?course=${encodeURIComponent(t.id)}&lesson=${index}`;
}

function renderPlayerLesson(course) {
    const lesson = course.lessons[selectedLessonIndex];
    document.getElementById("playerTitle").innerText = lesson ? lesson.title : `${course.title} - Aula 1`;
    document.getElementById("playerInstructor").innerText = course.instructor;
    document.getElementById("playerLessons").innerHTML = course.lessons.map((lesson, index) => `
        <button onclick="selectPlayerLesson(${index})" class="player-lesson ${index === selectedLessonIndex ? "is-active" : ""}">
            <img class="player-lesson-thumb" src="${lesson.thumb || course.poster}" alt="Thumbnail da ${lesson.title}" onerror="this.onerror=null; this.src='${course.poster}'">
            <span class="player-lesson-number">Aula ${index + 1}</span>
            <span class="player-lesson-title">${lesson.title}</span>
            <time>${lesson.duration}</time>
        </button>
    `).join("");
}

function loadSelectedLessonVideo(course) {
    const lesson = course.lessons[selectedLessonIndex];
    const video = document.getElementById("mainVideoPlayer");
    const drivePlayer = document.getElementById("driveVideoPlayer");
    if (!lesson) return;

    if (lesson.video.includes("drive.google.com") || lesson.video.includes("youtube.com/embed/")) {
        video.pause();
        video.removeAttribute("src");
        video.load();
        video.hidden = true;
        drivePlayer.hidden = false;
        drivePlayer.src = lesson.video;
        return;
    }

    drivePlayer.hidden = true;
    drivePlayer.src = "about:blank";
    video.hidden = false;
    video.src = lesson.video;
    video.load();
    video.play().catch(() => {});
}

function selectPlayerLesson(index) {
    const course = coursesData.find(course => course.id === selectedCourseId) || coursesData[0];
    if (!course.lessons[index]) return;

    selectedLessonIndex = index;
    renderPlayerLesson(course);
    loadSelectedLessonVideo(course);
    const video = document.getElementById("mainVideoPlayer");
    document.getElementById("videoModal").scrollTo({ top: 0, behavior: "smooth" });
    video.focus({ preventScroll: true });
}

function togglePlayerFullscreen() {
    const playerArea = document.querySelector("#videoModal .modal-video");
    if (!document.fullscreenElement) {
        playerArea.requestFullscreen?.();
    } else {
        document.exitFullscreen?.();
    }
}

function closePlayerModal() {
    const e = document.getElementById("videoModal");
    document.getElementById("mainVideoPlayer").pause();
    e.close();
}

window.addEventListener("resize", () => {
    if (window.innerWidth <= 767) {
        document.getElementById("sidebar").classList.remove("sidebar-collapsed");
    }

    adjustCourseTitleElements();
    if (!document.getElementById("detailView").classList.contains("is-hidden")) {
        adjustMarqueeElements();
    }
});

window.addEventListener("DOMContentLoaded", () => {
    renderCategories();
    renderGrid();
});