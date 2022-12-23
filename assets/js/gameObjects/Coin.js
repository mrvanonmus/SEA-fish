import increaseScore from "../config/increaseScore.js"
import increaseCoins from "../config/increaseCoins.js"
class Coin {
    constructor(scene) {
        this.scene = scene;

        this.coins = this.scene.physics.add.group({
            immovable: true, 
            allowGravity: false
        });

        //on mets les pièces à partir du calque d'objet qu'on a crée
        const coinObjects = this.scene.map.getObjectLayer('coins').objects;
        

        // on parcours l'objet et on prend les coordonnées xy de chaque pièce qu'on a mis et on la crèe
        for (const coin of coinObjects) {
            this.coins.create(coin.x, coin.y-16, 'coin-sprite')
                .setOrigin(0)
                .setDepth(-1);
        }


    }


    collect(coin) {

        //on fait l'animation tweens(animation predefini et c'est la disparition du pièces) 
        this.scene.tweens.add({
            targets: coin,
            ease: 'Power1',
            scaleX: 0,
            scaleY: 0,
            duration: 200,//la periode dans laqulle l'animation sera finie
            onComplete: () => coin.destroy()//on appelle destroy pour que les pièces disparaient
        });
        
        increaseScore(10);
        increaseCoins(1);
    
        coin.collider.destroy();
    }
    update() {

        for (const coin of this.coins.children.entries) {
            coin.play('spin', true);
        }

        //ajout de collision des pièces
        for (const coin of this.coins.children.entries) {

            
            coin.collider = this.scene.physics.add.overlap(coin, this.scene.player.sprite, this.collect, null, this);
        }

    }

}

export default Coin;
