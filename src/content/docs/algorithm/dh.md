---
title: ディフィー・ヘルマン鍵共有
---

## コード例
```python
secret_a = 1234 # Aliceの秘密鍵
secret_b = 5678 # Bobの秘密鍵
g = 3 # 基数（Generator）
p = 65537 # 法（Modulus）

# Aliceが計算し、Bobに送る公開値 A = g^a mod p
public_A = pow(g, secret_a, p)

# Bobが計算し、Aliceに送る公開値 B = g^b mod p
public_B = pow(g, secret_b, p)

# 共通鍵の生成

# Alice: K = B^a mod p
key_alice = pow(public_B, secret_a, p)

# Bob: K = A^b mod p
key_bob = pow(public_A, secret_b, p)

print(f"Aliceが生成した共通鍵 (K): {key_alice}")
print(f"Bobが生成した共通鍵 (K): {key_bob}")
print(f"鍵が一致したか: {key_alice == key_bob}")
```
