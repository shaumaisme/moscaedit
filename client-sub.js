var mqtt    = require('mqtt');
var client  = mqtt.connect('mqtts://sactybroker.herokuapp.com');
 
client.on('connect', function () {
  client.subscribe('mktech');
 
client.on('message', function (topic, message) {
  console.log(message.toString());
  client.publish('mktech/mesin', '{"mesin":"0"}', {retain: false, qa: 2});
// client.end();
  });
});
