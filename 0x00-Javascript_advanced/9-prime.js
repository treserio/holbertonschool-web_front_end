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
countPrimeNumbers();
end = performance.now()
console.log(`Execution time of printing countPrimeNumbers was ${end - st} milliseconds.`)
