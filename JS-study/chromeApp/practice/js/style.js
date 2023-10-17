const styleP = document.querySelector("p");

function handleChangeColor() {
	// active라는 클래스네임만 추가하도록 작동
	// const activeClass = "active";
	// if (styleP.classList.contains(activeClass)) {
	// 	styleP.classList.remove(activeClass);
	// } else {
	// 	styleP.classList.add(activeClass);
	// }

	// 위의 코드를 toggle 하나로 해결
	styleP.classList.toggle("active");
};

styleP.addEventListener("click", handleChangeColor);