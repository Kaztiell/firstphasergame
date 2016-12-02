// var game = new Phaser.Game(700, 700, Phaser.AUTO, '');
var game_state = {};
game_state.story = function() {};
game_state.story.prototype = {
    
    preload: function (){
        game.load.image('start', 'assets/storyintro.png');
        game.load.image('ship', 'assets/ship.png')
    },
    create: function (){
        game.add.sprite(0,0,'start')
        game.add.sprite(200,0,'ship')
        
        
    },
    update: function (){
    
    }
}

game.state.add('story', game_state.story);
game.state.start('story');