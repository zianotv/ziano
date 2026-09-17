document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const courseId = Number(params.get("course")) || 1;
    const requestedLesson = Number(params.get("lesson")) || 0;

    if (typeof coursesData === "undefined" || coursesData.length === 0) {
        return;
    }

    const course = coursesData.find(c => c.id === courseId) || coursesData[0];
    const initialLessonIndex = (requestedLesson >= 0 && requestedLesson < course.lessons.length) 
        ? requestedLesson 
        : 0;

    const drivePlayer = document.getElementById("driveVideoPlayer");
    const nextButton = document.getElementById("nextPlayerLessonButton");
    const lessonsForm = document.getElementById("lessonsForm");
    const courseTitleElement = document.getElementById("playerCourseTitle");

    if (courseTitleElement) {
        courseTitleElement.innerText = course.title;
    }

    document.querySelectorAll("#playerHeaderBackBtn, #playerMobileBackBtn, #playerBackBtn, .modal-close").forEach(btn => {
        btn.href = `../course/?id=${course.id}`;
    });

    document.title = `${course.title} - ZianoTV`;

    if (lessonsForm) {
        lessonsForm.innerHTML = course.lessons.map((lesson, index) => {
            const isChecked = index === initialLessonIndex;
            return `
                <input type="radio" 
                       name="lesson" 
                       id="lesson-${index}" 
                       value="${lesson.video}" 
                       data-index="${index}" 
                       class="player-lesson-radio" 
                       ${isChecked ? "checked" : ""}>
                <label for="lesson-${index}" class="player-lesson">
                    <img class="player-lesson-thumb" src="${lesson.thumb || course.poster}" alt="Thumbnail da ${lesson.title}" onerror="this.onerror=null; this.src='${course.poster}'">
                    <span class="player-lesson-number">Aula ${index + 1}</span>
                    <span class="player-lesson-title">${lesson.title}</span>
                    <time>${lesson.duration}</time>
                </label>
            `;
        }).join("");
    }

    function selectLesson(index) {
        const lesson = course.lessons[index];
        if (!lesson) return;

        if (drivePlayer) {
            drivePlayer.src = lesson.video;
        }

        if (nextButton) {
            nextButton.disabled = !course.lessons[index + 1];
        }

        const url = new URL(window.location);
        url.searchParams.set("course", course.id);
        url.searchParams.set("lesson", index);
        window.history.replaceState({}, "", url);
    }

    selectLesson(initialLessonIndex);

    if (lessonsForm) {
        lessonsForm.addEventListener("change", (e) => {
            if (e.target && e.target.name === "lesson") {
                const index = Number(e.target.dataset.index);
                selectLesson(index);
            }
        });
    }

    if (nextButton) {
        nextButton.addEventListener("click", () => {
            const checkedRadio = lessonsForm.querySelector('input[name="lesson"]:checked');
            const currentIndex = checkedRadio ? Number(checkedRadio.dataset.index) : 0;
            const nextIndex = currentIndex + 1;
            const nextRadio = lessonsForm.querySelector(`#lesson-${nextIndex}`);

            if (nextRadio) {
                nextRadio.checked = true;
                nextRadio.dispatchEvent(new Event("change", { bubbles: true }));
                const nextLabel = lessonsForm.querySelector(`label[for="lesson-${nextIndex}"]`);
                nextLabel?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
            }
        });
    }
});
