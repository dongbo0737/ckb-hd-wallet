const converters = require('./converters.js');

const xpair = {
  "xprv": "xprv9s21ZrQH143K3VMbcHTQZUtTAYnxWvGhUU24PR1Tiu1PhbteCt8KChE5qwCHZzndnbi1AzCY2tz5KBR9zPADH7JEmmtZpxrAmsQxp577eLx",
  "xpub": "xpub661MyMwAqRbcFyS4iJzQvcqBiadSvNzYqgwfBoR5HEYNaQDnkRSZkVYZhD25oY7hnHgrY6HuHwZmy5BSmWyGbK2Pumk1cZ7bfFvVmBDwiE4",
};

const xpairCkb = {
  xprv: 'xprv9zow6yZn8ehi8LsTm2UeUNHfbQAQ1nYRzce79UJ9SGZdpf46PrkQoCCe8RxkhyzHH2zdXKiioR2imPRwehdayVSZemK8kdKcck4qjSjMjhk',
  xpub: 'xpub6DoHWV6fy2G1Lpwvs41eqWEQ9RztRFGHMqZhwrhkzc6chTPEwQ4fLzX7yhwBzMULTtvnpeXNgvh1mj5H9WWefDjFc48hzbat9tmdQFfBULW',
};

test('converters.mnemonicToXpair', () => {
  expect(converters.mnemonicToXpair(
    'element solution uncle close auto eight eight promote bachelor february rival girl', null
  )).toStrictEqual(xpair);
});

test('converters.xpairToCkbXpair', () => {
  expect(converters.xpairToCkbXpair(xpair)).toStrictEqual(xpairCkb)
});
