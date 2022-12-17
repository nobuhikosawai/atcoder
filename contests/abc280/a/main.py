N, M = map(int, input().split())

count = 0

inputs = [input() for _ in range(N)]

for row in inputs:
    for c in row:
        if c == '#':
            count = count + 1

print(count)

