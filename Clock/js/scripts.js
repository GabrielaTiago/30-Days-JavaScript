const ONE_SECOND = 1000;
const CLOCK_HOURS = 12;
const SIXTY_SECONDS_OR_MINUTES = 60;
const DEGREES = 360;
const START_DEG = 90;

const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const date = new Date();
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hours = date.getHours();

  secondChange(seconds);
  minuteChange(minutes);
  hourChange(hours);
}

function calculatesDegrees(type, time) {
  const degree = (type / time) * DEGREES + START_DEG;
  return degree;
}

function secondChange(seconds) {
  const secondsDegrees = calculatesDegrees(seconds, SIXTY_SECONDS_OR_MINUTES);

  if (secondsDegrees === 90) {
    secondHand.style.transition = "none";
    minuteHand.style.transition = "none";
    hourHand.style.transition = "none";
  }

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
}

function minuteChange(minutes) {
  const minutesDegrees = calculatesDegrees(minutes, SIXTY_SECONDS_OR_MINUTES);
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
}

function hourChange(hours) {
  const hoursDegrees = calculatesDegrees(hours, CLOCK_HOURS);
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, ONE_SECOND);
