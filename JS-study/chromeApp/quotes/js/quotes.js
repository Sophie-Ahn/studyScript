const arrayFruits = [
	{
		name: "apple",
		color: "red"
	},
	{
		name: "banana",
		color: "yellow"
	},
	{
		name: "grape",
		color: "green"
	},
	{
		name: "watermelon",
		color: "green"
	},
	{
		name: "strawberry",
		color: "red"
	},
	{
		name: "peach",
		color: "pink"
	},
	{
		name: "pair",
		color: "brown"
	},
	{
		name: "blueberry",
		color: "purple"
	},
	{
		name: "mango",
		color: "yellow"
	},
	{
		name: "orange",
		color: "orange"
	},
];

const quote = document.querySelector("#quote span:first-child");
const color = document.querySelector("#quote span:last-child");

const todayFruit = arrayFruits[Math.floor(Math.random() * arrayFruits.length)];

quote.innerText = todayFruit.name;
color.innerText = todayFruit.color;