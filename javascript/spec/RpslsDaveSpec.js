describe("RpslsDave", function() {
  var player1, player2, game;

  beforeEach(function() {

    player1 = new Player('Dave1');
    player2 = new Player('Dave2');
    game = new Game(player1, player2);

  });

  describe('winning and losing', function() {
    
    describe('rock', function() {
      it('should beat scissors', function() {
        player1.picks('rock');
        player2.picks('scissors');
        expect(game.winner()).toBe(player1);
      });

      it('should lose to paper', function() {
        player1.picks('rock');
        player2.picks('paper');
        expect(game.winner()).toBe(player2);
      });

      it('should beat lizard', function() {
        player1.picks('rock');
        player2.picks('lizard');
        expect(game.winner()).toBe(player1);
      });

      it('should lose to Spock', function() {
        player1.picks('rock');
        player2.picks('spock');
        expect(game.winner()).toBe(player2);
      });
      
    });

    describe('paper', function() {
      it('should beat rock', function(){
        player1.picks('paper');
        player2.picks('rock');
        expect(game.winner()).toBe(player1)
      });

      it('should beat spock', function(){
        player1.picks('paper');
        player2.picks('spock');
        expect(game.winner()).toBe(player1)
      });

      it('should lose to scissors', function() {
        player1.picks('paper');
        player2.picks('scissors');
        expect(game.winner()).toBe(player2);
      });

      it('should lose to lizard', function() {
        player1.picks('paper');
        player2.picks('lizard');
        expect(game.winner()).toBe(player2);
      });

    });

    describe('scissors', function() {
      it('should beat lizard', function(){
        player1.picks('scissors');
        player2.picks('lizard');
        expect(game.winner()).toBe(player1)
      });

      it('should beat paper', function(){
        player1.picks('scissors');
        player2.picks('paper');
        expect(game.winner()).toBe(player1)
      });

      it('should lose to rock', function() {
        player1.picks('scissors');
        player2.picks('rock');
        expect(game.winner()).toBe(player2);
      });

      it('should lose to spock', function() {
        player1.picks('scissors');
        player2.picks('spock');
        expect(game.winner()).toBe(player2);
      });
  
    });

    describe('lizard', function() {
      it('should beat lizard', function(){
        player1.picks('lizard');
        player2.picks('spock');
        expect(game.winner()).toBe(player1)
      });

      it('should beat paper', function(){
        player1.picks('lizard');
        player2.picks('paper');
        expect(game.winner()).toBe(player1)
      });

      it('should lose to rock', function() {
        player1.picks('lizard');
        player2.picks('rock');
        expect(game.winner()).toBe(player2);
      });

      it('should lose to scissors', function() {
        player1.picks('lizard');
        player2.picks('scissors');
        expect(game.winner()).toBe(player2);
      });
  
    });

    describe('spock', function() {
      it('should beat lizard', function(){
        player1.picks('spock');
        player2.picks('scissors');
        expect(game.winner()).toBe(player1)
      });

      it('should beat paper', function(){
        player1.picks('spock');
        player2.picks('rock');
        expect(game.winner()).toBe(player1)
      });

      it('should lose to rock', function() {
        player1.picks('spock');
        player2.picks('paper');
        expect(game.winner()).toBe(player2);
      });

      it('should lose to spock', function() {
        player1.picks('spock');
        player2.picks('lizard');
        expect(game.winner()).toBe(player2);
      });
  
    });

  });

});
