// argument 인자를 이용해서 데이터를 function에 보내는 방법. 템플릿
function sayHello(nameOfPerson) {
	console.log("Hello to my friend " + nameOfPerson);
};
sayHello("Seulki");

function plus(a, b) {
	console.log(a + b);
};
plus(2, 10);

// object에서 function 적용
const player = {
	name: "seulki",
	info: function (a) {
		console.log("Hello, seulki! I'm " + a);
	},
};
console.log(player.info);
player.info("Sophie");