const caculator = {
	sum: function (a, b) {
		console.log(a + b);
	},
	minus: function (a, b) {
		console.log(a - b);
	},
	divide: function (a, b) {
		console.log(a / b);
	},
	times: function (a, b) {
		console.log(a * b);
	}
};

caculator.sum(10, 2);
caculator.minus(10, 2);
caculator.divide(10, 2);
caculator.times(10, 2);


// return
const age = 95;
function calculateKrAge(ageOfForeigner) {
	return ageOfForeigner + 2;
};
const krAge = calculateKrAge(age);
console.log(krAge);
// return을 함으로써 function을 호출하는 코드가 됨
// return은 한 번 하고나면 그 function은 그 자리에서 끝남. 종료가 됨.


const returnCaculator = {
	sum: function (a, b) {
		return a + b;
	},
	minus: function (a, b) {
		return a - b;
	},
	divide: function (a, b) {
		return a / b;
	},
	times: function (a, b) {
		return a * b;
	}
};
const resultSum = returnCaculator.sum(10, 2);
const resultMinus = returnCaculator.minus(10, 2);
const resultDivide = returnCaculator.divide(10, 2);
const resultTimes = returnCaculator.times(10, 2);
console.log(resultSum);
console.log(resultMinus);
console.log(resultDivide);
console.log(resultTimes);