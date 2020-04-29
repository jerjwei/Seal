class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        // load images / title sprite
        // preload.image('fileName', 'location')
        this.load.image('ground', './assets/ground.png');
        this.load.image('background', './assets/background.png');
        this.load.image('ice', './assets/ice.png');
        this.load.spritesheet('jump', './assets/jump.png', {frameWidth: 64, frameHeight: 48, startFrame: 0, endFrame: 12});
        this.load.spritesheet('seal', './assets/normal.png', {frameWidth: 64, frameHeight: 48, startFrame: 1, endFrame: 2});

        // preload.music
        this.load.audio('background', './assets/background.wav');
    }

    create() {
        // place tile sprite
        this.background = this.add.tileSprite(0, 0, 640, 480, 'background').setOrigin(0, 0);

        // define keyboard keys
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    
        // background music
        // this.bgm = this.sound.add('background', {config});
        // this.bgm.play();
    
        // game over flag
        // this.gameOver = false;


        // add spaceship (x3)
        this.ship01 = new Spaceship(this, game.config.width+142, 200, 'ice', 0, 30).setOrigin(0, 0);
        this.ship02 = new Spaceship(this, game.config.width+300, 150, 'ice', 0, 20).setOrigin(0, 0);
        this.ship03 = new Spaceship(this, game.config.width+240, 200, 'ice', 0, 30).setOrigin(0, 0);
        this.ship04 = new Spaceship(this, game.config.width+80, 200, 'ice', 0, 30).setOrigin(0, 0);
        this.ship05 = new Spaceship(this, game.config.width, 350, 'ice', 0, 10).setOrigin(0, 0);

        // define our objects
        this.seal = this.physics.add.sprite(this.sys.game.config.width / 2, 0, 'seal');
        //set the gravity
        this.seal.setGravityY(500);
        // place the ground
        this.ground = this.physics.add.sprite(this.sys.game.config.width / 2, this.sys.game.config.height*1.3, 'ground');
        // size the ground
        this.ground.displayWidth = this.sys.game.config.width * 1.1;
        // make the ground stay in place
        this.ground.setImmovable();
        // add the colliders
        this.physics.add.collider(this.seal, this.ground);
        // jump when pointerdown
        this.input.on(Phaser.Input.Keyboard.JustDown(keyLEFT), this.jump, this);
    }

    jump() {
        this.seal.setVelocityY(-200);
    }

    

    update() {
        this.background.tilePositionX += 1.5;
        
        // 冰块代替物
        this.ship01.update();           // update spaceships
        this.ship02.update();
        this.ship03.update();
        this.ship04.update();
        this.ship05.update();
        if(this.ship03 < 0) {
            this.ship03.reset(a);
        }else if(this.ship02 < 0) {
            this.ship02.reset(a);
        }else if(this.ship01 < 0) {
            this.ship01.reset(a);
        } else if(this.ship04 < 0) {
            this.ship04.reset(a);
        } else if(this.ship05 < 0) {
            this.ship05.reset(a);
        }
    }

}