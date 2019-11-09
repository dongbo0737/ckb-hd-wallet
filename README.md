<p align="center">
  <a href="https://www.nervos.org/">
    <img height="60" src="https://bitsoda-static.oss-cn-shanghai.aliyuncs.com/img/coins/ckb.jpg">
  </a>
  <a href="http://bitsoda.com">
    <img width="60" src="https://bitsoda-static.oss-cn-shanghai.aliyuncs.com/img/Bitsoda-Logo200.jpg">
  </a>
</p>

# ckb-hd-wallet

This library generates CKB private/public keypairs from root xpriv and root xpub, conforming to bip-32 and bip-44

CKB coin_type is as specified in [slip-44](https://github.com/satoshilabs/slips/blob/master/slip-0044.md):

index | hex        | symbol | coin
------|------------|--------|-----------------------------------
309   | 0x80000135 | CKB    | [Nervos CKB](https://www.nervos.org)
