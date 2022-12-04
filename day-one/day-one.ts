const getCalorieTotalsByElf = (data: string[]): number[] =>
  data.reduce(
    (elfCalorieTotals: number[], x: string) => [
      ...elfCalorieTotals,
      x.split(/\n/g).reduce((total: number, calories: string) => (total += Number(calories)), 0),
    ],
    []
  );

export const dayOnePartOne = (data: string[]): number => {
  return Math.max(...getCalorieTotalsByElf(data));
};

export const dayOnePartTwo = (data: string[]): number => {
  const sortedTotals = getCalorieTotalsByElf(data).sort((a, b) => b - a);

  return sortedTotals.slice(0, 3).reduce((total, current) => (total += current));
};
