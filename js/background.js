const images = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;  //bgImage의 src를 설정

document.body.appendChild(bgImage);