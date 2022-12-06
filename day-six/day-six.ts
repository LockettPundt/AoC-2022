export const daySixPartOne = (data: string): number => {
  const index = data.split(``).findIndex((_, index, arr) => {
    const nextFour = arr.slice(index, index + 4);
    return nextFour.length === [...new Set(nextFour)].length;
  });
  return index + 4;
};

export const daySixPartTwo = (data: string): number => {
  const index = data.split(``).findIndex((_, index, arr) => {
    const nextFourteen = arr.slice(index, index + 14);
    return nextFourteen.length === [...new Set(nextFourteen)].length;
  });
  return index + 14;
};
