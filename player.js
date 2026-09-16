const params = new URLSearchParams(window.location.search);
const course = coursesData.find(course => course.id === params.get("course")) || coursesData[0];
let selectedLessonIndex = Number.parseInt(params.get("lesson"), 10);
const mobileLessonsPerPage = 5;
let lessonPage = 0;

if (!Number.isInteger(selectedLessonIndex) || !course.lessons[selectedLessonIndex]) {
    selectedLessonIndex = 0;
}

lessonPage = Math.floor(selectedLessonIndex / mobileLessonsPerPage);

function renderStandalonePlayer() {
    const lesson = course.lessons[selectedLessonIndex];
    const isMobile = window.matchMedia("(max-width: 47.9375rem)").matches;
    const totalPages = isMobile ? Math.ceil(course.lessons.length / mobileLessonsPerPage) : 1;
    const firstLesson = lessonPage * mobileLessonsPerPage;
    const visibleLessons = isMobile ? course.lessons.slice(firstLesson, firstLesson + mobileLessonsPerPage) : course.lessons;
    const displayTitle = lesson.title.replace(/^(\d+\.)\s+/, "$1\u00a0");
    document.title = `${lesson.title} | ZianoTV`;
    document.getElementById("standalonePlayerTitle").innerText = displayTitle;
    document.getElementById("standalonePlayerInstructor").innerText = course.instructor;
    document.getElementById("nextLessonButton").disabled = !course.lessons[selectedLessonIndex + 1];
    document.getElementById("standaloneLessons").innerHTML = visibleLessons.map((lesson, visibleIndex) => {
        const index = firstLesson + visibleIndex;
        return `
        <button onclick="selectStandaloneLesson(${index})" class="player-lesson ${index === selectedLessonIndex ? "is-active" : ""}">
            <img class="player-lesson-thumb" src="${lesson.thumb || course.poster}" alt="Thumbnail da ${lesson.title}" onerror="this.onerror=null; this.src='${course.poster}'">
            <span class="player-lesson-number">Aula ${index + 1}</span>
            <span class="player-lesson-title">${lesson.title}</span>
            <time>${lesson.duration}</time>
        </button>
    `;
    }).join("");
    document.getElementById("lessonPaginationStatus").innerText = `Página ${lessonPage + 1} de ${totalPages}`;
    document.getElementById("lessonPaginationPrevious").disabled = lessonPage === 0;
    document.getElementById("lessonPaginationNext").disabled = lessonPage >= totalPages - 1;

    loadStandaloneLesson(lesson);
}

function loadStandaloneLesson(lesson) {
    const video = document.getElementById("standaloneVideo");
    const driveVideo = document.getElementById("standaloneDriveVideo");

    if (lesson.video.includes("drive.google.com")) {
        video.pause();
        video.removeAttribute("src");
        video.load();
        video.hidden = true;
        driveVideo.hidden = false;
        driveVideo.src = lesson.video;
        return;
    }

    driveVideo.hidden = true;
    driveVideo.src = "about:blank";
    video.hidden = false;
    video.src = lesson.video;
    video.load();
    video.play().catch(() => {});
}

function selectStandaloneLesson(index) {
    if (!course.lessons[index]) return;

    selectedLessonIndex = index;
    lessonPage = Math.floor(index / mobileLessonsPerPage);
    const nextUrl = `player.html?course=${encodeURIComponent(course.id)}&lesson=${index}`;
    window.history.replaceState(null, "", nextUrl);
    renderStandalonePlayer();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function changeLessonPage(direction) {
    if (!window.matchMedia("(max-width: 47.9375rem)").matches) return;

    const totalPages = Math.ceil(course.lessons.length / mobileLessonsPerPage);
    lessonPage = Math.max(0, Math.min(lessonPage + direction, totalPages - 1));
    renderStandalonePlayer();
}

function playNextLesson() {
    const nextLessonIndex = selectedLessonIndex + 1;
    if (course.lessons[nextLessonIndex]) {
        selectStandaloneLesson(nextLessonIndex);
    }
}

document.getElementById("standaloneVideo").addEventListener("ended", playNextLesson);
renderStandalonePlayer();
