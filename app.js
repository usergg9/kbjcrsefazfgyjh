const button = document.querySelector("button");
const resultado = document.getElementById("resultado");

let mediaRecorder;
let audioChunks = [];

button.addEventListener("mousedown", async () => {
  resultado.textContent = "🎤 Pidiendo acceso al micrófono...";

  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

    resultado.textContent = "🎧 Grabando tarareo...";

    mediaRecorder = new MediaRecorder(stream);
    audioChunks = [];

    mediaRecorder.start();

    mediaRecorder.ondataavailable = (event) => {
      audioChunks.push(event.data);
    };

  } catch (err) {
    resultado.textContent = "❌ No se pudo acceder al micrófono";
  }
});

button.addEventListener("mouseup", () => {
  if (mediaRecorder && mediaRecorder.state !== "inactive") {
    mediaRecorder.stop();

    mediaRecorder.onstop = () => {
      const audioBlob = new Blob(audioChunks, { type: "audio/webm" });

      resultado.textContent = "🔍 Analizando tarareo...";

      setTimeout(() => {
        resultado.textContent = "🎵 Tarareo recibido (IA aún no conectada)";
      }, 2000);
    };
  }
});
