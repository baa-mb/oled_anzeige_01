let i = 0
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
    i += 1
})
