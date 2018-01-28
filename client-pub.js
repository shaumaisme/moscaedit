var mqtt    = require('mqtt');
var client  = mqtt.connect('mqtts://sactybroker.herokuapp.com');
 
client.on('connect', function () {
  client.publish('mktech', '{"lat":"161.3123" , "lon":"72.51231"}', {retain: false, qa: 2});
client.end();
});