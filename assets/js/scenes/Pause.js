const pauseaudio = require("../config/addAudio").pauseAudio;
// const addStartAudio = require("../config/addAudio").addStartAudio;
class PAUSE extends Phaser.Scene {
constructor(){
    super("PauseGame")
    
}
create(){

  //le texte "PAUSE"
    this.add.text(575,200,"PAUSE",style)
    this.inputs = this.input.keyboard.createCursorKeys();
}
   update(){

    //si on appuie sur shift on quitte cette scene pour enlever le texte et on resume le jeu
      if(this.inputs.shift.isDown){
        pauseaudio.play()
          this.scene.resume('Game');
          this.scene.stop();
      }

  }
}

//cette fonction sert à charger un font css dans phaser3
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

//chargement du font
loadFont("CustomFont","./assets/fonts/slkscreb.ttf")

//style du texte
      const style = {
        fontSize: "35px" ,
        fill: "black",
        fontFamily: "CustomFont",
        lineSpacing: 19,
        align: "left",
        boundsAlignH: "left",
        boundsAlignV: "top",
        wordWrap: true,
        wordWrapWidth: 300,
      };
 

 export default PAUSE;