function countPrimeNumbers(num) {
  let cnt = 0;

  if (num > 100)
    return 0;
  if (num === 2 || num === 3 || num === 5 || num === 7)
    ++cnt;
  else if (num % 2 && num % 3 && num % 5 && num % 7)
    ++cnt;
  return cnt += countPrimeNumbers(num + 1);
}

st = performance.now();
for (let i = 0; i < 100; ++i) {
  countPrimeNumbers(2);
}
end = performance.now()
console.log(`Execution time of calculating prime numbers 100 times was ${end - st} milliseconds.`)
