//Ice prefab
class Ice extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, speed) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this); // add object to existing scene, displayList, updateList
    }

    update(speed) {
        // move Ice
        this.x -= speed;
        // wraparound screen bounds
        if(this.x <= 0 - this.width){
            this.x = game.config.width;
            this.y = Phaser.Math.Between(100, 360);
        }
    }

    reset(){
        this.x = game.config.width;
    }
}