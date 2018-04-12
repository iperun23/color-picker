const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
const button = document.querySelector("#colorbutton");


const setGradient = () => {
    body.style.background = "linear-gradient(to right, " 
    + color1.value + ", " 
    + color2.value + ")";
    css.textContent = body.style.background + ";";
};

// Get random number:

const getRandomColor = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    };

  // Set random number:

const setGradientSeed = () => {
    color1.value = getRandomColor();
    color2.value = getRandomColor();
    setGradient();
  };

window.addEventListener("load", setGradient);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener ("click", setGradientSeed);