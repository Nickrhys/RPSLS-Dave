describe("RpslsDave", function() {
  var player1, player2, game;

  beforeEach(function() {

    player1 = new Player('Dave1');
    player2 = new Player('Dave2');
    game = new Game(player1, player2);

  });

  describe('winning and losing', function() {
    
    describe('rock', function() {
      it('should beat scissors', function(){
        player1.picks('rock');
        player2.picks('scissors');
        expect(game.winner()).toBe(player1);
      });

    });

  });

});
