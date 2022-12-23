class Bounce{
    constructor(scene){
        this.scene = scene;
        this.bounces = this.scene.physics.add.group({
            immovable: true,
            allowGravity: false
        });

        //récuperation du tiled
        const bounceObjects = this.scene.map.getObjectLayer('bounce').objects;


        //on utilise collider en appelant la fonction bounce (dès que le joueur collide avec la trampoline on appelle la fonction)
        this.collider = this.scene.physics.add.collider(this.scene.player.sprite, this.bounces, this.bounce, null, this);


        //ajout des trampolines
        for (const bouncy of bounceObjects) {
            this.bounces.create(bouncy.x, bouncy.y-16, 'bouncy-platform')
            // .setScale(1.2)
                .setOrigin(0)
                .setDepth(-1);
        }
    }

    //si le joueur en train de sauter sur la trampoline
    bounce(){

        //si le joueur est touché en bas
        if (this.scene.player.sprite.body.touching.down) {
            return this.fly();
        }
    }

    //fly permet de verifier si une des trampoline est touchée
    fly() {
        for (const bouncy of this.bounces.children.entries) {
            if (bouncy.body.touching.up) {
                return true
            };
        }
    }
}
export default Bounce