import { splitByNewLine, splitByRegex } from '~/utils/split-by-new-line';
import { describe, expect, test } from 'bun:test';
import { dayFivePartOne, dayFivePartTwo } from './day-five';

describe(`day five`, () => {
  const data = splitByRegex(
    `test-data.txt`,
    import.meta.dir,
    new RegExp(/\n\n/g)
  );
  test(`part one...`, () => {
    const result = dayFivePartOne(data);
    expect(result).toBe(`CMZ`);
  });
  test(`part two...`, () => {
    const result = dayFivePartTwo(data);
    expect(result).toBe(`MCD`);
  });
});
