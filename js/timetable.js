export async function loadTimetable() {

    const response = await fetch("./data/timetable.json");

    const data = await response.json();

    const timetableElement =
        document.getElementById("timetable");

    const today = new Date()
        .toLocaleDateString("en-US", {
            weekday: "long"
        });

    const todayClasses = data[today];

    if (!todayClasses) {
        timetableElement.textContent =
            "今日の授業はありません";
        return;
    }

    todayClasses.forEach(subject => {

        const div = document.createElement("div");

        div.textContent = subject;

        timetableElement.appendChild(div);
    });
}