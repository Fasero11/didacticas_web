function calcular() {
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('select[name="q2"]').value;
    const q3 = document.querySelectorAll('input[name="q3"]:checked');
    const q4 = document.querySelector('input[name="q4"]:checked');
    const q5 = document.querySelector('input[name="q5"]:checked');
    const q6 = document.querySelector('input[name="q6"]:checked');

    if (!q1 || q2 === "0" || !q4 || !q5 || !q6) {
        alert("¡Ojo! Te faltan preguntas por responder. Asegúrate de haber seleccionado una opción en las preguntas 1, 2, 4, 5 y 6.");
        return;
    }

    let nota = 0;
    nota += parseInt(q1.value);
    nota += parseInt(q2);

    q3.forEach(el => {
        nota += parseInt(el.value);
    });

    nota += parseInt(q4.value);
    nota += parseInt(q5.value);
    nota += parseInt(q6.value);

    const display = document.getElementById("resultado");
    const aprobado = nota >= 4;

    display.style.display = "block"; 
    display.style.padding = "15px";
    display.style.borderRadius = "8px";
    display.style.marginTop = "20px";
    display.style.backgroundColor = aprobado ? "#d4edda" : "#f8d7da";
    display.style.color = aprobado ? "#155724" : "#721c24";
    display.style.border = aprobado ? "1px solid #c3e6cb" : "1px solid #f5c6cb";
    display.style.textAlign = "center";
    display.style.fontWeight = "bold";

    display.innerHTML = `Puntuación: ${nota} / 7 <br> ${aprobado ? '¡Felicidades, has aprobado! 🎉' :
        'No has alcanzado la nota mínima. ¡Sigue repasando! 📚'}`;
}