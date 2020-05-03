// Seal prefab
class Seal extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this); // add object to existing scene, displayList, updateList
        this.isFiring = false;    // track Seal's firing status

        this.sfxSeal = scene.sound.add('sfx_Rocket'); // add Seal sfx
    }

    update() {
        // left/right movement
        if(!this.isFiring) {
            if(keyLEFT.isDown && this.x >= 47){
                this.x -= 2;
            }else if(keyRIGHT.isDown && this.x <= 578){
                this.x += 2;
            }
        }
    }
}