function evaluar() {
  const respuestas = document.querySelectorAll('input[type="radio"]:checked');
  let score = 0;
  const puntos = [];

  respuestas.forEach((r, i) => {
    if (r.value === "correct") {
      score++;
      puntos.push(1);
    } else {
      puntos.push(0);
    }
  });

  document.getElementById("resultado").innerText = `Tu calificación: ${score} / 3`;

  const ctx = document.getElementById("grafico").getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Pregunta 1", "Pregunta 2", "Pregunta 3"],
      datasets: [{
        label: "Puntos",
        data: puntos,
        backgroundColor: ["#4caf50", "#2196f3", "#ff9800"]
      }]
    },
    options: {
      scales: {
        y: { beginAtZero: true, max: 1 }
      }
    }
  });
}

async function generarPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const resultado = document.getElementById("resultado").innerText;
  doc.text("Resultado del Diagnóstico", 10, 10);
  doc.text(resultado, 10, 20);

  const canvas = document.getElementById("grafico");
  const imgData = canvas.toDataURL("image/png");
  doc.addImage(imgData, "PNG", 10, 30, 180, 100);

  doc.save("diagnostico.pdf");
}
