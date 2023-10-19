const bgColor = ["blue", "yellow", "tomato", "green"];
const spanColor = document.querySelector("#quote span:last-child");
const randomColor = bgColor[Math.floor(Math.random() * bgColor.length)];

spanColor.classList.add(randomColor);