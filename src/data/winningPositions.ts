const diagonal1 = {
  name: 'Diagonal',
  positions: [4, 8, 12, 16, 20],
};

const diagonal2 = {
  name: 'Diagonal',
  positions: [0, 6, 12, 18, 24],
};

const fourCorners = {
  name: 'Four Corners',
  positions: [0, 4, 12, 20, 24],
};

const horizontal1 = {
  name: 'Horizontal',
  positions: [0, 1, 2, 3, 4],
};

const horizontal2 = {
  name: 'Horizontal',
  positions: [5, 6, 7, 8, 9],
};

const horizontal3 = {
  name: 'Horizontal',
  positions: [10, 11, 12, 13, 14],
};

const horizontal4 = {
  name: 'Horizontal',
  positions: [15, 16, 17, 18, 19],
};

const horizontal5 = {
  name: 'Horizontal',
  positions: [20, 21, 22, 23, 24],
};

const vertical1 = {
  name: 'Vertical',
  positions: [0, 5, 10, 15, 20],
};

const vertical2 = {
  name: 'Vertical',
  positions: [1, 6, 11, 16, 21],
};

const vertical3 = {
  name: 'Vertical',
  positions: [2, 7, 12, 17, 22],
};

const vertical4 = {
  name: 'Vertical',
  positions: [3, 8, 13, 18, 23],
};

const vertical5 = {
  name: 'Vertical',
  positions: [4, 9, 14, 19, 24],
};

const smolCross = {
  name: 'Smol Cross',
  positions: [7, 11, 12, 13, 17],
};

export const winningPositions = [
  diagonal1,
  diagonal2,
  fourCorners,
  horizontal1,
  horizontal2,
  horizontal3,
  horizontal4,
  horizontal5,
  vertical1,
  vertical2,
  vertical3,
  vertical4,
  vertical5,
  smolCross,
];

export const winningPositionsWithNulls = winningPositions.map((gameType) => {
  const emptyArray = new Array(25);
  const filledArray = gameType.positions.map((num) => {
    emptyArray[num] = num;
    return emptyArray;
  });
  gameType.positions = filledArray[0];
  return gameType;
});
