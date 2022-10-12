window.addEventListener("keydown", function (event) {
  const audio = this.document.querySelector(
    `audio[data-key="${event.keyCode}"`
  );

  const playing = this.document.querySelector(
    `.key[data-key="${event.keyCode}`
  );

  if (!audio) return;

  audio.currentTime = 0;
  audio.play();

  playing.classList.add("playing");
});

function removeTransition(event) {
    if (event.propertyName !== "transform") return;
    this.classList.remove("playing");
  }
  
  const keys = document.querySelectorAll(".key");
  keys.forEach((key) => key.addEventListener("transitionend", removeTransition));