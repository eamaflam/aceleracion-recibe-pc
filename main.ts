radio.onReceivedNumber(function (receivedNumber) {
    led.plotBarGraph(
    receivedNumber / 1000,
    8
    )
    if (receivedNumber / 1000 >= 8) {
        basic.showIcon(IconNames.StickFigure)
        basic.showNumber(8)
        music.play(music.tonePlayable(988, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
    } else if (receivedNumber / 1000 >= 4 && receivedNumber / 1000 < 5) {
        basic.showNumber(4)
        music.play(music.tonePlayable(880, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
    }
    serial.writeValue("y", receivedNumber)
})
input.onButtonPressed(Button.A, function () {
    basic.showString("R")
    basic.clearScreen()
})
radio.setGroup(13)
serial.writeLine("aceleracion")
