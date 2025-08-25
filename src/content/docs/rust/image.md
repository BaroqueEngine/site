---
title: Rustで画像を生成する
---

## コード例
```rust
use image::{ImageBuffer, Rgb};

fn main() {
    let mut img = ImageBuffer::new(600, 400);

    for y in 0..img.height() {
        for x in 0..img.width() {
            img.put_pixel(x, y, Rgb([255u8, 0u8, 0u8]));
        }
    }

    img.save("output.png").expect("保存できませんでした。");
}
```

image クレートを利用する。Rgb の指定が u8 でないと受け付けない。
