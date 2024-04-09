function appendToResult(value) {
    document.getElementById('result').value += value;
}

function calculateResult() {
    const result = document.getElementById('result');
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = 'Error';
    }
}

function clearResult() {
    document.getElementById('result').value = '';
}