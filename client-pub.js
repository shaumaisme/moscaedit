var mqtt    = require('mqtt');
var client  = mqtt.connect('mqtt://sactybroker.herokuapp.com:1883');
 
client.on('connect', function () {
  client.publish('mktech', '{"lat":"161.3123" , "lon":"72.51231"}', {retain: false, qa: 2});
client.end();
});