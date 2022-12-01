import { splitByNewLine } from './split-by-new-line';
import { expect, describe, test } from 'bun:test';

describe(`splitByNewLine()`, () => {
  test(`WHEN passed a file name and directory THEN returns an array with each line as an index`, () => {
    const data = splitByNewLine(`test-data.txt`, import.meta.dir);

    expect(data.length).toBe(2);
    expect(data[0]).toBe(`1234`);
    expect(data[1]).toBe(`5678`);
  });
});
