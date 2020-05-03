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
        // count 
        this.count = 1;

        // ice speed
        this.speed = 1;

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
        this.ice01 = new Ice(this, game.config.width, 330, 'ice', 0, 30).setOrigin(0, 0);
        this.ice02 = new Ice(this, game.config.width+160, 150, 'ice', 0, 20).setOrigin(0, 0);
        this.ice03 = new Ice(this, game.config.width+320, 290, 'ice', 0, 30).setOrigin(0, 0);
        this.ice04 = new Ice(this, game.config.width+480, 130, 'ice', 0, 30).setOrigin(0, 0);        

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
        // this.input.on('pointerdown', this.jump, this);

        // jump method
        this.jumpTime = 0;

        // score
        this.playerScore = 0;

        // score display
        let scoreConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 200
        }
        this.scoreLeft = this.add.text(69, 54, this.p1Score, scoreConfig);
    }

    jump() {
        this.seal.setVelocityY(-200);
        this.jumpTime += 1;
    }

    

    update() {
        // jump methods
        if( this.jumpTime<1 && Phaser.Input.Keyboard.JustDown(keyUP) ){
            this.jump();
        }
        if( this.seal.body.touching.down ){
            this.jumpTime = 0;
        }

        // speed up method
        this.count += 1;
        if( this.count%17==1 ) {
            this.speed *= 1.01;
        }
        this.background.tilePositionX += this.speed;
        
        // 冰块代替物
        this.ice01.update(this.speed);           // update ice
        this.ice02.update(this.speed);
        this.ice03.update(this.speed);
        this.ice04.update(this.speed);
        if(this.ice03 < 0) {
            this.ice03.reset();
        }else if(this.ice02 < 0) {
            this.ice02.reset();
        }else if(this.ice01 < 0) {
            this.ice01.reset();
        } else if(this.ice04 < 0) {
            this.ice04.reset();
        }
    }
}