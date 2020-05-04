// game configuration object
// Group member: Jia Wei, Rui Chen, Sunny Yan, Zihao Liu
// Slidding Seal
// 2020/05/03
// Our design is creative because in our game world the seal can do single or double-jump up to players' choice. 
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
    spaceshipSpeed: 1,
    gameTimer: 60000,    
}

// reserve keyboard vars
let keyUP, keyLEFT;
