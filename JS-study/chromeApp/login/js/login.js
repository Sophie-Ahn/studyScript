const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

// string만 변수에 담고 싶을 때 관행으로 변수를 대문자로 표현(중요한 변수가 아니라서)
const CLASSNAME_HIDDEN = "hidden";
const USERNAME_KEY = "userName";

function onLoginSubmit(event) {
	// form 태그는 엔터를 누를때마다 브라우저에서 자동으로 submit을 해줌
	// 즉 전체 페이지를 새로고침을 해줌. 그래서 preventDefault이라는 function으로 막아줌으로서 브라우저의 기본행동을 막게 해줌
	event.preventDefault();
	loginForm.classList.add(CLASSNAME_HIDDEN);
	const userName = loginInput.value;
	localStorage.setItem(USERNAME_KEY, userName);
	writeGreeting(userName); // userName을 쓴 이유는 input의 value를 얻을려고 함
};

function writeGreeting(user) {
	greeting.classList.remove(CLASSNAME_HIDDEN);
	// greeting.innerText = "안녕 " + userName;
	// string안에 변수를 포함시킴
	greeting.innerText = `안녕 ${user}`; // 이 함수에 대해서 user란 인자를 받음
}


const saveUserName = localStorage.getItem(USERNAME_KEY);

if (saveUserName === null) {
	loginForm.classList.remove(CLASSNAME_HIDDEN);
	loginForm.addEventListener("submit", onLoginSubmit);
} else {
	writeGreeting(saveUserName); // 이미 로컬에서 가지고 있는 value를 얻기위해 saveUserName을 사용함
}