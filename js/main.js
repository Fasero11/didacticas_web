function calcular() {
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('select[name="q2"]').value;
    const q3 = document.querySelectorAll('input[name="q3"]:checked');
    const q4 = document.querySelector('input[name="q4"]:checked');
    const q5 = document.querySelector('input[name="q5"]:checked');
    const q6 = document.querySelector('select[name="q6"]');
    const q6Seleccionadas = Array.from(q6.selectedOptions);

    const q7Input = document.getElementById('q7');
    const q7Valor = q7Input.value.trim().toLowerCase();

    if (!q1 || q2 === "" || !q4 || !q5 || q6Seleccionadas.length === 0 || q7Valor === "") {
        alert("¡Ojo! Te faltan preguntas por responder.");
        return;
    }

    let nota = 0;

    const mostrarFeedback = (id, esCorrecto, mensaje) => {
        const el = document.getElementById(id);
        el.innerHTML = esCorrecto ? `✅ Correcto: ${mensaje}` : `❌ Incorrecto. La respuesta era: ${mensaje}`;
        el.style.color = esCorrecto ? "#28a745" : "#dc3545";
        el.style.display = "block";
    };

    const q1Correcta = q1.value === "1";
    if (q1Correcta) nota += 1;
    mostrarFeedback("feedback-q1", q1Correcta, "Un lenguaje de marcado que se utiliza para estructurar el contenido de una página web");

    const q2Correcta = q2 === "1";
    if (q2Correcta) nota += 1;
    mostrarFeedback("feedback-q2", q2Correcta, "Para estructurar y organizar el contenido de una página web.");

    const q3Valores = Array.from(q3).map(el => el.value);
    const q3Correcta = q3Valores.length === 2 && q3Valores.every(v => v === "1");
    if (q3Correcta) nota += 1;
    mostrarFeedback("feedback-q3", q3Correcta, "&lt;p&gt; y &lt;h1&gt;");

    const q4Correcta = q4.value === "1";
    if (q4Correcta) nota += 1;
    mostrarFeedback("feedback-q4", q4Correcta, "console.log()");

    const q5Correcta = q5.value === "1";
    if (q5Correcta) nota += 1;
    mostrarFeedback("feedback-q5", q5Correcta, "const miValor = 10;");

    const q6Valores = q6Seleccionadas.map(el => el.value);
    const q6Correcta = q6Valores.length === 2 && q6Valores.every(v => v === "1");
    if (q6Correcta) nota += 1;
    mostrarFeedback("feedback-q6", q6Correcta, "// y /* ... */");

    const q7Correcta = q7Valor === "css";
    if (q7Correcta) nota += 1;
    mostrarFeedback("feedback-q7", q7Correcta, "css");

    const display = document.getElementById("resultado");
  
    const aprobado = nota >= 4;

    display.style.display = "block";
    display.className = aprobado ? "resultado-aprobado" : "resultado-suspenso";
    display.innerHTML = `Puntuación: ${nota} / 7 <br> ${aprobado ? '¡Felicidades! 🎉' : 'Sigue repasando 📚'}`;
}