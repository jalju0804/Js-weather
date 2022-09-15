const images = [
    "milky way1.jfif",
    "milky way2.jfif",
    "milky way3.jfif",
]

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);