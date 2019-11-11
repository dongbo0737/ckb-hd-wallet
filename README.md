<p align="center">
  <a href="https://www.nervos.org/">
    <img height="60" src="https://bitsoda-static.oss-cn-shanghai.aliyuncs.com/img/coins/ckb.jpg">
  </a>
  <a href="http://bitsoda.com">
    <img width="60" src="https://bitsoda-static.oss-cn-shanghai.aliyuncs.com/img/Bitsoda-Logo200.jpg">
  </a>
</p>

# ckb-hd-wallet

![](https://flat.badgen.net/npm/v/ckb-hd-wallet?icon=npm) ![](http://img.shields.io/npm/dm/ckb-hd-wallet.svg?style=flat-square) [![Dependencies](https://img.shields.io/david/bitsoda-exchange/ckb-hd-wallet.svg?style=flat-square)](https://david-dm.org/bitsoda-exchange/ckb-hd-wallet) [![DevDependencies](https://img.shields.io/david/dev/bitsoda-exchange/ckb-hd-wallet.svg?style=flat-square)](https://david-dm.org/bitsoda-exchange/ckb-hd-wallet?type=dev) ![](https://badgen.net/github/last-commit/micromatch/micromatch) [![Website bitsoda.com](https://img.shields.io/website-up-down-green-red/https/bitsoda.com.svg)](https://bitsoda.com/)


This library generates CKB private/public keypairs from root xpriv and root xpub, conforming to bip-32 and bip-44

CKB coin_type is as specified in [slip-44](https://github.com/satoshilabs/slips/blob/master/slip-0044.md):

index | hex        | symbol | coin
------|------------|--------|-----------------------------------
309   | 0x80000135 | CKB    | [Nervos CKB](https://www.nervos.org)
