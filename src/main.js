// game configuration object
let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: [ Menu, Play ]

}

// main game object
let game = new Phaser.Game(config);

// define game settings
game.settings = {
    spaceshipSpeed: 3,
    supershipSpeed: 5,
    gameTimer: 60000,    
}

// reserve keyboard vars
let keyF, keyLEFT, keyRIGHT;
// ss
