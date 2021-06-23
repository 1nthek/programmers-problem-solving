function solution(begin, target, words) {
  let discovered = {};
  words.forEach((e) => (discovered[e] = false));
  discovered[begin] = true;
  let q = [begin];
  let ans = 0;

  while (q.length > 0) {
    let qSize = q.length;
    ++ans;

    while (qSize--) {
      const here = q.shift();
      for (let word in discovered) {
        if (!discovered[word] && isConvertible(here, word)) {
          if (word === target) {
            return ans;
          }
          discovered[word] = true;
          q.push(word);
        }
      }
    }
  }
  return 0;
}
const isConvertible = (from, to) => {
  let diff = 0;
  for (let i = 0; i < from.length; ++i) {
    if (from[i] !== to[i]) {
      ++diff;
    }
  }
  return diff === 1 ? true : false;
};
