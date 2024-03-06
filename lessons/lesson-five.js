// template literals

const playerOne = "Sofia";
const playerTwo = "Noor";
const playingGame = false;

const game = `${ playerOne } and ${ playerTwo } are playing a game`;
console.log(game);

const activity = `${ playerOne } is ${ playingGame ? 'busy' : 'idle' }`;

console.log(activity);