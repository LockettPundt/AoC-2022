import { splitByNewLine } from '~/utils/split-by-new-line';
import { describe, expect, test } from 'bun:test';
import { dayFourPartOne, dayFourPartTwo } from './day-four';

describe(`day four`, () => {
  const data = splitByNewLine(`test-data.txt`, import.meta.dir);
  test(`part one...`, () => {
    const result = dayFourPartOne(data);
    expect(result).toBe(2);
  });
  test(`part two...`, () => {
    const result = dayFourPartTwo(data);
    expect(result).toBe(4);
  });
});
