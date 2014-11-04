function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
}

Game.prototype.PAIRS = {
  rock:     {scissors: 'crushes', lizard: 'crushes'},
  paper:    {rock: 'covers', spock: 'disproves'}, 
  scissors: {lizard: 'decapitate', paper: 'cut'},
  lizard:   {spock: 'poisons', paper: 'eats'},
  spock:    {scissors: 'smashes', rock: 'vaporizes'}
}

Game.prototype.winner = function() {
  if(this._isSamePick()) return null;

  if(this._victoryVerbFor(this.player1.pick, this.player2.pick)){ 
    return this.player1;
  }
  else { 
    return this.player2;
  }
}

Game.prototype.loser = function() {
  return (this.winner() === this.player1 ? this.player2 : this.player1);
}

Game.prototype.winningMessage = function() {
  var message;

  if(this.winner()) {
    message = [this.winner().pick, 
    this._victoryVerbFor(this.winner().pick, this.loser().pick),
    this.loser().pick].join(' ');
  } 
  else { 
    message = 'draw';
  }
  return message;
}

Game.prototype._victoryVerbFor = function(pick, opponentPick) {
  return this.PAIRS[pick][opponentPick];
}

Game.prototype._isSamePick = function() {
  return this.player1.pick === this.player2.pick;
}
