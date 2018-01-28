var mqtt    = require('mqtt');
var client  = mqtt.connect('mqtt://sactybroker.herokuapp.com:1883');
 
client.on('connect', function () {
  client.subscribe('mktech');
 
client.on('message', function (topic, message) {
  console.log(message.toString());
  client.publish('mktech/mesin', '{"mesin":"0"}', {retain: false, qa: 2});
// client.end();
  });
});
