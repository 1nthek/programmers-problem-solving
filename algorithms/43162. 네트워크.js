let isVisited = {};
let _n;
let _computers;

function solution(n, computers) {
  var answer = 0;
  _n = n;
  _computers = computers;

  for (let i = 0; i < n; ++i) {
    if (!isVisited[i]) {
      ++answer;
      DFS(i);
    }
  }
  return answer;
}

const DFS = (loc) => {
  isVisited[loc] = true;
  for (let i = 0; i < _n; ++i) {
    if (_computers[loc][i] === 1 && !isVisited[i]) {
      DFS(i);
    }
  }
};
