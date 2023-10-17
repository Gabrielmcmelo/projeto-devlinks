function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#avatar img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatarpansudo.png")
    img.setAttribute("alt", "cachorrinho pansudo")
  } else {
    img.setAttribute("src", "./assets/avatar420.png")
    img.setAttribute("alt","pateta chapado")
  }
}
