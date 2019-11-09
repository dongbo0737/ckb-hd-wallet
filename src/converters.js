const { HDNode } = require('bitcoinjs-lib');
const bip39 = require('bip39');
const bip32 = require('bip32');

const converters = {};

converters.mnemonicToXpriXpub = (hdWords, hdPassword) => {
  if (!bip39.validateMnemonic(hdWords)) {
    throw 'Error: invalid mnemonic words';
  }
  const seed = bip39.mnemonicToSeedSync(hdWords, hdPassword);
  const node = bip32.fromSeed(seed);
  const xprvRoot = node;
  const xpubRoot = node.neutered();
  return {
    xprv: xprvRoot.toBase58(),
    xpub: xpubRoot.toBase58(),
  };
};

module.exports = converters;
