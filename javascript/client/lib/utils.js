
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
