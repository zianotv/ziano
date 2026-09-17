document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const courseId = Number(params.get("id")) || 1;

    if (typeof coursesData === "undefined" || coursesData.length === 0) {
        return;
    }

    const course = coursesData.find(c => c.id === courseId) || coursesData[0];

    document.title = `${course.title} - ZianoTV`;

    const detailTitle = document.getElementById("detailTitle");
    if (detailTitle) detailTitle.innerText = course.title;

    const detailPoster = document.getElementById("detailPoster");
    if (detailPoster) {
        detailPoster.src = course.poster;
        detailPoster.alt = course.title;
    }

    const detailInstructor = document.getElementById("detailInstructor");
    if (detailInstructor) detailInstructor.innerText = course.instructor;

    const detailCategory = document.getElementById("detailCategory");
    if (detailCategory) {
        const categoryObj = typeof categories !== "undefined" 
            ? categories.find(c => c.id === course.category) 
            : null;
        detailCategory.innerText = categoryObj ? categoryObj.name : "Geral";
    }

    const detailLevel = document.getElementById("detailLevel");
    if (detailLevel) detailLevel.innerText = course.level;

    const detailDuration = document.getElementById("detailDuration");
    if (detailDuration) detailDuration.innerText = `${course.duration} (${course.lessons.length} Aulas)`;

    const detailDate = document.getElementById("detailDate");
    if (detailDate) detailDate.innerText = course.date;

    const detailDescription = document.getElementById("detailDescription");
    if (detailDescription) detailDescription.innerText = course.description;

    const watchBtn = document.getElementById("watchBtn");
    if (watchBtn) {
        watchBtn.href = `../player/?course=${course.id}&lesson=0`;
    }

    const favoriteBtn = document.getElementById("favoriteBtn");
    const favIcon = document.getElementById("favIcon");
    const favText = document.getElementById("favText");

    function updateFavoriteUI(isFav) {
        if (!favIcon || !favText) return;
        if (isFav) {
            favIcon.className = "bi bi-star-fill favorite-icon-active";
            favText.innerText = "Favoritado";
        } else {
            favIcon.className = "bi bi-star favorite-icon-inactive";
            favText.innerText = "Favoritar";
        }
    }

    updateFavoriteUI(course.favorite);

    if (favoriteBtn) {
        favoriteBtn.addEventListener("click", () => {
            course.favorite = !course.favorite;
            updateFavoriteUI(course.favorite);
        });
    }

    let currentLessonPage = 1;
    const lessonsPerPage = 10;

    function renderLessons() {
        const totalLessons = course.lessons.length;
        const totalPages = Math.ceil(totalLessons / lessonsPerPage) || 1;

        const lessonsBadge = document.getElementById("lessonsCountBadge");
        if (lessonsBadge) {
            lessonsBadge.innerText = `${totalLessons} aula${totalLessons === 1 ? "" : "s"}`;
        }

        if (currentLessonPage > totalPages) {
            currentLessonPage = totalPages;
        }

        const startIndex = (currentLessonPage - 1) * lessonsPerPage;
        const paginatedLessons = course.lessons.slice(startIndex, startIndex + lessonsPerPage);

        const lessonsList = document.getElementById("lessonsList");
        if (lessonsList) {
            lessonsList.innerHTML = paginatedLessons.map((lesson, localIndex) => {
                const globalIndex = startIndex + localIndex;
                return `
                    <li>
                        <a href="../player/?course=${course.id}&lesson=${globalIndex}" class="lesson-button" style="text-decoration: none;">
                            <span class="lesson-number">
                                ${globalIndex + 1}
                            </span>
                            <img class="lesson-thumb" src="${lesson.thumb || course.poster}" alt="" aria-hidden="true" onerror="this.onerror=null; this.src='${course.poster}'">
                            <div class="lesson-content">
                                <span class="lesson-title">${lesson.title}</span>
                            </div>
                            <time class="lesson-duration">${lesson.duration}</time>
                        </a>
                    </li>
                `;
            }).join("");
        }

        const paginationNav = document.getElementById("lessonPagination");
        const status = document.getElementById("lessonPaginationStatus");
        const prevBtn = document.getElementById("lessonPrevBtn");
        const nextBtn = document.getElementById("lessonNextBtn");

        if (paginationNav) {
            paginationNav.style.display = totalPages > 1 ? "flex" : "none";
        }

        if (status) {
            status.innerText = `Página ${currentLessonPage} de ${totalPages}`;
        }

        if (prevBtn) {
            prevBtn.disabled = currentLessonPage <= 1;
        }

        if (nextBtn) {
            nextBtn.disabled = currentLessonPage >= totalPages;
        }
    }

    const prevBtn = document.getElementById("lessonPrevBtn");
    const nextBtn = document.getElementById("lessonNextBtn");

    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            if (currentLessonPage > 1) {
                currentLessonPage--;
                renderLessons();
                document.querySelector(".lessons-detail-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            const totalPages = Math.ceil(course.lessons.length / lessonsPerPage) || 1;
            if (currentLessonPage < totalPages) {
                currentLessonPage++;
                renderLessons();
                document.querySelector(".lessons-detail-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    }

    renderLessons();
});
