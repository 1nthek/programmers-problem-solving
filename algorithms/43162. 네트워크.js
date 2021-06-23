function solution(n, computers) {
  let isVisited = {};

  const DFS = (vertex) => {
    isVisited[vertex] = true;
    for (let i = 0; i < n; ++i) {
      if (computers[vertex][i] === 1 && !isVisited[i]) {
        DFS(i);
      }
    }
  };

  var answer = 0;
  for (let i = 0; i < n; ++i) {
    if (!isVisited[i]) {
      ++answer;
      DFS(i);
    }
  }
  return answer;
}
