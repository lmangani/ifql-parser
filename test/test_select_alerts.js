const parser = require('../parser')();

var res = parser.parse("SELECT host, value, level, alertName FROM alerts WHERE time >= '2018-12-24T134237+0100' AND time <= '2018-12-25T134237+0100' ORDER BY time desc");

console.log(JSON.stringify(res,null,2))
