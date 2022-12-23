import DecreaseLives from "../config/DecreaseLives.js"


/*** Appel de l'objet audio avec require pour avoir l'accès au méthode de l'objeet***/
const audio = require("../config/addAudio");

class Player {

  //dans ce constructeur on prend une scene(dans laquelle on mettra le joueur et le xy du joueur)
  constructor(scene, x, y) {

    this.scene = scene;

    //la creation du joueur (setScale permet d'agrandir ou minimiser la taille du joueur)
    this.sprite = scene.physics.add.sprite(x, y, "mario-sprite").setScale(1.2);

    //taille du "hitbox"
    this.sprite.setSize(15, 30);

    //x et y du "hitbox"
    this.sprite.setOffset(10, 4);

    //l'ajout du collision avec les limites du canvas
    this.sprite.setCollideWorldBounds(true);

    //is Ded sera true si mario est mort
    this.sprite.isDed = false;

    //ajout du collision avec la calque "platform"
    this.collider = scene.physics.add.collider(this.sprite, scene.platform);

    //création du caméra
    const camera = scene.cameras.main;
      camera.setBounds(0, 0, scene.map.widthInPixels, scene.map.heightInPixels)

      //zoomer un peu sur mario
      camera.zoom=1.8

      //commencer à suivre mario
      camera.startFollow(this.sprite);
        camera.setDeadzone(scene.game.config.width / 4, scene.game.config.height)
  }


//refollowplayer permet de recentrer la camera sur mario à chaque fois il atteint les limites
  reFollowPlayer() {

    //Tout d'abord, cela réinitialisera la position x des limites du monde au fur et à mesure que le joueur se déplace. 
    //on peut également définir les limites pour qu'elles correspondent à la taille de la carte entière,
    //  une fois que le tilemap est prêt 
    // de cette façon, on n'a pas besoin de mettre à jour les limites pour chaque image.
    this.scene.physics.world.bounds.setPosition(this.scene.cameras.main.worldView.x, 0);

    
/*l'instruction if vérifie si Mario se tient au milieu de l'écran. 
S'il l'est et que la caméra ne le suit pas déjà, nous pouvons appeler à nouveau startFollow
  la caméra commence à le suivre*/

    if (this.sprite.body.position.x + this.sprite.body.width / 2 > this.scene.cameras.main.midPoint.x &&
        !this.scene.cameras.main._follow) {
        this.scene.cameras.main.startFollow(this.sprite);
    }
}


//la fonction permet de gérer les déplacements de Mario et s'il est hors limite ou gagant
  update(input) {
    // Mario se déplace à gauche
    if (input.left.isDown) {
      this.sprite.setVelocityX(-200);
    !this.sprite.isDed &&this.sprite.body.onFloor() && this.sprite.play("run-left", true);
      this.reFollowPlayer();


      // Mario se déplace à droite
    } else if (input.right.isDown) {
      this.sprite.setVelocityX(200);
      !this.sprite.isDed &&this.sprite.body.onFloor() && this.sprite.play("run-right", true);
      this.reFollowPlayer();
    } else {
      // Mario ne bouge pas
      this.sprite.setVelocityX(0);
      !this.sprite.isDed &&this.sprite.body.onFloor() && this.sprite.play("idle", true);
    }

    // Mario saute
    if (input.up.isDown && this.sprite.body.onFloor()) {

      audio.jumpMarioAudio.play();
      this.sprite.setVelocityY(-370);

      //sauter à gauche
      if (input.left.isDown) {
        this.sprite.play("jump-left", true);

        //sauter à droite
      } else {
        this.sprite.play("jump-right", true);
      }
    }
    
    //animation de saut si Mario saute sur la trampoline
     if(this.scene.bounces.bounce()){
       audio.highjumpAudio.play()
       this.sprite.play("jump")
       this.sprite.setVelocity(0,-650);
     }

    //hors des limites
    if ((this.sprite.y>460) &&(!this.sprite.isDed)){
       this.scene.scene.start('GameOver');
       DecreaseLives(1)
    }

    //jeu gagné
    if(this.sprite.x>6803){
      this.scene.scene.start("GameWon")
    }

  }


  //cette fonction permet de mettre Mario dans l'etat "mort"
  dead() {
    this.sprite.isDed = true;
    this.sprite.setVelocity(0, -350);
     this.sprite.play('die', true);
    this.sprite.setCollideWorldBounds(false);
}
}

export default Player;
