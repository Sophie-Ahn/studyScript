const clock = document.querySelector("#clock");

function getClock() {
	const date = new Date();
	// padStart(a, "b")는 string앞에 a번째 글자안에서는 b가 나타나도록 만들어주게 함
	const hours = String(date.getHours()).padStart(2, "0");
	const minutes = String(date.getMinutes()).padStart(2, "0");
	const seconds = String(date.getSeconds()).padStart(2, "0");
	clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// 바로 함수를 호출함으로서 시간이 바로 나오게 만들어줌
getClock();
// 바로 function을 일정시간동안 실행시켜줌
setInterval(getClock, 1000);

// 일정한 시간뒤에 function을 실행시켜줌
// setTimeout(getClock, 1000);