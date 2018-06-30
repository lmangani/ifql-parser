const parser = require('../parser')();

var res = parser.parse('SELECT mos FROM hepic.autogen.hepic_metrics_calls_total_qos WHERE time > now() - 1h GROUP BY time(3600) FILL(null)');
console.log(JSON.stringify(res,null,2))
