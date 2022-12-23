export default scene => {


    // Mario-idle
    scene.anims.create({
        key: 'idle',
        frames: scene.anims.generateFrameNames('mario-sprite', {
            start: 1,
            end: 1,
        }),
        frameRate: 60,
        repeat: -1
    });
    // Mario-run
    scene.anims.create({
        key: 'run-right',
        frames: scene.anims.generateFrameNames('mario-sprite', {
            start: 24,
            end: 26,
        }),
        frameRate: 40,
        repeat: -1
    });
    scene.anims.create({
        key: 'run-left',
        frames: scene.anims.generateFrameNames('mario-sprite', {
            start: 12,
            end: 14,
        }),
        frameRate: 50,
        repeat: -1
    });
 //Mario-jump-right
     scene.anims.create({
         key: 'jump-right',
         frames: scene.anims.generateFrameNames('mario-sprite', {
             start: 27,
             end: 27,
         }),
         frameRate: 60,
         repeat: -1
     });
 //Mario-jump-left
     scene.anims.create({
         key: 'jump-left',
         frames: scene.anims.generateFrameNames('mario-sprite', {
             start: 15,
             end: 15,
         }),
         frameRate: 60,
         repeat: -1
     });
 //Mario-jump
     scene.anims.create({
         key: 'jump',
         frames: scene.anims.generateFrameNames('mario-sprite', {
             start: 4,
             end: 4,
         }),
         frameRate: 60,
         repeat: -1
     });
 //die
     scene.anims.create({
         key: 'die',
         frames: scene.anims.generateFrameNames('mario-sprite', {
             start: 6,
             end: 6,
         }),
         frameRate: 10,
         repeat: -1
     });


    // Goomba
    //Goombarun
    scene.anims.create({
        key: 'goombaRun',
        frames: scene.anims.generateFrameNames('coin-sprite', {
            start: 11,
            end: 12,
        }),
        frameRate: 10,
        repeat: -1
    });
//goomba die
scene.anims.create({
    key: 'goombaDie',
    frames: scene.anims.generateFrameNames('coin-sprite', {
        start: 10,
        end: 10,
    }),
    frameRate: 30,
    repeat: 1,
    hideOnComplete: true
});

     // Coin
     scene.anims.create({
        key: 'spin',
        frames: scene.anims.generateFrameNames('coin-sprite', {
            start: 6,
            end: 9,
        }),
        frameRate: 10,
        repeat: -1
    });

    //blocks
     scene.anims.create({
         key: 'dead-block',
         frames: scene.anims.generateFrameNames('dead-block-sprite', {
             start: 0,
             end: 0,
         }),
         frameRate: 60,
         repeat: 1
     });
    //bouncy-platforms
     scene.anims.create({
         key: 'bouncy',
         frames: scene.anims.generateFrameNames('bouncy-platform', {
             start: 0,
             end: 2,
         }),
         frameRate: 10,
         repeat: 1
     });
};