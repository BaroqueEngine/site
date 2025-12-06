---
title: LCS
---

## コード例
```python
S = input()
T = input()

dp = [[0] * (len(T) + 1) for _ in range(len(S) + 1)]

for y in range(1, len(S) + 1):
    for x in range(1, len(T) + 1):
        if S[y - 1] == T[x - 1]:
            dp[y][x] = dp[y - 1][x - 1] + 1
        else:
            dp[y][x] = max(dp[y - 1][x], dp[y][x - 1])

print(dp[-1][-1])
```

左から右、上から下に走査しているので、dp[y][x]の時点でdp[y - 1][x], dp[y][x - 1], dp[y - 1][x - 1]のLCSは確定している。
S[y - 1]とT[x - 1]が一致しているなら、SとTが一つ前の状態からお互い1文字ずつ増やしている状態なので、LCSはdp[y - 1][x - 1] + 1になる。
一致していないなら、一つ前の状態の最大のLCSをここに入れれば良い。 