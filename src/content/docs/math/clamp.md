---
title: クランプ処理
---

## 概要
クランプ処理は、値、最小値、最大値を渡して、値が最小値～最大値の範囲を超えないように調整を行う。

## コード例
```typescript
function clamp(value: number, min: number, max: number): number {
  return Math.max(Math.min(value, max), min);
}
```
value が min 未満なら min に、 value が max より大きいなら max にして、 value の値が min ～ max の範囲から外れないように調整する。