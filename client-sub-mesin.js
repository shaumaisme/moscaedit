var mqtt    = require('mqtt');
var client  = mqtt.connect('mqtt://sactybroker.herokuapp.com1883');
 
client.on('connect', function () {
  client.subscribe('mktech/mesin');
 
client.on('message', function (topic, message) {
  console.log(message.toString());
// client.end();
  });
});
