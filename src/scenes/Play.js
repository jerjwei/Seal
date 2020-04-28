class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        // load images / title sprite
        // preload.image('fileName', 'location')
        this.load.image('ground', './assets/ground.png');
        this.load.image('background', './assets/background.png');
        this.load.image('block', './assests/spaceship.png');
        this.load.spritesheet('jump', './assets/jump.png', {frameWidth: 64, frameHeight: 48, startFrame: 0, endFrame: 12});
        this.load.spritesheet('seal', './assets/normal.png', {frameWidth: 64, frameHeight: 48, startFrame: 1, endFrame: 2});

        // preload.music
        this.load.audio('background', './assets/background.wav');
    }

    create() {
        // place tile sprite
        this.background = this.add.tileSprite(0, 0, 640, 480, 'background').setOrigin(0, 0);

        // define keyboard keys
        //keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        //keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        //keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    
        // background music
        //this.bgm = this.sound.add('background', {config});
        //this.bgm.play();
    
        // game over flag
        //this.gameOver = false;

         // add spaceship (x3)
         this.ship01 = new Spaceship(this, game.config.width+142, Phaser.Math.Between(400, 100), 'spaceship', 0, 30).setOrigin(0, 0);
         this.ship02 = new Spaceship(this, game.config.width+300, Phaser.Math.Between(400, 100), 'spaceship', 0, 20).setOrigin(0, 0);
         this.ship03 = new Spaceship(this, game.config.width, Phaser.Math.Between(400, 100), 'spaceship', 0, 10).setOrigin(0, 0);



        //define our objects
        this.ball = this.physics.add.sprite(this.sys.game.config.width / 2, 0, 'seal');
        //set the gravity
        this.ball.setGravityY(500);
        //place the ground
        //let groundX = this.sys.game.config.width / 2;
        //let groundY = this.sys.game.config.height * .95;
        this.ground = this.physics.add.sprite(this.sys.game.config.width / 2, this.sys.game.config.height*1.3, 'ground');
        //size the ground
        this.ground.displayWidth = this.sys.game.config.width * 1.1;
        //make the ground stay in place
        this.ground.setImmovable();
        //add the colliders
        this.physics.add.collider(this.ball, this.ground);

        this.input.on('pointerdown', this.jump, this);
    }

    jump() {
        this.ball.setVelocityY(-200);
    }

    

    update() {
        this.background.tilePositionX += 2;
        
        // 冰块代替物
        this.ship01.update(Phaser.Math.Between(400, 100));           // update spaceships (x3)
        this.ship02.update(Phaser.Math.Between(400, 100));
        this.ship03.update(Phaser.Math.Between(400, 100));
        if(this.ship03 < 0) {
            this.ship03.reset(Phaser.Math.Between(0, 500));
        }else if(this.ship02 < 0) {
            this.ship02.reset(Phaser.Math.Between(0, 500));
        }else if(this.ship01 < 0) {
            this.ship01.reset(Phaser.Math.Between(0, 500));
        } 
    }

}