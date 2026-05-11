import {
    saveTaskState,
    loadTaskState
}
from "./storage.js";

export async function loadTasks() {

    const response =
        await fetch("./data/tasks.json");

    const data = await response.json();

    const tasksElement =
        document.getElementById("tasks");

    const today = new Date()
        .toLocaleDateString("en-US", {
            weekday: "long"
        });

    const todayTasks = data[today];

    if (!todayTasks) return;

    todayTasks.forEach(task => {

        const wrapper =
            document.createElement("div");

        const checkbox =
            document.createElement("input");

        checkbox.type = "checkbox";

        const text =
            document.createElement("span");

        text.textContent = task;

        const key = `${today}-${task}`;

        const saved =
            loadTaskState(key);

        checkbox.checked = saved;

        if (saved) {
            wrapper.classList.add("task-completed");
        }

        checkbox.addEventListener("change", () => {

            saveTaskState(
                key,
                checkbox.checked
            );

            wrapper.classList.toggle(
                "task-completed",
                checkbox.checked
            );
        });

        wrapper.appendChild(checkbox);
        wrapper.appendChild(text);

        tasksElement.appendChild(wrapper);
    });
}