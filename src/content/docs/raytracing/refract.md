---
title: レイの屈折
---

## 概要
この reflect 関数は、スネルの法則に基づき、屈折後のレイの方向ベクトルを計算する。

- incident_direction (Vec3A): 入射してくる光の方向ベクトル（単位ベクトル）。
- normal (Vec3A): 反射が起こる面の法線ベクトル（単位ベクトル）。
- refraction_ratio (f32): 屈折率の比 (`n1 / n2`)。`n1` は入射側の媒質の屈折率、 `n2` は屈折側の媒質の屈折率。

## コード例
```rust
fn refract(incident_direction: Vec3A, normal: Vec3A, refraction_ratio: f32) -> Vec3A {
    let cos_theta = (-incident_direction).dot(normal).min(1.0);
    let r_out_perp_to_normal = refraction_ratio * (incident_direction + cos_theta * normal);
    let r_out_parallel_to_normal =
        -(1.0 - r_out_perp_to_normal.length_squared()).abs().sqrt() * normal;

    r_out_parallel_to_normal + r_out_perp_to_normal
}
```
1. let cos_theta = (-incident_direction).dot(normal).min(1.0);
   - incident_directionの逆ベクトルと法線normalの内積を計算し、入射角のコサインcosθを求める。浮動小数点数の誤差対策として、値は1.0以下にクランプされる。
2. r_out_perp_to_normal = refraction_ratio * (incident_direction + cos_theta * normal);
   - まず括弧内で入射ベクトルの法線に対する垂直成分を計算する。次に、そのベクトルを屈折率の比refraction_ratioでスケーリングし、スネルの法則に基づいて屈折後のレイが持つべき垂直成分を算出する。
3. let r_out_parallel_to_normal = -(1.0 - r_out_perp_to_normal.length_squared()).abs().sqrt() * normal;
   - 屈折後のレイも単位ベクトルでなければならないため、ピタゴラスの定理 (平行成分)² + (垂直成分)² = 1 を利用して平行成分の長さを求める。算出した長さに法線ベクトルnormalを掛け、さらにマイナスを付けて、サーフェスの内側を向く平行成分ベクトルを算出する。
4. r_out_parallel_to_normal + r_out_perp_to_normal
   - ステップ2と3で算出した屈折後の「垂直成分」と「平行成分」をベクトル加算し、最終的な屈折方向ベクトルを再合成する。