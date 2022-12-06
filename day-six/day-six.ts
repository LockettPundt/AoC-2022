export const daySix = (data: string, skip: number): number => {
  const index = data.split(``).findIndex((_, index, arr) => {
    const segment = arr.slice(index, index + skip);
    return segment.length === [...new Set(segment)].length;
  });
  return index + skip;
};
