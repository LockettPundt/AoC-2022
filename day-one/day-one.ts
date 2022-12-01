export const dayOnePartOne = (data: string[]): number => {
  return Math.max(
    ...data.reduce(
      (elfCalorieTotals: number[], x: string) => [
        ...elfCalorieTotals,
        x
          .split(/\n/g)
          .reduce(
            (total: number, calories: string) => (total += Number(calories)),
            0
          ),
      ],
      []
    )
  );
};

export const dayOnePartTwo = (data: string[]): number => {
  const sortedTotals = data
    .reduce(
      (elfCalorieTotals: number[], x: string) => [
        ...elfCalorieTotals,
        x
          .split(/\n/g)
          .reduce(
            (total: number, calories: string) => (total += Number(calories)),
            0
          ),
      ],
      []
    )
    .sort((a, b) => b - a);

  return sortedTotals
    .slice(0, 3)
    .reduce((total, current) => (total += current));
};
