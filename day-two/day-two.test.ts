import { splitByNewLine } from '~/utils/split-by-new-line';
import { describe, expect, test } from 'bun:test';
import { dayTwoPartOne } from './day-two';

describe(`day two`, () => {
  const data = splitByNewLine(`test-data.txt`, import.meta.dir);
  test(`part one...`, () => {
    const result = dayTwoPartOne(data);
    expect(result).toBe(15);
  });
  // test(`part two...`, () => {});
});
