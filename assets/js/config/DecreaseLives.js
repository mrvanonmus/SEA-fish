//cette fonction permet de diminuer le nombre de vies du joueur 
//et prend le nombre de vies à enlever en paramètre 

/*** Appel de l'objet audio avec require pour avoir l'accès au méthode de l'objeet***/
const audio = require("../config/addAudio");

export default Lives => {
    /*** pause audio du background ***/
    audio.addStartAudio.pause();


    /*** play audio death ***/
    audio.deathMarioAudio.play();


    //le nombre de vies
    const livesElement = document.getElementsByClassName('live-amount')[0];
    const currentLives = Number(livesElement.innerText);

    
    //la decrementation du nombre de vies
    livesElement.innerText = currentLives - Lives;
};