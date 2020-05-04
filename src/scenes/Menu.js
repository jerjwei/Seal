class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        // load audio
        this.load.audio('sfx_select', './assets/blip_select12.wav');
        this.load.audio('sfx_explosion', './assets/explosion38.wav');
        this.load.audio('sfx_rocket', './assets/rocket_shot.wav');
    }

    create() {
        // menu display
        let menuConfig = {
            fontFamily: 'Bradley Hand',
            fontSize: '28px',
            color: '#3E5CA3',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        // display menu text
        let centerX = game.config.width/2;
        let centerY = game.config.height/2;
        let textSpacer = 64;

        this.add.text(centerX, centerY-textSpacer, 'Slidding Seal', menuConfig).setOrigin(0.5);
        this.add.text(centerX, centerY, 'Use ↑ to jump & avoid the ice!', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#FFFFFF';
        menuConfig.color = '#000';
        this.add.text(centerX, centerY+textSpacer, 'Press (left arrow) for to start', menuConfig).setOrigin(0.5);
        
        // launch the next scene
        // this.scene.start('playScene');

        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
        this.sound.play('sfx_select');
        this.scene.start("playScene");    
        }
    }   
}