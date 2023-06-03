"use strict";

function playAudio(keyCode) {
	const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
	if (audio) {
		audio.currentTime = 0;
		const key = document.querySelector(`div[data-key="${keyCode}"]`);
		key.classList.toggle("playing");
		audio.play();
	}
}

window.addEventListener("keydown", ({ keyCode }) => playAudio(keyCode));

document.querySelectorAll(".key").forEach(e => {
	e.addEventListener("click", ({ target }) =>
		playAudio(target.getAttribute("data-key"))
	);
	e.addEventListener(
		"transitionend",
		({ propertyName }) =>
			propertyName === "transform" && e.classList.remove("playing")
	);
	e.querySelector("kbd").addEventListener(
		"click",
		({ target: { parentElement } }) =>
			playAudio(parentElement.getAttribute("data-key"))
	);
	e.querySelector("p").addEventListener(
		"click",
		({ target: { parentElement } }) =>
			playAudio(parentElement.getAttribute("data-key"))
	);
});
