function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
}

Game.prototype.winner = function() {
  if(this.player2.pick == 'scissors'){ return this.player1;
  }
  else { 
    return this.player2;
  }

};