
// BUTTONS
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

//ELEMENTS
const history = document.getElementById("history");

//TIMERS
const timer = document.getElementById("timer");
const m = document.getElementById("minutes");
const ms = document.getElementById("cs");
const s = document.getElementById("s");

//EVENTLISTENERS
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);

let hours = 0; 
let minutes = 0;
let seconds = 0;
let centiSeconds = 0;

let intervalId;


function tick() {
	intervalId = setInterval(() => {
	centiSeconds += 1;
	updateCsInnerText();

	if(centiSeconds >= 99) {
		increaseSecond();
		return;
	}
	if(seconds >= 59) {
		increaseMinute();
		return;
	}
	}, 10)
}

function startTimer() {
	tick();
}

// alert(localStorage.getItem("test"));

function stopTimer() {
	clearInterval(intervalId);
	createHistoryRecord();
	resetTimer();
}

function createHistoryRecord() {
	const date = new Date();
	let p = document.createElement("p");
	const historyText = `${date}, you logged: Minutes: Seconds ${seconds}`
	const textNode = document.createTextNode(historyText);
	p.appendChild(textNode);
	history.appendChild(p);
	localStorage.setItem("test", historyText);
}


function increaseSecond() {
	seconds += 1;
	centiSeconds = 0;
	updateSecondsInnerText();
	updateCsInnerText();
}

function increaseMinute() {
	minutes += 1;
	seconds = 0;
	centiSeconds = 0;
	updateMinutesInnerText();
	updateSecondsInnerText();
	updateCsInnerText();
}


function csReset() {
	seconds += 1;
	centiSeconds = 0;
	updateSeconds();
}

function updateMinutesInnerText() {
	if(minutes < 10) {
		m.innerText = `0${minutes}`
		return;
		};
	m.innerText = minutes;
};

function updateCsInnerText() {
	if(centiSeconds < 10) {
		cs.innerText = `0${centiSeconds}`
		return;
		};
	cs.innerText = centiSeconds;
}

function updateSecondsInnerText() {
	if(seconds < 10 ) {
		s.innerText = `0${seconds}`
		return;
		};
	s.innerText = seconds;
}

function resetTimer() {
	hours = 0; 
	minutes = 0;
 	seconds = 0;
	centiSeconds = 0;
	updateCsInnerText();
	updateSecondsInnerText();
	updateMinutesInnerText();
};






