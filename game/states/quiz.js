'use strict';

function Quiz() {
}
Quiz.prototype = {
  preload: function() {
    // Override this method to add some load operations. 
    // If you need to use the loader, you may need to use them here.
  },
  create: function() {
    // This method is called after the game engine successfully switches states. 
    // Feel free to add any setup code here (do not load anything here, override preload() instead).
    this.titleText = this.game.add.text(this.game.world.centerX, 200, 'Vastaa tehtävään:',  { font: '32px Arial', fill: '#000', align: 'center'});
    this.titleText.anchor.setTo(0.5, 0.5);
    this.answerButtons = this.game.add.group();

    for (var i = 0; i < 4; i++) {
      var button = this.game.add.button(this.game.world.centerX - 400, this.game.world.centerY - 130 * i, 'answer-buttons', this.actionOnClick, this, 2 + i, 0 + i);
      this.answerButtons.add(button);
    }
  },
  update: function() {
    // state update code
  },
  paused: function() {
    // This method will be called when game paused.
  },
  render: function() {
    // Put render operations here.
  },
  shutdown: function() {
    // This method will be called when the state is shut down 
    // (i.e. you switch to another state from this one).
  },
  actionOnClick: function() {
    console.log('Changing state to play');
    this.game.state.start('play');
  }
};
module.exports = Quiz;