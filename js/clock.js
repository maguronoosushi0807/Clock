export function startClock() {

    const clockElement = document.getElementById("clock-text");
    const dateElement = document.getElementById("date-date");
    const dayElement = document.getElementById("date-day");

    function updateClock() {

        const now = new Date();

        // const time = now.toLocaleTimeString("ja-JP");
        let min = now.getMinutes();
        if(min < 10){
            min = "0" + min;
        }
        const time = now.getHours() + ":" + min;

        // const date = now.toLocaleDateString("ja-JP", {
        //     weekday: "long",
        //     year: "numeric",
        //     month: "long",
        //     day: "numeric"
        // });
        const days = ["Sun", "Mon", "The", "Wed", "Thu", "Fri", "Sat"];
        const date = now.getMonth() + 1 + "." + now.getDate() + " " ;
        const day = days[now.getDay()];

        clockElement.textContent = time;
        dateElement.textContent = date;
        dayElement.textContent = day;
    }

    updateClock();

    setInterval(updateClock, 1000);
}