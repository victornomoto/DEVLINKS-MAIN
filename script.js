function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("ligth")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  //substtituir a imagem
  if (html.classList.contains("ligth")) {
    // se tiver ligth mode, adicionar imagem ligth
    img.setAttribute("src", "./assets/Avatar.png")
  } else {
    // set tiver sem ligth mode, manter a imagem normal
    img.setAttribute("src", "./assets/Avatar.png")
  }
}
