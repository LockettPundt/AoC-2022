import { splitByNewLine } from './split-by-new-line';
import { expect, describe, test } from 'bun:test';

describe(`splitByNewLine()`, () => {
  test(`WHEN passed a file name and directory THEN returns an array with each line as an index`, () => {
    expect(splitByNewLine(`test-data.txt`, import.meta.dir).length).toBe(2);
    expect(splitByNewLine(`test-data.txt`, import.meta.dir)[0]).toBe(`1234`);
    expect(splitByNewLine(`test-data.txt`, import.meta.dir)[1]).toBe(`5678`);
  });
});
