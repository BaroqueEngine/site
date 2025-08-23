---
title: チェス盤のパリティ判定
---

## コード例
```typescript
// (x, y)の位置が白マスか？
function isWhiteCell(x: number, y: number): boolean {
  return (x + y) % 2 !== 0;
}

// (a, b)と(c, d)のマス色は同じか？
function equalColor(a: number, b: number, c: number, d: number): boolean {
  return isWhiteCell(a, b) === isWhiteCell(c, d);
}
```