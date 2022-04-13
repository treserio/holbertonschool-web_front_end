function countPrimeNumbers() {
  let cnt = 4;
  for(let i = 10; i < 101; ++i) {
    if (i % 2 && i % 3 && i % 5 && i % 7) {
      ++cnt;
    }
  }
  return cnt;
}

st = performance.now();
for (let i = 0; i < 100; ++i) {
  countPrimeNumbers();
}
end = performance.now()
console.log(`Execution time of calculating prime numbers 100 times was ${end - st} milliseconds.`)

