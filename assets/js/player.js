document.addEventListener("DOMContentLoaded", () => {
const params = new URLSearchParams(window.location.search);

const courseId = Number(params.get("course")) || 1;
const requestedLesson = Number(params.get("lesson")) || 0;

if (typeof coursesData === "undefined" || coursesData.length === 0) {
    return;
}

const course = coursesData.find(c => c.id === courseId) || coursesData[0];

const lessonIndex =
    requestedLesson >= 0 && requestedLesson < course.lessons.length
        ? requestedLesson
        : 0;

const lesson = course.lessons[lessonIndex];

const drivePlayer = document.getElementById("driveVideoPlayer");
const nextButton = document.getElementById("nextPlayerLessonButton");
const lessonsList = document.getElementById("lessonsForm");
const courseTitleElement = document.getElementById("playerCourseTitle");

document.title = `${course.title} - ZianoTV`;

if (courseTitleElement) {
    courseTitleElement.innerText = course.title;
}

document.querySelectorAll(
    "#playerHeaderBackBtn, #playerMobileBackBtn, #playerBackBtn, .modal-close"
).forEach(btn => {
    btn.href = `../course/?id=${course.id}`;
});

if (drivePlayer && lesson) {
    drivePlayer.src = lesson.video;
}

if (lessonsList) {
    lessonsList.innerHTML = course.lessons.map((lesson, index) => {
        const isCurrent = index === lessonIndex;

        return `
            <li>
                <a
                    href="?course=${course.id}&lesson=${index}"
                    class="player-lesson${isCurrent ? " current" : ""}"
                    ${isCurrent ? 'aria-current="page"' : ""}
                >
                    <img
                        class="player-lesson-thumb"
                        src="${lesson.thumb || course.poster}"
                        alt="Thumbnail da ${lesson.title}"
                        onerror="this.onerror=null; this.src='${course.poster}'"
                    >

                    <span class="player-lesson-number">
                        Aula ${index + 1}
                    </span>

                    <span class="player-lesson-title">
                        ${lesson.title}
                    </span>

                    <time>${lesson.duration}</time>
                </a>
            </li>
        `;
    }).join("");
}

const nextLesson = course.lessons[lessonIndex + 1];

if (nextButton) {
    if (nextLesson) {
        nextButton.href =
            `?course=${course.id}&lesson=${lessonIndex + 1}`;

        nextButton.removeAttribute("aria-disabled");
    } else {
        nextButton.removeAttribute("href");
        nextButton.setAttribute("aria-disabled", "true");
    }
}
});