//Spaceship prefab
class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this); // add object to existing scene, displayList, updateList
        this.points = pointValue;
    }

    update(y) {
        // move spaceship left
        this.x -= game.settings.spaceshipSpeed;
        // wraparound screen bounds
        if(this.x <= 0 - this.width){
            this.x = game.config.width;
        }
    }

    reset(y){
        this.x = game.config.width;
        this.y = y;
    }
}