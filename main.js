let fonts = document.getElementsByClassName("font-box");
let colors = document.getElementsByClassName("color-box");
let sizes = document.getElementsByClassName("size-box");

for (let i = 0; i < fonts.length; i++){
  fonts[i].style.fontFamily = fonts[i].textContent;
  fonts[i].addEventListener("click", function (e) {
    window.localStorage.setItem("font", fonts[i].textContent);
    document.body.style.fontFamily = window.localStorage.getItem("font");
    e.target.classList.add("active")
    window.location.reload();
  })
  if (fonts[i].textContent === window.localStorage.getItem("font")) {
    fonts[i].classList.add("active")
  } else {
    fonts[i].classList.remove("active");
  }
  
}

document.body.style.fontFamily = window.localStorage.getItem("font")

for (let i = 0; i < colors.length; i++){
  colors[i].style.backgroundColor = colors[i].textContent; 
  if (!colors[i].classList.contains("active")) {
    colors[i].style.opacity = .5
  }
  colors[i].addEventListener("click", function (e) {
    window.localStorage.setItem("color", colors[i].textContent);
    document.body.style.color = window.localStorage.getItem("color")
    e.target.classList.add("active")
    window.location.reload();
  })
  if (colors[i].textContent === window.localStorage.getItem("color")) {
    colors[i].classList.add("active")
    colors[i].style.opacity = 1
  } else {
    colors[i].classList.remove("active")
  }
}

document.body.style.color = window.localStorage.getItem("color")


for (let i = 0; i < sizes.length; i++){
  sizes[i].addEventListener("click", function (e) {
    window.localStorage.setItem("size", sizes[i].textContent  + "px");
    document.body.style.fontSize = window.localStorage.getItem("size");
    e.target.classList.add("active")
    window.location.reload();
  })
}

document.body.style.fontSize = window.localStorage.getItem("size");