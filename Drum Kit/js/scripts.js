function playAudio(event, type) {
  const code = keyOrClick(event, type);

  const audio = this.document.querySelector(`audio[data-key="${code}"`);

  const playing = this.document.querySelector(`.key[data-key="${code}`);

  if (!audio) return;

  audio.currentTime = 0;
  audio.play();

  playing.classList.add("playing");
}

function keyOrClick(event, type) {
  if (type === "press") {
    return keySound(event);
  } else if (type === "click") {
    return clickSound(event);
  }
}

function keySound(event) {
  return event.keyCode;
}

function clickSound(event) {
  const clickOnDivKey = event.path[0].getAttribute("data-key");
  const clickInternalDiv = event.path[1].getAttribute("data-key");

  if (clickOnDivKey) return clickOnDivKey;
  if (clickInternalDiv) return clickInternalDiv;
}

function removeTransition(event) {
  if (event.propertyName !== "transform") return;
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", (event) => {
  const type = "press";
  playAudio(event, type);
});

window.addEventListener("click", (event) => {
  const type = "click";
  playAudio(event, type);
});
