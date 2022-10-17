radio.setGroup(1)
let move = 4
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) > 1000) {
        // to toBack
        move = 0
    } else if (pins.analogReadPin(AnalogPin.P0) < 10) {
        // to toBottom
        move = 1
    } else if (pins.analogReadPin(AnalogPin.P1) < 10) {
        // to toRight
        move = 2
    } else if (pins.analogReadPin(AnalogPin.P1) > 1000) {
        // to toRight
        move = 3
    } else {
        move = 4
    }
    radio.sendNumber(move)
})
