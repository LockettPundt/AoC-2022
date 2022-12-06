import { describe, expect, test } from 'bun:test';
import * as fs from 'fs';
import * as path from 'path';
import { daySix } from './day-six';

describe(`day five`, () => {
  const file = path.join(import.meta.dir, `./`, `test-data.txt`);
  const data = fs.readFileSync(file, 'utf-8');

  test(`part one...`, () => {
    const result = daySix(data, 4);
    expect(result).toBe(6);
  });
  test(`part two...`, () => {
    const result = daySix(data, 14);
    expect(result).toBe(23);
  });
});
