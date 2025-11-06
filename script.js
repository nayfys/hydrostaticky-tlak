function calculatePressure() {
   
    const ids = ['density', 'gravity', 'height'];
    const values = {};     
    const numbers = [];    
   
    for (let id of ids) {
        const el = document.getElementById(id);
        values[id] = el ? el.value : '';
        numbers.push(parseFloat(values[id]));
    }

 
    const [density, gravity, height] = numbers;

    
    if (numbers.some(n => !isFinite(n) || n <= 0)) {
        alert('Všechny hodnoty musí být větší než 0.');
        return;
    }


    const pascal = density * gravity * height;
    const barr = pascal / 100000;

   
    const outputs = {
        pressure: document.getElementById('pressure'),
        bar: document.getElementById('bar'),
        resultDiv: document.getElementById('result')
    };


    outputs.pressure.textContent = pascal.toFixed(2);
    outputs.bar.textContent = barr.toFixed(4);
    outputs.resultDiv.style.display = 'block';
}
