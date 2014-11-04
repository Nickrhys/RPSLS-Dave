function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
}

Game.prototype.PAIRS = {
  rock:     {scissors: true, lizard: true},
  paper:    {rock: true, spock: true}, 
  scissors: {lizard: true, paper: true},
  lizard:   {spock: true, paper: true},
  spock:    {scissors: true, rock: true}
}

Game.prototype.winner = function() {
  if(this.PAIRS[this.player1.pick][this.player2.pick]){ 
    return this.player1;
  }
  else { 
    return this.player2;
  }
};