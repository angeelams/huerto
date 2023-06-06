basic.forever(function () {
    basic.showString("temperatura")
    basic.showNumber(Environment.dht11value(Environment.DHT11Type.DHT11_temperature_C, DigitalPin.P1))
    basic.showString("humedad")
    basic.showNumber(Environment.dht11value(Environment.DHT11Type.DHT11_humidity, DigitalPin.P1))
    basic.pause(2000)
    if (Environment.dht11value(Environment.DHT11Type.DHT11_temperature_C, DigitalPin.P1) >= 25) {
        music.playMelody("C5 B A G F E D C ", 120)
    }
})
