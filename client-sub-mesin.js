var mqtt    = require('mqtt');
var client  = mqtt.connect('mqtts://sactybroker.herokuapp.com');
 
client.on('connect', function () {
  client.subscribe('mktech/mesin');
 
client.on('message', function (topic, message) {
  console.log(message.toString());
// client.end();
  });
});
