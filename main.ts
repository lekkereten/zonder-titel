input.onGesture(Gesture.ScreenDown, function () {
    basic.showNumber(6)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showNumber(5)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(1, 6))
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.showNumber(1)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showNumber(4)
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showNumber(2)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showNumber(3)
    for (let index = 0; index < 3; index++) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.pause(100)
    }
})
basic.forever(function () {
    let ogen = 0
    basic.showNumber(ogen)
    for (let index = 0; index <= ogen - 1; index++) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.pause(100)
    }
    basic.pause(2500)
})
