function fibonacci(n) {
  let fib = [0, 1];

  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib.slice(0, n); // returns first 'n' Fibonacci numbers
}
let result = fibonacci(10);
console.log(result); 