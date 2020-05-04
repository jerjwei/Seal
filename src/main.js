// Date:          2020/05/03
// Group member:  Jia Wei, Rui Chen, Sunny Yan, Zihao Liu
// Game Name:     Slidding Seal
// Creating Tilt: 1. We looked beyond the class examples and learned how 
//                   to create infinite random ice cubes using phaser.math, 
//                   create animations, and find proper collision detection.
//                2. In our design, we have great visual style, harmonious background music, 
//                   and various sound effects.

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

// reserve keyboard vars
let keyUP, keyLEFT;
