---
title: 単位球の表面上にある点をランダムに選ぶ
---

## コード例
```rust
fn random_unit_vector() -> Vec3A {
    let mut rng = rand::thread_rng();
    let a: f32 = rng.gen_range(0.0..2.0 * PI);
    let z: f32 = rng.gen_range(-1.0..1.0);
    let r = (1.0 - z * z).sqrt();
    Vec3A::new(r * a.cos(), r * a.sin(), z)
}
```

1. `let a: f32 = rng.gen_range(0.0..2.0 * PI);`

    球体を水平に 360 度回転させるためのランダムな角度を決める。

2. `let z: f32 = rng.gen_range(-1.0..1.0);`

    球体の垂直方向の位置（ -1 から 1 の高さ）をランダムに決める。高さを均一に選ぶことで、表面積が小さい極付近と、表面積が大きい赤道付近で点の選ばれやすさが自動的に調整され、結果的に球全体の表面で均一な分布になる。

3. `let r = (1.0 - z * z).sqrt();`

    三平方の定理を使って、その高さ z における球の断面円の半径 r を計算する。

4. `Vec3A::new(r * a.cos(), r * a.sin(), z)`

    最後に、半径 r と角度 a を使って x, y 座標を計算し、ベクトルを組み立てる。

