const randomDamage = () => Math.floor(Math.random() * 10 + 1);
// const chooseOption = (opt1, opt2) => const randNum Math.floor((Math.random() * 1) + 0); const randNum = 0 ? opt1 : opt2; COME BACK TO THIS!!!
const attackPlayer = function(health) {
  return health - randomDamage;
};
const logHealth = (player, health) =>
  console.log(`${player} health: ${health}`);
const logDeath = (winner, loser) => console.log(`${winner} defeated ${loser}`);
const isDead = health => {
  if (health <= 0) {
    return true;
  } else {
    return false;
  }
};
function fight() {
  player1: Hillary;
  player2: Connor;
  player1Health: 100;
  player2Health: 100;
  while (true) {}
}
