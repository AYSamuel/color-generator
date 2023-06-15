const button = document.querySelector('#btn');
const colorName = document.querySelector('#colorname');
colorName.hidden = true; // I used this to hide the h3 for the color name, but when the button is clicked, I set it to false so that the color rgb can then be displayed
button.addEventListener('click', () => {
  const wholePage = document.querySelector('#page');
  const randomColorR = Math.floor(Math.random() * 255);
  const randomColorG = Math.floor(Math.random() * 255);
  const randomColorB = Math.floor(Math.random() * 255);

  const generatedColor = `rgb(${randomColorR}, ${randomColorG}, ${randomColorB})`;
  if (generatedColor === `rgb(0, 0, 0)`) {
    wholePage.style.backgroundColor = `rgb(255, 255, 255)`;
  } else {
    wholePage.style.backgroundColor = generatedColor;
  }

  btn.style.backgroundColor = generatedColor;
  colorName.innerText = generatedColor;
  colorName.hidden = false;
});
