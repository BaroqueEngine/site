---
title: 約数列挙
---

## コード例
```typescript
function getDivisors(n: number): number[] {
  let ret: number[] = [];
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      ret.push(i);
      if (i * i !== n) {
        ret.push(n / i);
      }
    }
  }

  ret.sort((a, b) => a - b);

  return ret;
}
```
```typescript
console.log(getDivisors(12)); // [1, 2, 3, 4, 6, 12]
console.log(getDivisors(36)); // [1, 2, 3, 4, 6, 9, 12, 18, 36]
```