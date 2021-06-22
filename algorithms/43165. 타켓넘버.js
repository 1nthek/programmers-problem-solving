let n;
let ans = 0;
let _numbers, _target;
function solution(numbers, target) {
  n = numbers.length;
  _numbers = numbers;
  _target = target;
  recur(0, 0);
  return ans;
}
const recur = (idx, sum) => {
  if (idx >= n) {
    if (sum === _target) {
      ++ans;
    }
    return;
  }
  recur(idx + 1, sum + _numbers[idx]);
  recur(idx + 1, sum - _numbers[idx]);
};
