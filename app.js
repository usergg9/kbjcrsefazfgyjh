const button = document.querySelector("button");
const resultado = document.getElementById("resultado");

button.addEventListener("mousedown", () => {
  resultado.textContent = "🎧 Escuchando tarareo...";
});

button.addEventListener("mouseup", () => {
  resultado.textContent = "🔍 Buscando canción...";

  setTimeout(() => {
    resultado.textContent = "🎵 Ejemplo: Shape of You - Ed Sheeran";
  }, 2000);
});
