//on appellera cette classe pour lancer ou arreter des sections audio dans le jeu
class addAudio {

    constructor(fileName) {
        this.audio = new Audio("");
        this.fileName = fileName;
        this.audio = new Audio(this.fileName);
        this.play = false;
    }


    //cette fonction permet de lancer un audio s'il n'est pas lancé(pour ne pas faire des bruits bizarres)
    playAudio() {    
        this.play = false;
        if(!this.play){
            this.audio.currentTime  = 0;
            this.audio.play();
        }
    }
    pauseAudio() {
        this.audio.pause();
        this.play = false;
    }
}


//tous les audios du jeu
const addStartAudio = new addAudio("./assets/audio/marioAudio.mp3");
 const deathMarioAudio = new addAudio("./assets/audio/Death.mp3");
 const jumpMarioAudio = new addAudio("./assets/audio/jump.wav");
 const coinMarioAudio = new addAudio("./assets/audio/coin.wav");
 const pauseAudio = new addAudio("./assets/audio/Pause.wav");
 const bumpAudio = new addAudio("./assets/audio/bump.wav");
 const clearAudio = new addAudio("./assets/audio/clear.mp3");
 const stompAudio = new addAudio("./assets/audio/stomp.wav");
 const highjumpAudio = new addAudio("./assets/audio/highjump.wav");
 const extralifeAudio = new addAudio("./assets/audio/extralife.wav");


 //les audios qu'on utilise dans le jeu
module.exports = {
    addStartAudio: {
        play: () => addStartAudio.playAudio(),
        pause: () => addStartAudio.pauseAudio(),
       
    },
     deathMarioAudio: {
         play: () => deathMarioAudio.playAudio(),
         pause: () => deathMarioAudio.pauseAudio()
     },
     jumpMarioAudio: {
         play: () => jumpMarioAudio.playAudio(),
         pause: () => jumpMarioAudio.pauseAudio()
     },
     coinMarioAudio: {
         play: () => coinMarioAudio.playAudio(),
         pause: () => coinMarioAudio.pauseAudio()
     },
     pauseAudio: {
         play: () => pauseAudio.playAudio(),
         pause: () => pauseAudio.pauseAudio()
     },
     bumpAudio: {
         play: () => bumpAudio.playAudio(),
         pause: () => bumpAudio.pauseAudio()
     },
     clearAudio: {
         play: () => clearAudio.playAudio(),
         pause: () => clearAudio.pauseAudio()
     },
     stompAudio: {
         play: () => stompAudio.playAudio(),
         pause: () => stompAudio.pauseAudio()
     },
     highjumpAudio: {
         play: () => highjumpAudio.playAudio(),
         pause: () => highjumpAudio.pauseAudio()
     },
     extralifeAudio: {
         play: () => extralifeAudio.playAudio(),
         pause: () => extralifeAudio.pauseAudio()
     }
}