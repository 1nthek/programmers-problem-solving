def solution(triangle):
    for i in range(len(triangle) - 1):
        for j in range(len(triangle[i+1])):
            if j == 0:
                triangle[i+1][j] = triangle[i][j] + triangle[i+1][j]
            elif j == len(triangle[i+1])-1:
                triangle[i+1][j] = triangle[i][j-1] + triangle[i+1][j]
            else:
                triangle[i+1][j] = max(triangle[i][j-1], triangle[i][j]) + triangle[i+1][j]
    arr = sorted(triangle[len(triangle)-1])
    return arr[len(arr)-1]