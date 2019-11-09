const converters = require('./converters.js');

test('converters.mnemonicToXpriXpub', () => {
  expect(converters.mnemonicToXpriXpub(
    'element solution uncle close auto eight eight promote bachelor february rival girl', null
  )).toStrictEqual({
    "xprv": "xprv9s21ZrQH143K3VMbcHTQZUtTAYnxWvGhUU24PR1Tiu1PhbteCt8KChE5qwCHZzndnbi1AzCY2tz5KBR9zPADH7JEmmtZpxrAmsQxp577eLx",
    "xpub": "xpub661MyMwAqRbcFyS4iJzQvcqBiadSvNzYqgwfBoR5HEYNaQDnkRSZkVYZhD25oY7hnHgrY6HuHwZmy5BSmWyGbK2Pumk1cZ7bfFvVmBDwiE4",
  });
});
