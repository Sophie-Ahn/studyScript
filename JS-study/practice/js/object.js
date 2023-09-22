const player = {
	name: 'seulki',
	birthYear: '1995',
	like: 'ddukbokki',
	fat: true,
};

// 리스트는 아니지만 데이터 정리를 할 때 유용함
console.log(player);
console.log(player.name);

// const를 직접적으로 바꿔주는게 아니라 그 안에 있는 내용만 변경 해주기 때문에 수정도 가능하고 추가도 가능함
player.fat = false; // 수정
player.boyfriend = true; // 추가
console.log(player);

// player라는 const 변수를 직접적으로 바꿔주면 console 오류가 뜸
// player = false;
// console.log(player);