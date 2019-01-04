const parser = require('../parser')();

var query = "   SELECT host, value, level, alertName FROM alerts WHERE time >= '2018-12-24T14:49:43+01:00' AND time <= '2018-12-25T14:49:43+01:00' ORDER BY time desc";
var res = parser.parse(query.trim());

console.log(JSON.stringify(res,null,2))
