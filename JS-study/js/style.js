"use strict";

const pang = document.querySelector(".style");

function handleTitleClick() {
	let newColor;
	if (pang.style.color == "lemonchiffon") {
		pang.style.color = "forestGreen";
	} else {
		pang.style.color = "lemonchiffon";
	};

	pang.style.color = newColor;
}

pang.addEventListener("click", handleTitleClick);