export async function loadClassData() {

  const response =
    await fetch("./data/class.json");

  if (!response.ok) {

    throw new Error(
      `HTTP ERROR: ${response.status}`
    );
  }

  const data =
    await response.json();

  const today =
    new Date()
      .toLocaleDateString(
        "en-US",
        { weekday: "long" }
      );

  const todayClasses =
    data[today];

  const classList =
    document.getElementById("class-list");

  classList.innerHTML = "";

  if (!todayClasses) {

    classList.innerHTML =
      "<p>No Class</p>";

    return;
  }

  todayClasses.forEach(subject => {

    const card =
      document.createElement("div");

    card.className =
      "class-card";

    const titleHTML =
      subject.title
        .replace(/\n/g, "<br>");

    card.innerHTML = `

            <div class="class-left">

                <div class="class-period">
                    ${subject.period}
                </div>

            </div>

            <div class="class-right">

    <div class="class-top">

        <div class="class-room">
            ${subject.room}
        </div>

    </div>

    <div class="class-center">

        <div class="class-title">
            ${titleHTML}
        </div>

    </div>

    <div class="class-bottom">

        <div class="class-tags">

            <span class="
                class-tag
                ${subject.attendance
        ? "active"
        : ""}
            ">
                Attendance
            </span>

            <span class="
                class-tag
                ${subject.test
        ? "active"
        : ""}
            ">
                Test
            </span>

            <span class="
                class-tag
                ${subject.assignment
        ? "active"
        : ""}
            ">
                Assignment
            </span>

        </div>

    </div>
        `;

    classList.appendChild(card);
  });
}