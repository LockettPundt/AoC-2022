const generateFullRange = (range: number[]): number[] =>
  Array.from({ length: range[1] - range[0] + 1 }).map((_, index) => index + range[0]);

const parseRanges = (ranges: string): number[][] =>
  ranges
    .split(`,`)
    .map((range) => range.split(`-`).map(Number))
    .map(generateFullRange);

const hasOverlapInRange = (ranges: string, fullyContained: boolean): boolean => {
  const [rangeOne, rangeTwo] = parseRanges(ranges);
  if (fullyContained) {
    return (
      rangeOne.every((num) => rangeTwo.includes(num)) ||
      rangeTwo.every((num) => rangeOne.includes(num))
    );
  }
  return (
    rangeOne.some((num) => rangeTwo.includes(num)) || rangeTwo.some((num) => rangeOne.includes(num))
  );
};

export const dayFourPartOne = (data: string[]): number =>
  data.reduce((total, ranges) => {
    if (hasOverlapInRange(ranges, true)) {
      total += 1;
    }
    return total;
  }, 0);

export const dayFourPartTwo = (data: string[]): number =>
  data.reduce((total, ranges) => {
    if (hasOverlapInRange(ranges, false)) {
      total += 1;
    }
    return total;
  }, 0);
