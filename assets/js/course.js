document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const courseId = Number(params.get("id")) || 1;

    const course = coursesData.find(c => c.id === courseId) || coursesData[0];

    document.title = `${course.title} - ZianoTV`;

    document.getElementById("detailTitle").innerText = course.title;

    const detailPoster = document.getElementById("detailPoster");
    detailPoster.src = course.poster;
    detailPoster.alt = course.title;

    document.getElementById("detailInstructor").innerText = course.instructor;

    const category = categories.find(c => c.id === course.category);
    document.getElementById("detailCategory").innerText =
        category ? category.name : "Geral";

    document.getElementById("detailLevel").innerText = course.level;

    document.getElementById("detailDuration").innerText =
        `${course.duration} (${course.lessons.length} Aulas)`;

    document.getElementById("detailDate").innerText = course.date;

    document.getElementById("detailDescription").innerText =
        course.description;

    document.getElementById("watchBtn").href =
        `../player/?course=${course.id}&lesson=0`;

    const favoriteBtn = document.getElementById("favoriteBtn");
    const favIcon = document.getElementById("favIcon");
    const favText = document.getElementById("favText");

    function updateFavoriteUI() {
        if (course.favorite) {
            favIcon.className = "bi bi-star-fill favorite-icon-active";
            favText.innerText = "Favoritado";
        } else {
            favIcon.className = "bi bi-star favorite-icon-inactive";
            favText.innerText = "Favoritar";
        }
    }

    updateFavoriteUI();

    favoriteBtn.addEventListener("click", () => {
        course.favorite = !course.favorite;
        updateFavoriteUI();
    });

    const lessonsList = document.getElementById("lessonsList");
    const lessonsCountBadge = document.getElementById("lessonsCountBadge");
    const paginationNav = document.getElementById("lessonPagination");
    const paginationStatus = document.getElementById("lessonPaginationStatus");
    const prevBtn = document.getElementById("lessonPrevBtn");
    const nextBtn = document.getElementById("lessonNextBtn");

    let currentLessonPage = 1;
    const lessonsPerPage = 10;

    function renderLessons() {
        const totalLessons = course.lessons.length;
        const totalPages = Math.ceil(totalLessons / lessonsPerPage) || 1;

        lessonsCountBadge.innerText =
            `${totalLessons} aula${totalLessons === 1 ? "" : "s"}`;

        const startIndex = (currentLessonPage - 1) * lessonsPerPage;
        const endIndex = startIndex + lessonsPerPage;

        lessonsList.innerHTML = course.lessons
            .slice(startIndex, endIndex)
            .map((lesson, index) => {
                const lessonIndex = startIndex + index;

                return `
                    <li>
                        <a
                            href="../player/?course=${course.id}&lesson=${lessonIndex}"
                            class="lesson-button"
                            style="text-decoration: none;"
                        >
                            <span class="lesson-number">
                                ${lessonIndex + 1}
                            </span>

                            <img
                                class="lesson-thumb"
                                src="${lesson.thumb || course.poster}"
                                alt=""
                                aria-hidden="true"
                                onerror="this.onerror=null; this.src='${course.poster}'"
                            >

                            <div class="lesson-content">
                                <span class="lesson-title">
                                    ${lesson.title}
                                </span>
                            </div>

                            <time class="lesson-duration">
                                ${lesson.duration}
                            </time>
                        </a>
                    </li>
                `;
            })
            .join("");

        paginationNav.style.display =
            totalPages > 1 ? "flex" : "none";

        paginationStatus.innerText =
            `Página ${currentLessonPage} de ${totalPages}`;

        prevBtn.disabled = currentLessonPage === 1;
        nextBtn.disabled = currentLessonPage === totalPages;
    }

    prevBtn.addEventListener("click", () => {
        if (currentLessonPage === 1) return;

        currentLessonPage--;
        renderLessons();

        document
            .querySelector(".lessons-detail-section")
            .scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
    });

    nextBtn.addEventListener("click", () => {
        const totalPages =
            Math.ceil(course.lessons.length / lessonsPerPage) || 1;

        if (currentLessonPage === totalPages) return;

        currentLessonPage++;
        renderLessons();

        document
            .querySelector(".lessons-detail-section")
            .scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
    });

    renderLessons();
});