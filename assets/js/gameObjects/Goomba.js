import increaseScore from "../config/increaseScore.js"
import DecreaseLives from "../config/DecreaseLives.js"
const audio =require("../config/addAudio").stompAudio
class Goomba {
    constructor(scene) {
        this.scene = scene;

        //ajout des goombas
        this.goombas = this.scene.physics.add.group();

        //utilisation du collider
        this.collider = this.scene.physics.add.collider(this.scene.player.sprite, this.goombas, this.gameOver, null, this);
        

        //appel du calque goombas à partir de tiled
        const goombaObjects = this.scene.map.getObjectLayer('goombas').objects;
    
        for (const goomba of goombaObjects) {
            this.goombas.create(goomba.x, goomba.y - goomba.height, 'coin-sprite')
                 .setScale(1.2)
                .setOrigin(0)
                .setDepth(-1);
        }
        
        //spawn des goombas(ils commencent par le déplacement à droite)
        for (const goomba of this.goombas.children.entries) {
            goomba.direction = 'RIGHT';
            goomba.isDed = false;//isDed sera true si le goomba est mort
        }
        //ajout du collision des goomba avec platform
        this.scene.physics.add.collider(this.goombas, this.scene.platform);
    }

    //cette fonction verifie si le joueur est touché en bas(le joueur a sauté sur le goomba) sinon il meurt
    gameOver() {

        //si le joueur a touché le goombas en bas le goomba meurt
        if (this.scene.player.sprite.body.touching.down) {
            this.die();
            return;
        }
        
        //le joueur est mort

        this.scene.player.dead();


        //on desactive les controlles
        this.scene.input.keyboard.shutdown();
        

        //on désactive toutes les collisions
         this.scene.physics.world.removeCollider(this.scene.player.collider);
         this.scene.physics.world.removeCollider(this.collider);


        //décrementation de vies
         DecreaseLives(1)
         setTimeout(() => {
             this.scene.scene.start('GameOver');
         }, 800);
        
    }

    //cette fonction permet de verifier si un des goomba est touché dans sa téte et active l'animation de mort et le faire disparaitre
    die() {

        //parcour de tous les goombas
        for (const goomba of this.goombas.children.entries) {

            //le goombas est touché en haut
            if (goomba.body.touching.up) {

                //il meurt
                goomba.isDed = true;

                //audio du mort de goomba
                audio.play()

                //l'animation de mort
                //(à la creation de cette animation on a ajouté "hideoncomplete" pour que le goomba disparait dès qu'il finit l'animation)
                 goomba.play('goombaDie', true);

                 //on l'enlève du jeu
                goomba.on('animationcomplete', () => goomba.destroy());

                //incrémentation du score
                 increaseScore(200);

                 //si le joueur saute sur un goomba il sautera plus haut que d'habitude
                this.scene.player.sprite.setVelocity(0, -470);
                 this.scene.player.sprite.play('jump');
            };
        }
    }
    update() {
        for (const goomba of this.goombas.children.entries) {
            if (goomba.body.blocked.right) {
                goomba.direction = 'LEFT';
            }
    
            if (goomba.body.blocked.left) {
                goomba.direction = 'RIGHT';
            }
    
            if (goomba.direction === 'RIGHT') {
                goomba.setVelocityX(100);
            } else {
                goomba.setVelocityX(-100);
            }
    
            !goomba.isDed && goomba.play('goombaRun', true);
        }
    }
}

export default Goomba;





