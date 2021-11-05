let Temperatura = 0
music.setVolume(255)
basic.forever(function () {
    if (input.temperature() < 17) {
        music.ringTone(262)
        basic.showIcon(IconNames.Chessboard)
    }
})
basic.forever(function () {
    if (input.temperature() > 17) {
        music.ringTone(392)
        basic.showIcon(IconNames.Square)
    }
})
basic.forever(function () {
    Temperatura = input.temperature()
    basic.showNumber(Temperatura - 3)
})
