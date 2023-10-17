// const age = prompt("현재 나이가 몇 세입니까?");
// parseInt는 string을 number로 변경해줌
// console.log(age, parseInt(age));

const newAge = parseInt(prompt("현재 나이가 몇 세 입니까?"));
console.log(newAge);
// newAge는 parseInt로 인해 숫자를 입력하면 number로 나오고 문자로 입력하면 NaN으로 나온다

if (isNaN(newAge) || newAge < 0) {
	console.log("양수 숫자 써");
} else if (newAge < 18) {
	console.log("미성년자");
} else if (newAge >= 18 && newAge <= 62) {
	console.log("일하는 나이");
} else {
	console.log("쉬는 나이");
};