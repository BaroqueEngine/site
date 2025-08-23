---
title: 倍数丸め
---

## 概要
2 つの値 A,B を渡すと、A の値に近い B の倍数値を返す。

## コード例
```typescript
function roundToMultiple(value: number, unit: number): number {
  if (unit === 0) {
    return value;
  }
  return Math.round(value / unit) * unit;
}
```
割り切れない場合、次の倍数/前の倍数にしたい場合は、 round() を ceil() or floor() に置き換える。