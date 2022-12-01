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
