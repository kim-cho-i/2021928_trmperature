basic.forever(function () {
    basic.showNumber(input.temperature())
})
basic.forever(function () {
    if (25 <= input.temperature() && 29 > input.temperature()) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P5, 0)
    } else if (29 <= input.temperature() && 30 > input.temperature()) {
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.digitalWritePin(DigitalPin.P5, 0)
    } else if (30 <= input.temperature() && 31 > input.temperature()) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P5, 1)
    } else {
    	
    }
})
