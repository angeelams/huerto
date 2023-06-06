let conductividad = 0
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("iluminación")
    basic.showNumber(input.lightLevel())
})
input.onButtonPressed(Button.A, function () {
    basic.showString("temperatura")
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.B, function () {
    basic.showString("humedad")
    conductividad = pins.analogReadPin(AnalogPin.P0)
    basic.showNumber(conductividad)
})
