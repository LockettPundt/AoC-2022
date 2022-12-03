import { splitByNewLine } from '~/utils/split-by-new-line';
import { describe, expect, test } from 'bun:test';
import { dayThreePartOne, dayThreePartTwo } from './day-three';

describe(`day two`, () => {
  const data = splitByNewLine(`test-data.txt`, import.meta.dir);
  test(`part one...`, () => {
    const result = dayThreePartOne(data)
    expect(result).toBe(157)
  });
  test(`part two...`, () => {
    const result = dayThreePartTwo(data)
    expect(result).toBe(70)
  });
});
