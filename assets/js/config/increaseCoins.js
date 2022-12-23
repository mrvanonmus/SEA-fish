import increaseScore from "./increaseScore.js"
import increaseLives from "./increaseLives.js"

/*** Appel de l'objet audio avec require pour avoir l'accès au méthode de l'objet***/
const Audio = require("./addAudio");

//cette fonction sert à incrémenter le nombre de pièces
export default coins => {

        /*** play audio coin ***/
        Audio.coinMarioAudio.play();
        
        //le nombre de pièce actuel
    const coinElement = document.getElementsByClassName('coin-amount')[0];
    const currentCoin = Number(coinElement.innerText);


    //si on collecte 100 pièce on incrémente le score par 1000 et on ajoute un "extra life"
    coinElement.innerText = currentCoin + coins;
    if (currentCoin>=99){
        Audio.extralifeAudio.play()
        coinElement.innerText = currentCoin -99
        increaseScore(1000)
        increaseLives(1)
    }
};