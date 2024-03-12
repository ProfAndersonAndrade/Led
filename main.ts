input.onButtonPressed(Button.A, function () {
    Aleatorio()
    basic.pause(5000)
})
function Aleatorio () {
    pins.analogWritePin(AnalogPin.P0, randint(0, 1023))
    pins.analogWritePin(AnalogPin.P1, randint(0, 1023))
    pins.analogWritePin(AnalogPin.P2, randint(0, 1023))
    basic.showString("RANDOM")
}
function Green () {
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.analogWritePin(AnalogPin.P1, 1023)
    pins.analogWritePin(AnalogPin.P2, 0)
    basic.showString("GREEN")
}
function Blue () {
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P2, 1023)
    basic.showString("BLUE")
}
function Red () {
    pins.analogWritePin(AnalogPin.P0, 1023)
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P2, 0)
    basic.showString("RED")
}
basic.forever(function () {
    Red()
    basic.pause(5000)
    Green()
    basic.pause(5000)
    Blue()
    basic.pause(5000)
})
