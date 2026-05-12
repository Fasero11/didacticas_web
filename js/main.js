function calcular() {
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('select[name="q2"]').value;
    const q3 = document.querySelectorAll('input[name="q3"]:checked');
    const q4 = document.querySelector('input[name="q4"]:checked');
    const q5 = document.querySelector('input[name="q5"]:checked');
    const q6 = document.querySelector('select[name="q6"]');
    const q6Seleccionadas = Array.from(q6.selectedOptions);

    if (!q1 || q2 === "Incorrecto" || !q4 || !q5 || q6Seleccionadas.length === 0) {
        alert("¡Ojo! Te faltan preguntas por responder.");
        return;
    }

    let nota = 0;

    nota += parseInt(q1.value);

    if (q2 === "1") {
        nota += 1;
    }

    const q3Valores = Array.from(q3).map(el => el.value);
    if (q3Valores.length === 2 && q3Valores.every(valor => valor === "1")) {
        nota += 1;
    }

    nota += parseInt(q4.value);
    nota += parseInt(q5.value);

    const q6Valores = q6Seleccionadas.map(el => el.value);
    if (q6Valores.length === 2 && q6Valores.every(valor => valor === "1")) {
        nota += 1;
    }

    const display = document.getElementById("resultado");
    const aprobado = nota >= 4;

    display.style.display = "block";
    display.className = aprobado ? "resultado-aprobado" : "resultado-suspenso";

    display.innerHTML = `Puntuación: ${nota} / 6 <br> ${
        aprobado
            ? '¡Felicidades, has aprobado! 🎉'
            : 'No has alcanzado la nota mínima. ¡Sigue repasando! 📚'
    }`;
}