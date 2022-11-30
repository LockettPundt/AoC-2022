import { expect, describe, it } from 'bun:test';
import { peek } from 'bun';

describe(`this is a test`, () => {
  it(`some test`, () => {
    const result = Promise.resolve(`yoo`);

    expect(peek(result)).toBe(`yoo`);
  });
});
