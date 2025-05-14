controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    idle = 0
    animation.runImageAnimation(
    mySprite,
    [img`
        . 7 . . . . . . . . . . 7 . . . 
        . 7 e . . . . . . . . e 7 . . . 
        . e 7 7 . . . . . . 7 7 e . . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
        . 7 1 8 1 7 7 7 7 1 8 1 7 . . . 
        . 7 1 8 1 7 7 7 7 1 8 1 7 . . . 
        . 7 1 8 1 7 7 7 7 1 8 1 7 . . . 
        . 7 1 8 1 7 7 7 7 1 8 1 7 . . . 
        . 7 1 8 1 7 7 f 7 1 8 1 7 . . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
        . . . . e e e e e e e e . . . . 
        . . . . 2 2 2 2 2 . e . . . . . 
        . . . . 2 2 2 2 2 . . . . . . . 
        . . . . 2 2 2 2 2 . . . . . . . 
        . . . . f f . f f . . . . . . . 
        . . . . . . . f f . . . . . . . 
        `,img`
        . 7 . . . . . . . . . . 7 . . . 
        . 7 e . . . . . . . . e 7 . . . 
        . e 7 7 . . . . . . 7 7 e . . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
        . 7 1 8 1 7 7 7 7 1 8 1 7 . . . 
        . 7 1 8 1 7 7 7 7 1 8 1 7 . . . 
        . 7 1 8 1 7 7 7 7 1 8 1 7 . . . 
        . 7 1 8 1 7 7 7 7 1 8 1 7 . . . 
        . 7 1 8 1 7 7 f 7 1 8 1 7 . . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
        . . . . e e e e e e . . . . . . 
        . . . . 2 2 2 2 2 e e . . . . . 
        . . . . 2 2 2 2 2 . . e . . . . 
        . . . . 2 2 2 2 2 . . . . . . . 
        . . . . f f . f f . . . . . . . 
        . . . . f f . . . . . . . . . . 
        `],
    500,
    true
    )
})
radio.onReceivedNumber(function (receivedNumber) {
    mySprite.sayText(receivedNumber, 1000, false)
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    idle = 1
    animation.runImageAnimation(
    mySprite,
    [img`
        . 7 . . . . . . . . . . 7 . . . 
        . 7 e . . . . . . . . e 7 . . . 
        . e 7 7 . . . . . . 7 7 e . . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
        . 7 1 1 1 7 7 7 7 1 1 1 7 . . . 
        . 7 1 8 8 7 7 7 7 1 8 8 7 . . . 
        . 7 1 8 8 7 7 7 7 1 8 8 7 . . . 
        . 7 1 8 8 7 7 7 7 1 8 8 7 . . . 
        . 7 1 1 1 7 7 f 7 1 1 1 7 . . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
        . . . . e e e e e e . . . . . . 
        . . . . 2 2 2 2 2 e e . . . . . 
        . . . . 2 2 2 2 2 . . e . . . . 
        . . . . 2 2 2 2 2 . . . . . . . 
        . . . . f f . f f . . . . . . . 
        . . . . f f . f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . 7 . . . . . . . . . . 7 . . . 
        . 7 e . . . . . . . . e 7 . . . 
        . e 7 7 . . . . . . 7 7 e . . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
        . 7 1 1 1 7 7 7 7 1 1 1 7 . . . 
        . 7 1 8 8 7 7 7 7 1 8 8 7 . . . 
        . 7 1 8 8 7 7 7 7 1 8 8 7 . . . 
        . 7 1 8 8 7 7 7 7 1 8 8 7 . . . 
        . 7 1 1 1 7 7 f 7 1 1 1 7 . . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
        . . . . 2 2 2 2 2 e e e . . . . 
        . . . . 2 2 2 2 2 . . . . . . . 
        . . . . 2 2 2 2 2 . . . . . . . 
        . . . . f f . f f . . . . . . . 
        . . . . f f . f f . . . . . . . 
        `,img`
        . 7 . . . . . . . . . . 7 . . . 
        . 7 e . . . . . . . . e 7 . . . 
        . e 7 7 . . . . . . 7 7 e . . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
        . 7 1 1 1 7 7 7 7 1 1 1 7 . . . 
        . 7 1 8 8 7 7 7 7 1 8 8 7 . . . 
        . 7 1 8 8 7 7 7 7 1 8 8 7 . . . 
        . 7 1 8 8 7 7 7 7 1 8 8 7 . . . 
        . 7 1 1 1 7 7 f 7 1 1 1 7 . . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
        . . . . e e e e e e . e . . . . 
        . . . . 2 2 2 2 2 e e . . . . . 
        . . . . 2 2 2 2 2 . . . . . . . 
        . . . . 2 2 2 2 2 . . . . . . . 
        . . . . f f . f f . . . . . . . 
        . . . . f f . f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . 7 . . . . . . . . . . 7 . . . 
        . 7 e . . . . . . . . e 7 . . . 
        . e 7 7 . . . . . . 7 7 e . . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
        . 7 1 1 1 7 7 7 7 1 1 1 7 . . . 
        . 7 1 8 8 7 7 7 7 1 8 8 7 . . . 
        . 7 1 8 8 7 7 7 7 1 8 8 7 . . . 
        . 7 1 8 8 7 7 7 7 1 8 8 7 . . . 
        . 7 1 1 1 7 7 f 7 1 1 1 7 . . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
        . . . . 2 2 2 2 2 e e e . . . . 
        . . . . 2 2 2 2 2 . . . e . . . 
        . . . . 2 2 2 2 2 . . e . . . . 
        . . . . f f . f f . . . . . . . 
        . . . . f f . f f . . . . . . . 
        `],
    500,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    idle = 0
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . 7 . . . . . . . . . . 7 . 
        . . . 7 e . . . . . . . . e 7 . 
        . . . e 7 7 . . . . . . 7 7 e . 
        . . . 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . . . 7 1 1 1 7 7 7 7 1 1 1 7 . 
        . . . 7 8 8 1 7 7 7 7 8 8 1 7 . 
        . . . 7 8 8 1 7 7 7 7 8 8 1 7 . 
        . . . 7 8 8 1 7 7 7 7 8 8 1 7 . 
        . . . 7 1 1 1 7 f 7 7 1 1 1 7 . 
        . . . 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . . . . e e e e e e e e . . . . 
        . . . . . e . 2 2 2 2 2 . . . . 
        . . . . . . . 2 2 2 2 2 . . . . 
        . . . . . . . 2 2 2 2 2 . . . . 
        . . . . . . . f f . f f . . . . 
        . . . . . . . f f . . . . . . . 
        `,img`
        . . . 7 . . . . . . . . . . 7 . 
        . . . 7 e . . . . . . . . e 7 . 
        . . . e 7 7 . . . . . . 7 7 e . 
        . . . 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . . . 7 1 1 1 7 7 7 7 1 1 1 7 . 
        . . . 7 8 8 1 7 7 7 7 8 8 1 7 . 
        . . . 7 8 8 1 7 7 7 7 8 8 1 7 . 
        . . . 7 8 8 1 7 7 7 7 8 8 1 7 . 
        . . . 7 1 1 1 7 f 7 7 1 1 1 7 . 
        . . . 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . . . . . . e e e e e e . . . . 
        . . . . . e e 2 2 2 2 2 . . . . 
        . . . . e . . 2 2 2 2 2 . . . . 
        . . . . . . . 2 2 2 2 2 . . . . 
        . . . . . . . f f . f f . . . . 
        . . . . . . . . . . f f . . . . 
        `],
    500,
    true
    )
    music.play(music.createSoundEffect(WaveShape.Noise, 1075, 1096, 255, 255, 5000, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), music.PlaybackMode.LoopingInBackground)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    idle = 1
    animation.runImageAnimation(
    mySprite,
    [img`
        . 7 . . . . . . . . . . 7 . . . 
        . 7 e . . . . . . . . e 7 . . . 
        . e 7 7 . . . . . . 7 7 e . . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
        . 7 1 1 1 7 7 7 7 1 1 1 7 . . . 
        . 7 1 8 8 7 7 7 7 1 8 8 7 . . . 
        . 7 1 8 8 7 7 7 7 1 8 8 7 . . . 
        . 7 1 8 8 7 7 7 7 1 8 8 7 . . . 
        . 7 1 1 1 7 7 f 7 1 1 1 7 . . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
        . . . . e e e e e e . . . . . . 
        . . . . 2 2 2 2 2 e e . . . . . 
        . . . . 2 2 2 2 2 . . e . . . . 
        . . . . 2 2 2 2 2 . . . . . . . 
        . . . . f f . f f . . . . . . . 
        . . . . f f . f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . 7 . . . . . . . . . . 7 . . . 
        . 7 e . . . . . . . . e 7 . . . 
        . e 7 7 . . . . . . 7 7 e . . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
        . 7 1 1 1 7 7 7 7 1 1 1 7 . . . 
        . 7 1 8 8 7 7 7 7 1 8 8 7 . . . 
        . 7 1 8 8 7 7 7 7 1 8 8 7 . . . 
        . 7 1 8 8 7 7 7 7 1 8 8 7 . . . 
        . 7 1 1 1 7 7 f 7 1 1 1 7 . . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
        . . . . 2 2 2 2 2 e e e . . . . 
        . . . . 2 2 2 2 2 . . . . . . . 
        . . . . 2 2 2 2 2 . . . . . . . 
        . . . . f f . f f . . . . . . . 
        . . . . f f . f f . . . . . . . 
        `,img`
        . 7 . . . . . . . . . . 7 . . . 
        . 7 e . . . . . . . . e 7 . . . 
        . e 7 7 . . . . . . 7 7 e . . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
        . 7 1 1 1 7 7 7 7 1 1 1 7 . . . 
        . 7 1 8 8 7 7 7 7 1 8 8 7 . . . 
        . 7 1 8 8 7 7 7 7 1 8 8 7 . . . 
        . 7 1 8 8 7 7 7 7 1 8 8 7 . . . 
        . 7 1 1 1 7 7 f 7 1 1 1 7 . . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
        . . . . e e e e e e . e . . . . 
        . . . . 2 2 2 2 2 e e . . . . . 
        . . . . 2 2 2 2 2 . . . . . . . 
        . . . . 2 2 2 2 2 . . . . . . . 
        . . . . f f . f f . . . . . . . 
        . . . . f f . f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . 7 . . . . . . . . . . 7 . . . 
        . 7 e . . . . . . . . e 7 . . . 
        . e 7 7 . . . . . . 7 7 e . . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
        . 7 1 1 1 7 7 7 7 1 1 1 7 . . . 
        . 7 1 8 8 7 7 7 7 1 8 8 7 . . . 
        . 7 1 8 8 7 7 7 7 1 8 8 7 . . . 
        . 7 1 8 8 7 7 7 7 1 8 8 7 . . . 
        . 7 1 1 1 7 7 f 7 1 1 1 7 . . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
        . . . . 2 2 2 2 2 e e e . . . . 
        . . . . 2 2 2 2 2 . . . e . . . 
        . . . . 2 2 2 2 2 . . e . . . . 
        . . . . f f . f f . . . . . . . 
        . . . . f f . f f . . . . . . . 
        `],
    500,
    true
    )
    music.stopAllSounds()
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    idle = 1
    animation.runImageAnimation(
    mySprite,
    [img`
        . 7 . . . . . . . . . . 7 . . . 
        . 7 e . . . . . . . . e 7 . . . 
        . e 7 7 . . . . . . 7 7 e . . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
        . 7 1 1 1 7 7 7 7 1 1 1 7 . . . 
        . 7 1 8 8 7 7 7 7 1 8 8 7 . . . 
        . 7 1 8 8 7 7 7 7 1 8 8 7 . . . 
        . 7 1 8 8 7 7 7 7 1 8 8 7 . . . 
        . 7 1 1 1 7 7 f 7 1 1 1 7 . . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
        . . . . e e e e e e . . . . . . 
        . . . . 2 2 2 2 2 e e . . . . . 
        . . . . 2 2 2 2 2 . . e . . . . 
        . . . . 2 2 2 2 2 . . . . . . . 
        . . . . f f . f f . . . . . . . 
        . . . . f f . f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . 7 . . . . . . . . . . 7 . . . 
        . 7 e . . . . . . . . e 7 . . . 
        . e 7 7 . . . . . . 7 7 e . . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
        . 7 1 1 1 7 7 7 7 1 1 1 7 . . . 
        . 7 1 8 8 7 7 7 7 1 8 8 7 . . . 
        . 7 1 8 8 7 7 7 7 1 8 8 7 . . . 
        . 7 1 8 8 7 7 7 7 1 8 8 7 . . . 
        . 7 1 1 1 7 7 f 7 1 1 1 7 . . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
        . . . . 2 2 2 2 2 e e e . . . . 
        . . . . 2 2 2 2 2 . . . . . . . 
        . . . . 2 2 2 2 2 . . . . . . . 
        . . . . f f . f f . . . . . . . 
        . . . . f f . f f . . . . . . . 
        `,img`
        . 7 . . . . . . . . . . 7 . . . 
        . 7 e . . . . . . . . e 7 . . . 
        . e 7 7 . . . . . . 7 7 e . . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
        . 7 1 1 1 7 7 7 7 1 1 1 7 . . . 
        . 7 1 8 8 7 7 7 7 1 8 8 7 . . . 
        . 7 1 8 8 7 7 7 7 1 8 8 7 . . . 
        . 7 1 8 8 7 7 7 7 1 8 8 7 . . . 
        . 7 1 1 1 7 7 f 7 1 1 1 7 . . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
        . . . . e e e e e e . e . . . . 
        . . . . 2 2 2 2 2 e e . . . . . 
        . . . . 2 2 2 2 2 . . . . . . . 
        . . . . 2 2 2 2 2 . . . . . . . 
        . . . . f f . f f . . . . . . . 
        . . . . f f . f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . 7 . . . . . . . . . . 7 . . . 
        . 7 e . . . . . . . . e 7 . . . 
        . e 7 7 . . . . . . 7 7 e . . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
        . 7 1 1 1 7 7 7 7 1 1 1 7 . . . 
        . 7 1 8 8 7 7 7 7 1 8 8 7 . . . 
        . 7 1 8 8 7 7 7 7 1 8 8 7 . . . 
        . 7 1 8 8 7 7 7 7 1 8 8 7 . . . 
        . 7 1 1 1 7 7 f 7 1 1 1 7 . . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
        . . . . 2 2 2 2 2 e e e . . . . 
        . . . . 2 2 2 2 2 . . . e . . . 
        . . . . 2 2 2 2 2 . . e . . . . 
        . . . . f f . f f . . . . . . . 
        . . . . f f . f f . . . . . . . 
        `],
    500,
    true
    )
    music.stopAllSounds()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    idle = 0
    animation.runImageAnimation(
    mySprite,
    [img`
        . 7 . . . . . . . . . . 7 . . . 
        . 7 e . . . . . . . . e 7 . . . 
        . e 7 7 . . . . . . 7 7 e . . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
        . 7 1 1 1 7 7 7 7 1 1 1 7 . . . 
        . 7 1 8 8 7 7 7 7 1 8 8 7 . . . 
        . 7 1 8 8 7 7 7 7 1 8 8 7 . . . 
        . 7 1 8 8 7 7 7 7 1 8 8 7 . . . 
        . 7 1 1 1 7 7 f 7 1 1 1 7 . . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
        . . . . e e e e e e e e . . . . 
        . . . . 2 2 2 2 2 . e . . . . . 
        . . . . 2 2 2 2 2 . . . . . . . 
        . . . . 2 2 2 2 2 . . . . . . . 
        . . . . f f . f f . . . . . . . 
        . . . . . . . f f . . . . . . . 
        `,img`
        . 7 . . . . . . . . . . 7 . . . 
        . 7 e . . . . . . . . e 7 . . . 
        . e 7 7 . . . . . . 7 7 e . . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
        . 7 1 1 1 7 7 7 7 1 1 1 7 . . . 
        . 7 1 8 8 7 7 7 7 1 8 8 7 . . . 
        . 7 1 8 8 7 7 7 7 1 8 8 7 . . . 
        . 7 1 8 8 7 7 7 7 1 8 8 7 . . . 
        . 7 1 1 1 7 7 f 7 1 1 1 7 . . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
        . . . . e e e e e e . . . . . . 
        . . . . 2 2 2 2 2 e e . . . . . 
        . . . . 2 2 2 2 2 . . e . . . . 
        . . . . 2 2 2 2 2 . . . . . . . 
        . . . . f f . f f . . . . . . . 
        . . . . f f . . . . . . . . . . 
        `],
    500,
    true
    )
    music.play(music.createSoundEffect(WaveShape.Noise, 1075, 1096, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.LoopingInBackground)
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    idle = 1
    animation.runImageAnimation(
    mySprite,
    [img`
        . 7 . . . . . . . . . . 7 . . . 
        . 7 e . . . . . . . . e 7 . . . 
        . e 7 7 . . . . . . 7 7 e . . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
        . 7 1 1 1 7 7 7 7 1 1 1 7 . . . 
        . 7 1 8 8 7 7 7 7 1 8 8 7 . . . 
        . 7 1 8 8 7 7 7 7 1 8 8 7 . . . 
        . 7 1 8 8 7 7 7 7 1 8 8 7 . . . 
        . 7 1 1 1 7 7 f 7 1 1 1 7 . . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
        . . . . e e e e e e . . . . . . 
        . . . . 2 2 2 2 2 e e . . . . . 
        . . . . 2 2 2 2 2 . . e . . . . 
        . . . . 2 2 2 2 2 . . . . . . . 
        . . . . f f . f f . . . . . . . 
        . . . . f f . f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . 7 . . . . . . . . . . 7 . . . 
        . 7 e . . . . . . . . e 7 . . . 
        . e 7 7 . . . . . . 7 7 e . . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
        . 7 1 1 1 7 7 7 7 1 1 1 7 . . . 
        . 7 1 8 8 7 7 7 7 1 8 8 7 . . . 
        . 7 1 8 8 7 7 7 7 1 8 8 7 . . . 
        . 7 1 8 8 7 7 7 7 1 8 8 7 . . . 
        . 7 1 1 1 7 7 f 7 1 1 1 7 . . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
        . . . . 2 2 2 2 2 e e e . . . . 
        . . . . 2 2 2 2 2 . . . . . . . 
        . . . . 2 2 2 2 2 . . . . . . . 
        . . . . f f . f f . . . . . . . 
        . . . . f f . f f . . . . . . . 
        `,img`
        . 7 . . . . . . . . . . 7 . . . 
        . 7 e . . . . . . . . e 7 . . . 
        . e 7 7 . . . . . . 7 7 e . . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
        . 7 1 1 1 7 7 7 7 1 1 1 7 . . . 
        . 7 1 8 8 7 7 7 7 1 8 8 7 . . . 
        . 7 1 8 8 7 7 7 7 1 8 8 7 . . . 
        . 7 1 8 8 7 7 7 7 1 8 8 7 . . . 
        . 7 1 1 1 7 7 f 7 1 1 1 7 . . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
        . . . . e e e e e e . e . . . . 
        . . . . 2 2 2 2 2 e e . . . . . 
        . . . . 2 2 2 2 2 . . . . . . . 
        . . . . 2 2 2 2 2 . . . . . . . 
        . . . . f f . f f . . . . . . . 
        . . . . f f . f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . 7 . . . . . . . . . . 7 . . . 
        . 7 e . . . . . . . . e 7 . . . 
        . e 7 7 . . . . . . 7 7 e . . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
        . 7 1 1 1 7 7 7 7 1 1 1 7 . . . 
        . 7 1 8 8 7 7 7 7 1 8 8 7 . . . 
        . 7 1 8 8 7 7 7 7 1 8 8 7 . . . 
        . 7 1 8 8 7 7 7 7 1 8 8 7 . . . 
        . 7 1 1 1 7 7 f 7 1 1 1 7 . . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
        . . . . 2 2 2 2 2 e e e . . . . 
        . . . . 2 2 2 2 2 . . . e . . . 
        . . . . 2 2 2 2 2 . . e . . . . 
        . . . . f f . f f . . . . . . . 
        . . . . f f . f f . . . . . . . 
        `],
    500,
    true
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
radio.onReceivedString(function (receivedString) {
    mySprite.sayText(receivedString, 1000, false)
})
info.onLifeZero(function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . 7 . . . . . . . . . . 7 . . . 
        . 7 e . . . . . . . . e 7 . . . 
        . e 7 7 . . . . . . 7 7 e . . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
        . 7 1 1 1 7 7 7 7 1 1 1 7 . . . 
        . 7 1 8 8 7 7 7 7 1 8 8 7 . . . 
        . 7 1 8 8 7 7 7 7 1 8 8 7 . . . 
        . 7 1 8 8 7 7 7 7 1 8 8 7 . . . 
        . 7 f f f 7 7 f 7 f f f 7 . . . 
        . 7 2 2 2 7 7 2 7 2 2 2 7 . . . 
        . . 2 2 e e e e e 2 2 2 . . . . 
        . . 2 2 a a a a a 2 2 . . . . . 
        . . 2 . a a a a a 2 . e . . . . 
        . . . . a a a a a a . . . . . . 
        . . . . f f . f f . . . . . . . 
        . . . . f f . f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . 7 . . . . . . . . . . 7 . . . 
        . 7 e . . . . . . . . e 7 . . . 
        . e 7 7 . . . . . . 7 7 e . . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
        . 7 f 1 1 7 7 7 7 f 1 1 7 . . . 
        . 7 f 8 8 7 7 7 7 f 8 8 7 . . . 
        . 7 f 8 8 7 7 7 7 f 8 8 7 . . . 
        . 7 f 8 8 7 7 7 7 f 8 8 7 . . . 
        . 7 f f f 7 7 f 7 f f f 7 . . . 
        . 7 2 2 2 7 7 2 7 2 2 2 7 . . . 
        . . 2 2 a a a a a 2 2 . . . . . 
        . . 2 . a a a a a 2 . e . . . . 
        . . . . a a a a a a . . . . . . 
        . . . . f f . f f . . . . . . . 
        . . . . f f . f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . 7 . . . . . . . . . . 7 . . . 
        . 7 e . . . . . . . . e 7 . . . 
        . e 7 7 . . . . . . 7 7 e . . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
        . 7 f f f 7 7 7 7 f f f 7 . . . 
        . 7 f 8 8 7 7 7 7 f 8 8 7 . . . 
        . 7 f 8 8 7 7 7 7 f 8 8 7 . . . 
        . 7 f 8 8 7 7 7 7 f 8 8 7 . . . 
        . 7 f f f 7 7 f 7 f f f 7 . . . 
        . 7 2 2 2 7 7 2 7 2 2 2 7 . . . 
        . . 2 2 a a a a a 2 2 . . . . . 
        . . 2 . 2 a a a a 2 . e . . . . 
        . . . . 2 a a a a a . . . . . . 
        . . . . f f . f f . . . . . . . 
        . . . . f f . f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 7 . . . . . . . . . . 7 . . 
        . . 7 e . . . . . . . . e 7 . . 
        . . 2 2 7 . . . . . . 7 7 2 . . 
        . . 2 7 7 7 7 7 7 7 7 7 7 2 . . 
        . . 2 f f f 7 7 7 7 f f f 2 . . 
        . . 2 f f f 7 7 7 7 f f 8 2 . . 
        . . 2 f f 8 7 7 7 7 f f 8 7 . . 
        . . 2 f f f 7 7 7 7 f f f 7 . . 
        . . 7 f f f 7 7 f 7 f f f 7 . . 
        . . 7 2 2 2 7 7 2 7 2 2 2 7 . . 
        . . 2 . 2 a a a a 2 . e . . . . 
        2 2 . . 2 a a a a a . . . . . . 
        . . . . f f . f f . . . . . . . 
        . . . f f . f f . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 7 . . . . . . . . . . 7 . 
        . . . 7 e . . . . . . . . e 7 . 
        . . . 2 2 7 . . . . . . 7 7 2 . 
        . . . 2 7 7 7 7 7 7 7 7 7 7 2 . 
        . . . 2 f f f 7 7 7 7 f f f 2 . 
        . . . 2 f f f 7 7 7 7 f f f 2 . 
        . . . 2 f f f 7 7 7 7 f f 8 7 . 
        . . . 2 f f f 7 7 7 7 f f f 7 . 
        . . . 7 f f f 7 7 f 7 f f f 7 . 
        . . . 7 2 2 2 7 7 2 7 2 2 2 7 . 
        2 2 . 2 2 2 a a a a 2 2 2 2 . . 
        . . f f f f f f f . 2 . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . 2 . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 7 . . . 2 . . . . . . 7 . 
        . . . 7 e . . . . . . . . e 7 . 
        . . . 2 2 7 . . . 2 2 2 2 2 2 . 
        . . . 2 7 7 7 7 7 7 7 7 7 7 2 . 
        . . . 2 f f f 7 2 7 7 f f f 2 . 
        . . . 2 f f f 7 2 7 7 f f f 2 . 
        . . . 2 f f f 7 2 7 7 f f f 7 . 
        . . . 2 f f f 2 7 7 7 f f f 7 . 
        2 2 . 7 f f f 7 7 f 7 f f f 7 . 
        . . f 7 2 2 2 7 7 2 7 2 2 2 7 . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . 2 . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 7 . . . 2 . . . . . . 7 . 
        . . . 7 e . . . . . . . . e 7 . 
        . . . 2 2 7 . . . 2 2 2 2 2 2 . 
        . . . 2 7 7 7 7 7 7 7 7 7 7 2 . 
        . . . 2 f f f 7 2 7 7 f f f 2 . 
        . . . 2 f f f 7 2 7 7 f f f 2 . 
        . . . 2 f f f 7 2 7 7 f f f 7 . 
        . . . 2 f f f 2 7 7 7 f f f 7 . 
        2 2 . 7 f f f 7 7 f 7 f f f 7 . 
        . . f 7 2 2 2 7 7 2 7 2 2 2 7 . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    false
    )
})
radio.onReceivedValue(function (name, value) {
    mySprite.sayText(name, 1000, false)
    mySprite.sayText(value, 1000, false)
})
let mySprite: Sprite = null
let idle = 0
radio.setGroup(1)
idle = 1
mySprite = sprites.create(img`
    . 7 . . . . . . . . . . 7 . . . 
    . 7 e . . . . . . . . e 7 . . . 
    . e 7 7 . . . . . . 7 7 e . . . 
    . 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
    . 7 1 1 1 7 7 7 7 1 1 1 7 . . . 
    . 7 1 8 8 7 7 7 7 1 8 8 7 . . . 
    . 7 1 8 8 7 7 7 7 1 8 8 7 . . . 
    . 7 1 8 8 7 7 7 7 1 8 8 7 . . . 
    . 7 1 1 1 7 7 f 7 1 1 1 7 . . . 
    . 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
    . . . . e e e e e e . . . . . . 
    . . . . 2 2 2 2 2 e e . . . . . 
    . . . . 2 2 2 2 2 . . e . . . . 
    . . . . 2 2 2 2 2 . . . . . . . 
    . . . . f f . f f . . . . . . . 
    . . . . f f . f f . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
scene.setBackgroundImage(img`
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbabbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbaabbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbaabbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbaaaabbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbaaaaabbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbaaabbbbbbbbbbbbbbbcccccccbbbbbbbbbbbbbbbaaabbbbbbbbbbbbbbbcccccccbbbbbbbbbbbbbbbaaabbbbbbbbbbbbbbbcccccccbbbbbbbbbbbbbbbaaabbbbbbbbbbbbbbbcccccccbb
    bbbbbbbbbbbbaaaaabbbbbbbbbbbbcccccccccccbbbbbbbbbbbbaaaaabbbbbbbbbbbbcccccccccccbbbbbbbbbbbbaaaaabbbbbbbbbbbbcccccccccccbbbbbbbbbbbbaaaaabbbbbbbbbbbbccccccccccc
    cbbbbbbbbbbbaaaaaaabbbbbbbbbcccccccccccccbbbbbbbbbbbaaaaaaabbbbbbbbbcccccccccccccbbbbbbbbbbbaaaaaaabbbbbbbbbcccccccccccccbbbbbbbbbbbaaaaaaabbbbbbbbbcccccccccccc
    cccbbbbbbbbaaaaaabbbbbbbbbcccccccccccccccccbbbbbbbbaaaaaabbbbbbbbbcccccccccccccccccbbbbbbbbaaaaaabbbbbbbbbcccccccccccccccccbbbbbbbbaaaaaabbbbbbbbbcccccccccccccc
    ccccbbbbbaaaaaaaaabbbbbbbcccccccccccccccccccbbbbbaaaaaaaaabbbbbbbcccccccccccccccccccbbbbbaaaaaaaaabbbbbbbcccccccccccccccccccbbbbbaaaaaaaaabbbbbbbccccccccccccccc
    cccccbbbbbbaaaaaaaabbbbbcccccccccccccccccccccbbbbbbaaaaaaaabbbbbcccccccccccccccccccccbbbbbbaaaaaaaabbbbbcccccccccccccccccccccbbbbbbaaaaaaaabbbbbcccccccccccccccc
    ccccccbbccaaaaaaabbbbbbcccccccccccccccccccccccbbccaaaaaaabbbbbbcccccccccccccccccccccccbbccaaaaaaabbbbbbcccccccccccccccccccccccbbccaaaaaaabbbbbbccccccccccccccccc
    ccccccccccccaaaaaabbbbccacccccccccccccccccccccccccccaaaaaabbbbccacccccccccccccccccccccccccccaaaaaabbbbccacccccccccccccccccccccccccccaaaaaabbbbccaccccccccccccccc
    ccccccccccaaaaaaaaabbcccacccccccccccccccccccccccccaaaaaaaaabbcccacccccccccccccccccccccccccaaaaaaaaabbcccacccccccccccccccccccccccccaaaaaaaaabbcccaccccccccccccccc
    cccccccccaaaaaaaaaaacccaaccccccccccccccccccccccccaaaaaaaaaaacccaaccccccccccccccccccccccccaaaaaaaaaaacccaaccccccccccccccccccccccccaaaaaaaaaaacccaaccccccccccccccc
    cccccccaaaaaaaaaaaccccccaacccccccccccccccccccccaaaaaaaaaaaccccccaacccccccccccccccccccccaaaaaaaaaaaccccccaacccccccccccccccccccccaaaaaaaaaaaccccccaacccccccccccccc
    cccccccccaaaaaaaaacccccaaccccccccccccccccccccccccaaaaaaaaacccccaaccccccccccccccccccccccccaaaaaaaaacccccaaccccccccccccccccccccccccaaaaaaaaacccccaaccccccccccccccc
    cccccccccaaaaaaaccccccaaaacccccccccccccccccccccccaaaaaaaccccccaaaacccccccccccccccccccccccaaaaaaaccccccaaaacccccccccccccccccccccccaaaaaaaccccccaaaacccccccccccccc
    ccccccccaa9aaaaaaaaccaaaaaacccccccccccccccccccccaa9aaaaaaaaccaaaaaacccccccccccccccccccccaa9aaaaaaaaccaaaaaacccccccccccccccccccccaa9aaaaaaaaccaaaaaaccccccccccccc
    ccccccccccaaaaaaaaaacccaacccccccccccacccccccccccccaaaaaaaaaacccaacccccccccccacccccccccccccaaaaaaaaaacccaacccccccccccacccccccccccccaaaaaaaaaacccaacccccccccccaccc
    ccccccccaaaaaaaaaaaccaaaaaacccccccccacccccccccccaaaaaaaaaaaccaaaaaacccccccccacccccccccccaaaaaaaaaaaccaaaaaacccccccccacccccccccccaaaaaaaaaaaccaaaaaacccccccccaccc
    cccacccaaaaaaaaaaaacaaaaaaaacccccccaaacccccacccaaaaaaaaaaaacaaaaaaaacccccccaaacccccacccaaaaaaaaaaaacaaaaaaaacccccccaaacccccacccaaaaaaaaaaaacaaaaaaaacccccccaaacc
    cccaacccccaaaaaaaaaaaaaaaaccccccccccaacccccaacccccaaaaaaaaaaaaaaaaccccccccccaacccccaacccccaaaaaaaaaaaaaaaaccccccccccaacccccaacccccaaaaaaaaaaaaaaaaccccccccccaacc
    ccaaccccaaaaaaaaaaaaaaaaaaaacccccccaacccccaaccccaaaaaaaaaaaaaaaaaaaacccccccaacccccaaccccaaaaaaaaaaaaaaaaaaaacccccccaacccccaaccccaaaaaaaaaaaaaaaaaaaacccccccaaccc
    cccaaccaaaaaaaaaaaaaaaaaaaaaacccccaaaacccccaaccaaaaaaaaaaaaaaaaaaaaaacccccaaaacccccaaccaaaaaaaaaaaaaaaaaaaaaacccccaaaacccccaaccaaaaaaaaaaaaaaaaaaaaaacccccaaaacc
    ccaaaaaaaaaaaaaaaaaaaaaaaaaccccccccaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaccccccccaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaccccccccaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaccccccccaaaac
    cccaaaaaaaaaaaaaaaaaaaaaaaaaacccccaaaacccccaaaaaaaaaaaaaaaaaaaaaaaaaacccccaaaacccccaaaaaaaaaaaaaaaaaaaaaaaaaacccccaaaacccccaaaaaaaaaaaaaaaaaaaaaaaaaacccccaaaacc
    cccaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaccccaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaccccaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaccccaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaac
    ccaaaaaaaaaaaaaaaaaaaaaaaaaaccccccaaaaccccaaaaaaaaaaaaaaaaaaaaaaaaaaccccccaaaaccccaaaaaaaaaaaaaaaaaaaaaaaaaaccccccaaaaccccaaaaaaaaaaaaaaaaaaaaaaaaaaccccccaaaacc
    caaaaaaaaaaaaaaaaaaaaaaaaaaaaaccaaaaaaaccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccaaaaaaaccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccaaaaaaaccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccaaaaaaac
    ccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccaaaaaaaccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccaaaaaaaccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccaaaaaaaccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccaaaaaaa
    ccaaaaaaaaaaaaaaaaaaaaaaaaaaaaccaaaaaaaaccaaaaaaaaaaaaaaaaaaaaaaaaaaaaccaaaaaaaaccaaaaaaaaaaaaaaaaaaaaaaaaaaaaccaaaaaaaaccaaaaaaaaaaaaaaaaaaaaaaaaaaaaccaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    `)
scroller.scrollBackgroundWithSpeed(-10, 0, scroller.BackgroundLayer.Layer0)
scroller.setLayerImage(scroller.BackgroundLayer.Layer4, img`
    ................................................................................................................................................................
    ................................................................................................................................................................
    .............ddd................................................................................................................................................
    ..........ddddddddddddd.........................................................................................................................................
    .........ddddddddddddddd........................................................................................................................................
    ........ddddddddddddddddd...........................dddddddd....................................................................................................
    ........dddddddddddddddddd.........dddddddddddddddddddddddddddddddd.............................................................................................
    ........dddddddddddddddddd.........dddddddddddddddddddddddddddddddddd...........................................................................................
    ........dddddddddddddddddd.......ddddddddddddddddddddddddddddddddddddddd........................................................................................
    .........ddddddddddddddddd.......ddddddddddddddddddddddddddddddddddddddddd......................................................................................
    ............ddddddddddddd........dddddddddddddddddddddddddddddddddddddddddddddd.................................................................................
    .................ddddddd.........dddddddddddddddddddddddddddddddddddddddddddddddd...............................................................................
    .................................dddddddddddddddddddddddddddddddddddddddddddddddd............................................dddddddd...........................
    .................................dddddddddddddddddddddddddddddddddddddddddddddddd.............................ddddddddddddddddddddddddd.........................
    .................................dddddddddddddddddddddddddddddddddddddddddddddddd................ddddddddddddddddddddddddddddddddddddddd........................
    ..................................dddddddddddddddddddddddddddddddddddddddddddddd................dddddddddddddddddddddddddddddddddddddddd........................
    ....................................dddddddddddddddddddddddddddddddddddddddddddd................dddddddddddddddddddddddddddddddddddddddd........................
    ......................................ddddddddddddddddddddddddddddddddddddddddd.................dddddddddddddddddddddddddddddddddddddddd........................
    .........................................ddddddddddddddddddddddddddddddddddddd..................dddddddddddddddddddddddddddddddddddddddd........................
    ............................................ddddddddddddddddddddddddddddd.......................dddddddddddddddddddddddddddddddddddddddd........................
    ...............................................dddddddddddddddddddddddd..........................ddddddddddddddddddddddddddddddddddddddd........................
    ..................................................dddddddddddddddddd.............................ddddddddddddddddddddddddddddddddddddddd........................
    ........................................................dddddddd.................................dddddddddddddddddddddddddddddddddddddd.........................
    ..................................................................................................dddddddddddddddddddddddddddddddddddd..........................
    ....................dddddddddddd...................................................................dddddddddddddddddddddddddddddddd.............................
    ................ddddddddddddddddddddddddd......................................................................dddddddddddddddd.................................
    ...............dddddddddddddddddddddddddddd.....................................................................................................................
    .............dddddddddddddddddddddddddddddddd...................................................................................................................
    .............dddddddddddddddddddddddddddddddddd.................................................................................................................
    ............dddddddddddddddddddddddddddddddddddd................................................................................................................
    ...........ddddddddddddddddddddddddddddddddddddddd..............................................................................................................
    ..........ddddddddddddddddddddddddddddddddddddddddd.............................................................................................................
    ..........dddddddddddddddddddddddddddddddddddddddddd............................................................................................................
    ..........ddddddddddddddddddddddddddddddddddddddddddd...........................................................................................................
    ..........ddddddddddddddddddddddddddddddddddddddddddd...........................................................................................................
    ..........ddddddddddddddddddddddddddddddddddddddddddd...........................................................................................................
    ...........dddddddddddddddddddddddddddddddddddddddddd...........................................................................................................
    ............ddddddddddddddddddddddddddddddddddddddddd...........................................................................................................
    .............dddddddddddddddddddddddddddddddddddddddd...........................................................................................................
    ...............ddddddddddddddddddddddddddddddddddddd............................................................................................................
    ....................ddddddddddddddddddddddddddddd...............................................................................................................
    .................................dddddddddddddd.................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    `)
scroller.scrollBackgroundWithSpeed(5, 0, scroller.BackgroundLayer.Layer4)
let death = music.createSoundEffect(WaveShape.Noise, 1075, 1140, 202, 188, 5000, SoundExpressionEffect.None, InterpolationCurve.Linear)
let boouing = music.createSoundEffect(WaveShape.Noise, 5000, 1, 255, 137, 5000, SoundExpressionEffect.None, InterpolationCurve.Linear)
info.setScore(0)
info.setLife(0)
game.onUpdateInterval(1000, function () {
    info.changeLifeBy(-1)
})
game.onUpdateInterval(900, function () {
    if (idle == 1) {
        animation.stopAnimation(animation.AnimationTypes.All, mySprite)
        animation.runImageAnimation(
        mySprite,
        [img`
            . 7 . . . . . . . . . . 7 . . . 
            . 7 e . . . . . . . . e 7 . . . 
            . e 7 7 . . . . . . 7 7 e . . . 
            . 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
            . 7 1 1 1 7 7 7 7 1 1 1 7 . . . 
            . 7 1 8 8 7 7 7 7 1 8 8 7 . . . 
            . 7 1 8 8 7 7 7 7 1 8 8 7 . . . 
            . 7 1 8 8 7 7 7 7 1 8 8 7 . . . 
            . 7 1 1 1 7 7 f 7 1 1 1 7 . . . 
            . 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
            . . . . e e e e e e . . . . . . 
            . . . . 2 2 2 2 2 e e . . . . . 
            . . . . 2 2 2 2 2 . . e . . . . 
            . . . . 2 2 2 2 2 . . . . . . . 
            . . . . f f . f f . . . . . . . 
            . . . . f f . f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . 7 . . . . . . . . . . 7 . . . 
            . 7 e . . . . . . . . e 7 . . . 
            . e 7 7 . . . . . . 7 7 e . . . 
            . 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
            . 7 1 1 1 7 7 7 7 1 1 1 7 . . . 
            . 7 1 8 8 7 7 7 7 1 8 8 7 . . . 
            . 7 1 8 8 7 7 7 7 1 8 8 7 . . . 
            . 7 1 8 8 7 7 7 7 1 8 8 7 . . . 
            . 7 1 1 1 7 7 f 7 1 1 1 7 . . . 
            . 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
            . . . . 2 2 2 2 2 e e e . . . . 
            . . . . 2 2 2 2 2 . . . . . . . 
            . . . . 2 2 2 2 2 . . . . . . . 
            . . . . f f . f f . . . . . . . 
            . . . . f f . f f . . . . . . . 
            `,img`
            . 7 . . . . . . . . . . 7 . . . 
            . 7 e . . . . . . . . e 7 . . . 
            . e 7 7 . . . . . . 7 7 e . . . 
            . 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
            . 7 1 1 1 7 7 7 7 1 1 1 7 . . . 
            . 7 1 8 8 7 7 7 7 1 8 8 7 . . . 
            . 7 1 8 8 7 7 7 7 1 8 8 7 . . . 
            . 7 1 8 8 7 7 7 7 1 8 8 7 . . . 
            . 7 1 1 1 7 7 f 7 1 1 1 7 . . . 
            . 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
            . . . . e e e e e e . e . . . . 
            . . . . 2 2 2 2 2 e e . . . . . 
            . . . . 2 2 2 2 2 . . . . . . . 
            . . . . 2 2 2 2 2 . . . . . . . 
            . . . . f f . f f . . . . . . . 
            . . . . f f . f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . 7 . . . . . . . . . . 7 . . . 
            . 7 e . . . . . . . . e 7 . . . 
            . e 7 7 . . . . . . 7 7 e . . . 
            . 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
            . 7 1 1 1 7 7 7 7 1 1 1 7 . . . 
            . 7 1 8 8 7 7 7 7 1 8 8 7 . . . 
            . 7 1 8 8 7 7 7 7 1 8 8 7 . . . 
            . 7 1 8 8 7 7 7 7 1 8 8 7 . . . 
            . 7 1 1 1 7 7 f 7 1 1 1 7 . . . 
            . 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
            . . . . 2 2 2 2 2 e e e . . . . 
            . . . . 2 2 2 2 2 . . . e . . . 
            . . . . 2 2 2 2 2 . . e . . . . 
            . . . . f f . f f . . . . . . . 
            . . . . f f . f f . . . . . . . 
            `],
        500,
        true
        )
    } else if (idle == 0) {
    	
    }
})
