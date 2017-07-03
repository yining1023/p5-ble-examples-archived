const serviceUuid = "19b10000-e8f2-537e-4f6c-d104768a1214"; // lowercase hex characters e.g. '00001234-0000-1000-8000-00805f9b34fb'
const name = 'LEDCB';

var ledCharacteristic;

function connect() {
  let options = {
    filters: [{
      services: [serviceUuid],
      name: name
    }]}

  console.log('Requesting Bluetooth Device...');

  navigator.bluetooth.requestDevice(options)
  .then(device => {
    console.log('Got device', device.name);
    return device.gatt.connect();
  })
  .then(server => {
      console.log('Getting Service...');
      return server.getPrimaryService(serviceUuid);
    })
    .then(service => {
      console.log('Getting Characteristics...');
      return service.getCharacteristics();
    })
    .then(characteristics => {
      console.log('Got LED Characteristic');

      ledCharacteristic = characteristics[0];

      // write 0/1 to led every 1 second
      // let byte = 0;
      // let bufferToSend = Uint8Array.of(byte);
      // console.log('bufferToSend: ', bufferToSend);

      // setInterval(function() {
      //    byte ^= 1;
      //    bufferToSend = Uint8Array.of(byte);
      //    ledCharacteristic.writeValue(bufferToSend);
      // }, 1000);

    })
    .catch(error => {
      console.log('Argh! ' + error);
    });
  }


var input, connectButton, writeButton, intro;

function setup() {
  noCanvas();

  connectButton = createButton('connect');
  connectButton.position(20, 15);
  connectButton.mousePressed(connect);

  input = createInput();
  input.position(20, 85);

  writeButton = createButton('submit');
  writeButton.position(input.x + input.width, 85);
  writeButton.mousePressed(writeToBle);

  intro = createElement('h2', 'Write 1/0 to turn on/off the on-board LED on Arduino 101:');
  intro.position(20, 35);

  textAlign(CENTER);
  textSize(50);
}

function writeToBle() {
  var inputValue = input.value();

  let bufferToSend = Uint8Array.of(inputValue);
  ledCharacteristic.writeValue(bufferToSend);
  console.log('Writing '+ inputValue + ' to led Characteristic...');

}
