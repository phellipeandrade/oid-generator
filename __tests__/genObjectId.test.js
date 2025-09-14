const { genObjectId } = require('../dist/index.js');

describe('genObjectId', () => {
  test('returns a 24-character hexadecimal string', () => {
    const id = genObjectId();
    expect(id).toMatch(/^[0-9a-f]{24}$/);
  });

  test('generates unique ids', () => {
    const ids = new Set(Array.from({ length: 1000 }, () => genObjectId()));
    expect(ids.size).toBe(1000);
  });
});
