const Gpio = require('onoff').Gpio;
const temp_sensor_pin = new Gpio(2, 'in');


temp_sensor_pin.watch((err, value) => console.log(value));