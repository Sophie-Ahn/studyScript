const title = document.getElementById("title");

title.innerText = "안녕";
console.log(title.id);
console.log(title.class); // class로 된 title이 없기때문에 undefined로 뜸


// querySelectorAll은 array로 받을 수 있음
const thisDiv = document.querySelectorAll(".this-div");

console.log(thisDiv);

// style을 바꿀 수가 있음
title.style.color = "forestGreen";

// eventListener
function handleClickEvent() {
	title.style.color = "orange";
};

function handleMouseEnter() {
	title.style.color = "yellow";
};

function handleMouseLeave() {
	title.style.color = "tomato";
}

function handleWindowResize() {
	title.style.backgroundColor = "#ddd";
}

function handleWindowCopy() {
	title.style.backgroundColor = "lemonchiffon";
}

title.addEventListener("click", handleClickEvent);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

// window 화면 사이즈가 변경이 될 때(resize)
window.addEventListener("resize", handleWindowResize);