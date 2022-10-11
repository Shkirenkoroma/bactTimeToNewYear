const year = document.querySelector("#year");

const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const preloader = document.querySelector("#preloader");

const currentYear = new Date().getFullYear();
const nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);

year.innerHTML = currentYear + 1;

function updateCounter() {
	const currentTime = new Date();
	const diff = nextYear - currentTime;
	const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
	const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
	const minutesLeft = Math.floor(diff / 1000 / 60) % 60;
	const secondLeft = Math.floor(diff / 1000) % 60;
	console.log(daysLeft, hoursLeft, minutesLeft, secondLeft);

	days.innerHTML = daysLeft;
	hours.innerHTML = hoursLeft;
	minutes.innerHTML = minutesLeft;
	seconds.innerHTML = secondLeft;
}

setInterval(updateCounter, 1000);

setTimeout(function () {
	preloader.remove();
	countdown.style.display = "flex";
}, 1000);
