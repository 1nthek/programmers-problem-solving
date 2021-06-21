function solution(n, lost, reserve) {
  let isLost = {},
    isReserve = {};
  lost.forEach((e) => (isLost[e] = true));
  reserve.forEach((e) => (isReserve[e] = true));
  reserve.forEach((e) => {
    if (isLost[e]) {
      isLost[e] = false;
    } else if (e > 1 && isLost[e - 1] && !isReserve[e - 1]) {
      isLost[e - 1] = false;
    } else if (e < n && isLost[e + 1] && !isReserve[e + 1]) {
      isLost[e + 1] = false;
    }
  });

  let count = 0;
  for (let i = 1; i <= n; ++i) {
    if (!isLost[i]) {
      ++count;
    }
  }

  return count;
}
