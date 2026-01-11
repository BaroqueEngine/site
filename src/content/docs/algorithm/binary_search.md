---
title: 二分探索
---

## コード例
```python
import bisect

arr = [1, 4, 7, 8]
print(bisect.bisect_left(arr, 5)) # 2
print(bisect.bisect_left(arr, 8)) # 3
print(bisect.bisect_left(arr, 100)) # 4

print(bisect.bisect_right(arr, 5)) # 2
print(bisect.bisect_right(arr, 8)) # 4
print(bisect.bisect_right(arr, 100)) # 4
```

広義単調増加、つまり昇順の順序が崩れないような位置を返す。
指定した値が配列内にあるなら、bisect_leftは左側、bisect_rightは右側に配置する位置を返す。

## leftとrightの置き換え
```python
bisect.bisect_right(arr, X)
bisect.bisect_left(arr, X + 1)
```

配列の要素が整数の場合に限り、上記は数学的・論理的に常に同じ結果を返す。