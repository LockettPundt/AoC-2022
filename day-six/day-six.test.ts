import { describe, expect, test } from 'bun:test';
import * as fs from 'fs';
import * as path from 'path';
import { daySixPartOne } from './day-six';

describe(`day five`, () => {
  const file = path.join(import.meta.dir, `./`, `test-data.txt`);
  const data = fs.readFileSync(file, 'utf-8');

  test(`part one...`, () => {
    const result = daySixPartOne(data);
    expect(result).toBe(6);
  });
  test(`part two...`, () => {});
});
