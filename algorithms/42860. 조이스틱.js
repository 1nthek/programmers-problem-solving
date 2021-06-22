function solution(name) {
  let sum = 0;
  const n = name.length;

  for (let i = 0; i < n; ++i) {
    let diff = "Z".charCodeAt() - name[i].charCodeAt() + 1;
    sum += Math.min(diff, 26 - diff);
  }

  let min = 0;
  for (let i = 0; i < n; ++i) {
    for (let j = i + 1; j < n; ++j) {
      if (name[j] !== "A") {
        const right = i;
        const left = n - j;
        if (min === 0) {
          min = Math.min(2 * right + left, right + 2 * left);
        } else {
          min = Math.min(min, 2 * right + left, right + 2 * left);
        }
        break;
      }
    }
  }
  sum += min;
  return sum;
}
