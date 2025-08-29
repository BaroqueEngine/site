---
title: randクレート
---

## コード例
```rust
use rand::Rng;

fn main() {
    let mut rng = rand::thread_rng();
    let a: f32 = rng.gen_range(0.0..5.0); // [min, max)
    let b = rng.gen::<f32>(); // [0.0, 1.0)
}
```

関数ごとに `rand::thread_rng()` を利用してオブジェクトを生成してよい。