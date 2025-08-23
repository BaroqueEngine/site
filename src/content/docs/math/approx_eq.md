---
title: 数値同士がほぼ同じ値か調べる
---

## 概要
== や === のような比較演算子を使用して、2 つの数値が同じ値かどうかを調べる際、同じ値だと思っていても、誤差によって true が返らない場合がある。
このようなケースに対応するため、多少ずれている場合でも、同じ値だと見なす関数を作る。

## コード例
```typescript
function approxEq(a: number, b: number, e: number): boolean {
  return Math.abs(a - b) < e;
}
// false
console.log(0.1 + 0.1 + 0.1 === 0.3);
// true
console.log(approxEq(0.1 + 0.1 + 0.1, 0.3, 0.001));
```
a と b が比較する 2 つの値で、その差の絶対値が e 未満なら、同じ値だと見なして true を返す。