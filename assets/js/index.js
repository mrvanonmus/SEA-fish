import Phaser from 'Phaser'
import GameOver from "../js/config/GameOver.js"
import Game from "./scenes/Game.js";
import PAUSE from "./scenes/Pause.js"
import HIGHSCORE from "./scenes/Highscore.js"
import GameWon from "../js/config/Gamewon.js"
import NOLIVES from "../js/config/outoflives.js"
//les configs du jeu
const config = {
  width: 1200,
  height: 600,
  parent: "mario",//"mario" C'est l'identifiant du div que nous avons créé dans notre fichier index.html
   backgroundColor: "#FFFFAC",
  title: "Tilemap",
  //  url: 'webtips.dev',
  pixelArt: true,//on definit pixelArt sur true, sinon on obtiendra des sprites flous.
  physics: {
    default: "arcade",
    arcade: {
      gravity: {
        y: 1000,
      },
    },
  },
  scene: [Game,GameOver,PAUSE,HIGHSCORE,GameWon,NOLIVES],//les differents scenes qu'on va utiliser

};

new Phaser.Game(config);
