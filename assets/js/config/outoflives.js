class NOLIVES extends Phaser.Scene {

    constructor () {
        super('nolives');
    }
    create() {
      //avoir le fond d'écran noir
        this.cameras.main.setBackgroundColor('#000');
      //ajout des textes
       this.add.text(575,200,"OUT OF LIVES",style)
       this.add.text(450,350,"Press SPACE to Continue",style)
       this.inputs = this.input.keyboard.createCursorKeys();
    }

    //la fonction update sert à ajouter le meilleur score dans le local storage
    update(){
        const scoreElement = document.getElementsByClassName('score-amount')[0];
        const currentScore = Number(scoreElement.innerText);

            if (this.inputs.space.isDown){
                    this.scene.start("Highscore")
                    this.scene.stop()
            }
               if(localStorage.getItem("HighScore")==null){
                  localStorage.setItem("HighScore",currentScore)
              }else if (Number(localStorage.getItem("HighScore"))<currentScore){
                localStorage.setItem("HighScore",currentScore)
              }
  
}
}


//loadfont sert à charger des fonts dans phaser3
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

//style du texte
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
export default NOLIVES;