import math

a, b = map(int, input().split())

l = 0
r = a / b

def f(n):
    return b * n + a / math.sqrt(1 + n)

while r - l > 2:
    c1 = (l * 2 + r) // 3
    c2 = (l + r * 2) // 3
    if f(c1) > f(c2):
        l = c1
    else:
        r = c2

ans = float('inf');
for i in range(int(l), int(r) + 1):
    ans = min(ans, f(i))

print(format(ans, '.10f'))

