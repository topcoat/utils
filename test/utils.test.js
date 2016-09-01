import test from 'ava';
import resin from 'resin';
import fs from 'fs';

test('compilation', t => {
  const input = './example.fixture.css';
  const expected = fs.readFileSync('./example.expected.css','utf-8').trim();
  return resin({
    src: input,
    vars: true,
    extend: true,
    prepend: '../src/utils.css'
  }).then(result => {
    t.is(result.css.trim(), expected);
  });
});
