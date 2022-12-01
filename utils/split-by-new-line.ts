import * as fs from 'fs';
import * as path from 'path';

export const splitByNewLine = (
  fileName: string,
  filePath: string
): string[] => {
  const file = path.join(filePath, `./`, fileName);
  if (!file) {
    throw new Error(`No file found.`);
  }
  const data = fs.readFileSync(file, 'utf-8');
  return data.split(/\n/g);
};
