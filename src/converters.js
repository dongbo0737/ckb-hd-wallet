const { HDNode } = require('bitcoinjs-lib');
const bip39 = require('bip39');

const converters = {};

converters.mnemonicToXpriXpub = (hdWords, hdPassword) => {
	if (!bip39.validateMnemonic(hdWords)) {
		throw 'Error: invalid mnemonic words';
  }
  const seedHex = bip39.mnemonicToSeedHex(hdWords, hdPassword);
  const xprvRoot = HDNode.fromSeedHex(seedHex);
  const xpubRoot = xprvRoot.neutered();
  return {
    xprv: xprvRoot.toBase58(),
    xpub: xpubRoot.toBase58(),
  };
};

module.exports = converters;
