namespace SpriteKind {
    export const keys = SpriteKind.create()
    export const awards = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (cat.isHittingTile(CollisionDirection.Bottom)) {
        cat.vy = -175
        music.jumpUp.play()
        cat.startEffect(effects.trail, 200)
    }
})
info.onCountdownEnd(function () {
    game.over(true, effects.dissolve)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.over(true, effects.confetti)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.keys, function (sprite, otherSprite) {
    cat_has_key = true
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.awards, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    tiles.placeOnRandomTile(coin, myTiles.transparency16)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile1, function (sprite, location) {
    if (info.score() == 10 && cat_has_key == true) {
        tiles.placeOnTile(cat, tiles.getTileLocation(15, 3))
    }
})
let cat_has_key = false
let coin: Sprite = null
let cat: Sprite = null
tiles.setTilemap(tiles.createTilemap(hex`1000100000000000030000000000000002060606000000000206010101060101020606060101010000000606060606060206060600000000000000000006060602060604060000010101000000060606020606020606060000000001010000000205020606060600000001060600000002020606000000000100000000000101060606060101000000000001010606060606060600000001010100060606060600000000000000000000000000000000000000000101010000000000000000000101010100000000000101010101000000000000010101010000000000000001010100000000000000000000000000000000000001010101010101010101010101010101`, img`
    . . . . . . . . . . . . 2 . . . 
    . . . . 2 . 2 2 2 . 2 2 2 . . . 
    2 2 2 . . . . . . . . . 2 . . . 
    . . . . . . . . . . . . 2 . . . 
    . . . 2 2 2 . . . . . . 2 . . 2 
    . . . . . . . 2 2 . . . 2 . 2 . 
    . . . . . . 2 . . . . . 2 2 . . 
    . . . . 2 . . . . . 2 2 . . . . 
    2 2 . . . . . 2 2 . . . . . . . 
    . . . 2 2 2 . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    2 2 2 . . . . . . . . . 2 2 2 2 
    . . . . . 2 2 2 2 2 . . . . . . 
    2 2 2 2 . . . . . . . 2 2 2 . . 
    . . . . . . . . . . . . . . . . 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, [myTiles.transparency16,sprites.castle.tilePath2,sprites.dungeon.floorLight0,myTiles.tile1,myTiles.tile2,sprites.dungeon.chestClosed,myTiles.tile3], TileScale.Sixteen))
scene.setBackgroundColor(9)
game.splash("Kitty Game by: Maddison Winters")
game.showLongText("The kitty must collect all the gems and the key before unlocking the doors!", DialogLayout.Full)
cat = sprites.create(img`
    . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 
    c d d c . . c d d c . . . . 
    c b d d f f d d b c . . . . 
    c 3 b d d b d b 3 c . . . . 
    f b 3 d d d d 3 b f . . . . 
    e d d d d d d d d e . . . . 
    e d f d d d d f d e . b f b 
    f d d f d d f d d f . f d f 
    f b d d b b d d 2 b f f d f 
    . f 2 2 2 2 2 2 d b b d b f 
    . f d . d . d . d . . . . . 
    . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let key = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    5 5 5 5 5 . . . . . . . . . . . 
    5 . . . 5 . . . . . . . . . . . 
    5 . . . 5 . . . . . . . . . . . 
    5 . . . 5 5 5 5 5 5 5 5 5 5 5 5 
    5 . . . 5 . . . . . . 5 . 5 . 5 
    5 . . . 5 . . . . . . 5 . 5 . 5 
    5 5 5 5 5 . . . . . . 5 . 5 . 5 
    . . . . . . . . . . . 5 . . . 5 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.keys)
coin = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . b b b b b b b . . . . . 
    . . . b d d d d d d d b . . . . 
    . . b d c c c c c c c d b . . . 
    . b d c b d d d d d b c d b . . 
    . b d c d 1 1 b 1 1 d c d b . . 
    . b d c d 1 b 1 b 1 d c d b . . 
    . b d c d 1 b b b 1 d c d b . . 
    . b d c d 1 b b b 1 d c d b . . 
    . b d c d 1 b b b 1 d c d b . . 
    . b d c b d d d d d b c d b . . 
    . . b d c c c c c c c d b . . . 
    . . . b d d d d d d d b . . . . 
    . . . . b b b b b b b . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.awards)
scene.cameraFollowSprite(cat)
tiles.placeOnTile(cat, tiles.getTileLocation(2, 14))
tiles.placeOnTile(key, tiles.getTileLocation(14, 14))
cat.ay = 400
controller.moveSprite(cat, 100, 0)
info.setScore(0)
info.startCountdown(100)
forever(function () {
    if (info.score() == 10) {
        coin.destroy(effects.confetti, 500)
        info.stopCountdown()
    }
    if (cat_has_key == true) {
        key.destroy(effects.confetti, 500)
    }
})
