function generateNumber() {
    const minValue = document.querySelector('.input-min').value.trim();
    const maxValue = document.querySelector('.input-max').value.trim();

    const min = parseInt(minValue);
    const max = parseInt(maxValue);

    const isMinInteger = /^\d+$/.test(minValue);
    const isMaxInteger = /^\d+$/.test(maxValue);

    if (!isMinInteger || !isMaxInteger) {
    document.getElementById('resultado').textContent = "⚠️ Insira apenas números inteiros (sem vírgulas ou pontos).";
    return;
    }

    if (isNaN(min) || isNaN(max) || min >= max) {
    document.getElementById('resultado').textContent = "⚠️ Insira valores válidos.";
    return;
    }

  const result = Math.floor(Math.random() * (max - min + 1)) + min;

    document.getElementById('resultado').textContent = `🎲 Número sorteado: ${result}`;
}