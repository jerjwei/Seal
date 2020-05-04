// game configuration object
// Group member: Jia Wei, Rui Chen, Sunny Yan, Zihao Liu
// Slidding Seal
// 2020/05/03
// creative tilt justification
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
