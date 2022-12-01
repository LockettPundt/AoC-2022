import { splitByNewLine, splitByRegex } from '~/utils/split-by-new-line';
import { describe, expect, test } from 'bun:test';
import { dayOnePartOne, dayOnePartTwo } from './day-one';

describe(`day one tests`, () => {
  const data = splitByRegex(
    `test-data.txt`,
    import.meta.dir,
    new RegExp(/\n\n/, 'g')
  );

  test(`part one...`, () => {
    const result = dayOnePartOne(data);
    expect(result).toBe(24000);
  });

  test(`part two...`, () => {
    const result = dayOnePartTwo(data);
    expect(result).toBe(45000);
  });
});
