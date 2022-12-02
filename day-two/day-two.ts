enum RPC {
  ROCK = `A`,
  PAPER = `B`,
  SCISSORS = `C`,
}

interface RPSOption {
  score: number;
  beats: RPC;
  draws: RPC;
}

const rpsOptions: Record<string, RPSOption> = {
  X: {
    score: 1,
    beats: RPC.SCISSORS,
    draws: RPC.ROCK,
  },
  Y: {
    score: 2,
    beats: RPC.ROCK,
    draws: RPC.PAPER,
  },
  Z: {
    score: 3,
    beats: RPC.PAPER,
    draws: RPC.SCISSORS,
  },
};

export const dayTwoPartOne = (data: string[]): number =>
  data.reduce((total, match) => {
    const [a, b] = match.split(` `);
    const option: RPSOption = rpsOptions[b];
    total += option.score;

    if (option.draws === a) {
      total += 3;
    } else if (option.beats === a) {
      total += 6;
    }
    return total;
  }, 0);
