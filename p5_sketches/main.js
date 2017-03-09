const serviceUuid = "19b10000-e8f2-537e-4f6c-d104768a1216"; // lowercase hex characters e.g. '00001234-0000-1000-8000-00805f9b34fb'
const name = 'CurieIMU';

var characteristicX;
var characteristicY;
var characteristicZ;

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
      // Get all characteristics.
      return service.getCharacteristics();
    })
    .then(characteristics => {
      console.log('Got Characteristics');
      characteristicX = characteristics[0];
      characteristicY = characteristics[1];
      characteristicZ = characteristics[2];

      characteristicX.addEventListener('characteristicvaluechanged', handleX);
      characteristicY.addEventListener('characteristicvaluechanged', handleY);
      characteristicZ.addEventListener('characteristicvaluechanged', handleZ);

    })
    .catch(error => {
      console.log('Argh! ' + error);
    });
  }

function startNotify() {
  characteristicX.startNotifications()
  characteristicY.startNotifications()
  characteristicZ.startNotifications()
}

function handleX(event) {
  let value = event.target.value.getUint8(0);
  console.log('> X-Axis: ' + value);
}

function handleY(event) {
  let value = event.target.value.getUint8(0);
  console.log('> Y-Axis: ' + value);
}

function handleZ(event) {
  let value = event.target.value.getUint8(0);
  console.log('> Z-Axis: ' + value);
}
