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
  if (type === "press") return keySound(event);
}

function keySound(event) {
  return event.keyCode;
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
