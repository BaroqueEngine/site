---
title: 競プロ用テンプレ
---

## コード例
```rust
use proconio::input;

fn main() {
    input! {
        n: usize,
        s: String,
        a: [i32; 5],
        b: [usize; n],
        s_chars: Chars,   // Vec<char>
        s_bytes: Bytes,   // Vec<u8>
        index: Usize1,    // usizeとして読み込み、1を引く
        point: (i32, i32, String),
        h: usize,
        w: usize,
        matrix: [[i32; w]; h],
    }
}
```
