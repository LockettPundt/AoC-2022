const getStacks = (str: string): string[][] => {
  const [indexes, ...stacks] = str
    .split(`\n`)
    .map((x) => x.split(``))
    .reverse();
  const stackslength = Math.max(
    ...indexes.filter((x) => x.match(/[0-9]/g)).map(Number)
  );

  return stacks.reduce(
    (result: string[][], x) => {
      x.forEach((current, j) => {
        const isLetter = /[a-z]/gi.test(current);
        const stackIndex = Number(indexes[j]);
        if (isLetter && !Number.isNaN(stackIndex)) {
          result[stackIndex - 1].push(current);
        }
      }, []);

      return result;
    },
    [...Array.from({ length: stackslength }).map(() => [])]
  );
};

interface Instruction {
  amount: number;
  from: number;
  to: number;
}

const getInstructions = (str: string): Instruction[] =>
  str.split(`\n`).map((x) => {
    const [amount, from, to] = x.match(/[0-9]+/g);
    return {
      amount: Number(amount),
      from: Number(from) - 1,
      to: Number(to) - 1,
    };
  });

const updateStackWithInstructions = (
  stacks: string[][],
  instructions: Instruction[],
  newCraneModel: boolean
): string[][] => {
  let updatedStacks = [...stacks];
  instructions.forEach(({ amount, to, from }) => {
    const movingCrates = newCraneModel
      ? updatedStacks[from].slice(-amount)
      : updatedStacks[from].slice(-amount).reverse();
    updatedStacks[to].push(...movingCrates);
    updatedStacks[from] = updatedStacks[from].slice(0, -amount);
  });
  return updatedStacks;
};

export const dayFivePartOne = (data: string[]): string => {
  let stacks = updateStackWithInstructions(
    getStacks(data[0]),
    getInstructions(data[1]),
    false
  );
  return stacks.map((x) => x.pop()).join(``);
};

export const dayFivePartTwo = (data: string[]): string => {
  let stacks = updateStackWithInstructions(
    getStacks(data[0]),
    getInstructions(data[1]),
    true
  );
  return stacks.map((x) => x.pop()).join(``);
};
