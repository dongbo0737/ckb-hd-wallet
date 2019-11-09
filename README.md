# ckb-hd-wallet

This library generates CKB private/public keypairs from root xpriv and root xpub, conforming to bip-32 and bip-44

CKB coin_type is as specified in [slip-44](https://github.com/satoshilabs/slips/blob/master/slip-0044.md):

index | hex        | symbol | coin
------|------------|--------|-----------------------------------
309   | 0x80000135 | CKB    | [Nervos CKB](https://www.nervos.org)
