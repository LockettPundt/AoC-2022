enum RPC {
  ROCK = `A`,
  PAPER = `B`,
  SCISSORS = `C`,
}
interface Rock {
  id: RPC.ROCK;
  score: number;
  loses: string;
  draws: string;
  X: Pick<Scissors, `id` | `score`>;
  Y: Pick<Rock, `id` | `score`>;
  Z: Pick<Paper, `id` | `score`>;
}

interface Paper {
  id: RPC.PAPER;
  score: number;
  loses: string;
  draws: string;
  X: Pick<Rock, `id` | `score`>;
  Y: Pick<Paper, `id` | `score`>;
  Z: Pick<Scissors, `id` | `score`>;
}

interface Scissors {
  id: RPC.SCISSORS;
  score: number;
  loses: string;
  draws: string;
  X: Pick<Paper, `id` | `score`>;
  Y: Pick<Scissors, `id` | `score`>;
  Z: Pick<Rock, `id` | `score`>;
}

type RPSOption = Rock | Paper | Scissors;
const rpsOptions: RPSOption[] = [
  {
    id: RPC.ROCK,
    score: 1,
    loses: `Y`,
    draws: `X`,
    X: {
      id: RPC.SCISSORS,
      score: 3,
    },
    Y: {
      id: RPC.ROCK,
      score: 4,
    },
    Z: {
      id: RPC.PAPER,
      score: 8,
    },
  },
  {
    id: RPC.PAPER,
    score: 2,
    loses: `Z`,
    draws: `Y`,
    X: {
      id: RPC.ROCK,
      score: 1,
    },
    Y: {
      id: RPC.PAPER,
      score: 5,
    },
    Z: {
      id: RPC.SCISSORS,
      score: 9,
    },
  },
  {
    id: RPC.SCISSORS,
    score: 3,
    loses: `X`,
    draws: `Z`,
    X: {
      id: RPC.PAPER,
      score: 2,
    },
    Y: {
      id: RPC.SCISSORS,
      score: 6,
    },
    Z: {
      id: RPC.ROCK,
      score: 7,
    },
  },
];

export const dayTwoPartOne = (data: string[]): number =>
  data.reduce((total, match) => {
    const [a, b] = match.split(` `);
    const opponent: RPSOption = rpsOptions.find(({ id }) => id === a);
    const hero: RPSOption = rpsOptions.find(({ draws }) => draws === b);
    total += hero.score;
    if (opponent.loses === b) {
      total += 6;
    } else if (opponent.draws === b) {
      total += 3;
    }

    return total;
  }, 0);

export const dayTwoPartTwo = (data: string[]): number =>
  data.reduce((total, match) => {
    const [a, b] = match.split(` `);
    const option: RPSOption = rpsOptions.find(({ id }) => id === a);
    return (total += option[b].score);
  }, 0);
