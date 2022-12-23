import Player from "../gameObjects/player.js";
import Coin from "../gameObjects/Coin.js"
import Goomba from "../gameObjects/Goomba.js"
import Block from "../gameObjects/Blocks.js"
import Bounce from "../gameObjects/bouncy.js"
// import audio from "../config/addAudio.js"


/*** Appel de l'objet audio avec require pour avoir l'accès au méthode de l'objet***/
const addStartAudio = require("../config/addAudio").addStartAudio;

const pauseaudio = require("../config/addAudio").pauseAudio;
import generateAnimations from '../config/animations'
class Game extends Phaser.Scene {

    constructor () {
        super('Game');
        this.addStartAudio = addStartAudio;
    }
    //dans la fonction preload on charge tous les fichiers qu'on utilisera pour le jeu
    preload() {

        this.load.tilemapTiledJSON('map', './MAP_MARIO.json');//ca c'est le map dessiné en utilisant tiled


        this.load.image('tiles', './assets/img/map.png');//le sprite utilisé pour dessiner le map


        //le sprite de mario
        this.load.spritesheet("mario-sprite", "./assets/img/mario-sprite.png", {
            frameWidth: 34,
            frameHeight: 39,
          });
          this.load.on('complete', () => {
            generateAnimations(this);
        });


        //le sprite des pièces
        this.load.spritesheet("coin-sprite", "./assets/img/coins.png", {
            frameWidth: 16,
            frameHeight: 16,
          });


          //le sprite des briques
        this.load.spritesheet("block-sprite", "./assets/img/blocks.png", {
            frameWidth: 16,
            frameHeight: 16,
          });


          //le sprite des briques mortes
        this.load.spritesheet("dead-block-sprite", "./assets/img/deadblock.png", {
            frameWidth: 16,
            frameHeight: 16,
          });


          //le sprite de trampoline
        this.load.spritesheet("bouncy-platform", "./assets/img/bounce.png", {
            frameWidth: 16,
            frameHeight: 16,
          });
    }

    create() {
      // /*** Remise à 0 du audio avant de le faire activer***/
      //  this.audio.audio.currentTime = 0;
      //  this.audio.audio.play();

             /*** play audio background ***/
             this.addStartAudio.play();


       //Pour créer un nouveau tilemap dans Phaser, on veut appeler this.make.tilemap 
       //avec une propriété clé passée en paramètre
      //La clé ici fait référence à la clé définie dans l'appel tilemapTiledJSON 
      //à l'intérieur de la méthode de préchargement
        this.map = this.make.tilemap({ key: 'map' });


//Pour qu'il utilise l'image tiles.png, on doit appeler addTilesetImage sur le tilemap. Pour le premier paramètre,
//on souhaite utiliser le nom du jeu de mosaïques qu'on a défini dans Tiled. 
//Pour le deuxième paramètre,
//on souhaite utiliser la clé de l'image chargée à partir de la méthode de préchargement.
        this.tileset = this.map.addTilesetImage('map-tileset', 'tiles');



        //dessin des calques


//         La fonction createStaticLayer attend ces quatre paramètres:

// clé qu'on a définie dans Mosaïque comme nom du calque
// un jeu de mosaïques créé avec addTilesetImage
// coordonnées x et y pour placer le calque. 0,0 signifie le coin supérieur gauche du canevas
        this.platform = this.map.createStaticLayer('platform', this.tileset, 0, 0);
        this.player=this.map.createStaticLayer('background', this.tileset, 0, 0);
        this.platform.setCollisionByExclusion(-1, true);//Pour activer également la collision pour la plate-forme
        this.player=new Player(this, 25, 325);//ajouter le joueur
        this.goombas = new Goomba(this);//ajouter les ennemies
        this.blocks = new Block(this);//ajouter les briques
        this.coins = new Coin(this);//ajouter les pièces
        this.bounces = new Bounce(this);//ajouter la trampoline
         this.inputs = this.input.keyboard.createCursorKeys();//ca c'est pour les controlles
         this.coins.update();//pour faire l'animation des pièces et disparaitre si on les collecte
    }
    
    update() {
      //on appelle la fonction update du class PLAYER pour gérer les déplacement du joueur
         this.player.update(this.inputs);

         //on appelle la fonction update du class Goomba pour gérer les déplacement du Goombas
          this.goombas.update();

          //si on appuie sur shift on appelle la scene Pause qui sert à afficher "PAUSE" 
          //et mettre en pause la scène Game
           if(this.inputs.shift.isDown){
             pauseaudio.play()
             this.scene.launch('PauseGame')
             this.scene.pause();
           }
    }
}

export default Game;