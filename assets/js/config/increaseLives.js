//cette fonction sert à incrémenter le nombre de vie du joueur
export default Lives => {

    //le nombre de vies actuel
    const livesElement = document.getElementsByClassName('live-amount')[0];
    const currentLives = Number(livesElement.innerText);


    //incrémentation de vies
    livesElement.innerText = currentLives + Lives;
};