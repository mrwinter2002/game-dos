controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -70
})
let mySprite: Sprite = null
tiles.setTilemap(tiles.createTilemap(hex`1000100000000000030000000000000000000000000000000200010101000101000000000101010000000000000000000000000000000000000000000000000000000003000000010101000000000000000000020000000000000001010000000000010000000000000001000000000000010000000000010100000000000101000000000101000000000001010000000000000000000001010100000000000000000000000000000000000000000000000000000101010100000000000000010101010100000000000101010101000000000000010101010000000000000001010100000000000000000000000000000000000001010101010101010101010101010101`, img`
    . . . . . . . . . . . . . . . . 
    . . . . 2 . 2 2 2 . 2 2 . . . . 
    2 2 2 . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 2 2 2 . . . . . . . . . 2 
    . . . . . . . 2 2 . . . . . 2 . 
    . . . . . . 2 . . . . . . 2 . . 
    . . . 2 2 . . . . . 2 2 . . . . 
    2 2 . . . . . 2 2 . . . . . . . 
    . . . 2 2 2 . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    2 2 2 2 . . . . . . . 2 2 2 2 2 
    . . . . . 2 2 2 2 2 . . . . . . 
    2 2 2 2 . . . . . . . 2 2 2 . . 
    . . . . . . . . . . . . . . . . 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, [myTiles.transparency16,sprites.castle.tilePath2,sprites.dungeon.floorLight0,myTiles.tile1], TileScale.Sixteen))
scene.setBackgroundColor(9)
mySprite = sprites.create(img`
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
scene.cameraFollowSprite(mySprite)
tiles.placeOnTile(mySprite, tiles.getTileLocation(8, 14))
mySprite.ay = 40
controller.moveSprite(mySprite)
