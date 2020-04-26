class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        // load images / title sprite
        // preload.image('fileName', 'location')
        this.load.image('rocket', './assets/rocket.png');
        this.load.image('spaceship', './assets/spaceship.png');
        this.load.image('starfield', './assets/starfield.png');
        // preload.music
        this.load.audio('background', './assets/background.wav');
    }

    create() {
        // place tile sprite
        this.starfield = this.add.tileSprite(0, 0, 640, 480, 'starfield').setOrigin(0, 0);

        // define keyboard keys
        //keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        //keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        //keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    
        // background music
        //this.bgm = this.sound.add('background', {config});
        //this.bgm.play();
    
        // game over flag
        //this.gameOver = false;



        //define our objects
        this.ball = this.physics.add.sprite(this.sys.game.config.width / 2, 0, 'rocket');
        //set the gravity
        this.ball.setGravityY(100);
        //place the ground
        //let groundX = this.sys.game.config.width / 2;
        //let groundY = this.sys.game.config.height * .95;
        let ground = this.physics.add.sprite(this.sys.game.config.width / 2, this.sys.game.config.height * .95, 'spaceship');
        //size the ground
        ground.displayWidth = this.sys.game.config.width * 1.1;
        //make the ground stay in place
        ground.setImmovable();
        //add the colliders
        this.physics.add.collider(this.ball, ground);

        this.input.on('pointerdown', this.jump, this);
    }

    jump() {
        this.ball.setVelocityY(-100);
    }

    

    update() {
        this.starfield.tilePositionX -= 2;

        
    }

}