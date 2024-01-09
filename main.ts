input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P2, 180)
})
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P2, 0)
})
let i = 0
basic.showIcon(IconNames.Yes)
OLED12864_I2C.init(60)
OLED12864_I2C.invert(false)
OLED12864_I2C.zoom(true)
basic.forever(function () {
    OLED12864_I2C.showNumber(
    i % 12,
    i % 4,
    i,
    1
    )
    basic.pause(1000)
    OLED12864_I2C.rect(
    0,
    0,
    60,
    30,
    1
    )
    i += 1
    OLED12864_I2C.rect(
    32,
    32,
    40,
    20,
    1
    )
    if (i % 12 == 0) {
        OLED12864_I2C.clear()
    }
})
