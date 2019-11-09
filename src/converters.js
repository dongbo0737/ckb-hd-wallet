const constants = require('./constants');
const bip39 = require('bip39');
const bip32 = require('bip32');

const converters = {};

converters.mnemonicToXpair = (hdWords, hdPassword) => {
  if (!bip39.validateMnemonic(hdWords)) {
    throw 'Error: invalid mnemonic words';
  }
  const seed = bip39.mnemonicToSeedSync(hdWords, hdPassword);
  const xprvRoot = bip32.fromSeed(seed);
  const xpubRoot = xprvRoot.neutered();
  return {
    xprv: xprvRoot.toBase58(),
    xpub: xpubRoot.toBase58(),
  };
};

converters.xpairToCkbXpair = (xpair) => {
  const n = constants.CKB_BIP32_CODE;
  const p = `m/44'/${n}'/0'/0`;
  const xprvRoot = bip32.fromBase58(xpair.xprv, constants.CKB);
  xprvCkb = xprvRoot.derivePath(p);
  const xpubCkb = xprvCkb.neutered();
  return {
    xprv: xprvCkb.toBase58(),
    xpub: xpubCkb.toBase58(),
  };
};

module.exports = converters;
