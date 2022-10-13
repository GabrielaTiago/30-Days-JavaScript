const secondHand = document.querySelector(".second-hand");

function setDate() {
  const date = new Date();
  const seconds = date.getSeconds();

  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`
}

setInterval(setDate, 1000);
