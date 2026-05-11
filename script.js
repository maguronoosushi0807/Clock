import { startClock }
from "./js/clock.js";

import { loadTimetable }
from "./js/timetable.js";

import { loadTasks }
from "./js/tasks.js";

import { loadClassData }
from "./js/class.js";

loadClassData();

startClock();

loadTimetable();

loadTasks();
