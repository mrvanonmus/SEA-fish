const audio = require("../config/addAudio").deathMarioAudio;
class GameOver extends Phaser.Scene {

    constructor () {
        super('GameOver');
    }

    create() {

      //fond d'ecran noir
        this.cameras.main.setBackgroundColor('#000');

        //le nombre de vie actuel
        const livesElement = document.getElementsByClassName('live-amount')[0];
        const currentLives = Number(livesElement.innerText);

        //quand le joueur a encore des vies
        if(currentLives>0){
       this.add.text(575,200,"You Are Dead",style)
       this.add.text(450,350,"Press SPACE to Restart",style)
        }
       this.inputs = this.input.keyboard.createCursorKeys();
    }
    update(){

      //on relance le jeu si on a des vies sinon le jeu est fini
        const scoreElement = document.getElementsByClassName('score-amount')[0];
        const currentScore = Number(scoreElement.innerText);
        const livesElement = document.getElementsByClassName('live-amount')[0];
        const currentLives = Number(livesElement.innerText);
         if(currentLives>0){
            if (this.inputs.space.isDown){
                     this.scene.start("Game")
                     audio.pause()
                    this.scene.stop()
            }
         }else{

                //si on n'a pas ajouté un Highscore on l'ajoute
               if(localStorage.getItem("HighScore")==null){
                  localStorage.setItem("HighScore",currentScore)

                  //si le score actuel est mieu que le highscore on le remplace
              }else if (Number(localStorage.getItem("HighScore"))<currentScore){
                localStorage.setItem("HighScore",currentScore)
              }

              //pour afficher "OUT OF LIVES"
               this.scene.start("nolives")
               this.scene.stop()
         }
    }
}
function loadFont(name, url) {
  const newFont = new FontFace(name, `url(${url})`);
  newFont
    .load()
    .then(function (loaded) {
      document.fonts.add(loaded);
    })
    .catch(function (error) {
      return error;
    });
}
loadFont("CustomFont","./assets/fonts/slkscreb.ttf")
      const style = {
        fontSize: "35px" ,
        fill: "white",
        fontFamily: "CustomFont",
        lineSpacing: 19,
        align: "left",
        boundsAlignH: "left",
        boundsAlignV: "top",
        wordWrap: true,
        wordWrapWidth: 300,
      };
export default GameOver;