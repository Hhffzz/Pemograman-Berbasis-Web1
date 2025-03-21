document.getElementById('fibonacciForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const num = parseInt(document.getElementById('num').value);
    const result = generateFibonacci(num);
    document.getElementById('result').textContent = result.join(', ');
});

function generateFibonacci(n) {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
}