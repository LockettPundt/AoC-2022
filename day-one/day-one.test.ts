import { splitByNewLine, splitByRegex } from '~/utils/split-by-new-line';
import { describe, expect, test } from 'bun:test';
import { dayOnePartOne } from './day-one';

describe(`day one tests`, () => {
  test(`part one...`, () => {
    const data = splitByRegex(
      `test-data.txt`,
      import.meta.dir,
      new RegExp(/\n\n/, 'g')
    );

    const result = dayOnePartOne(data);
    expect(result).toBe(24000);
  });
});
