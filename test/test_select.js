const parser = require('../parser')();

var res = parser.parse('SELECT mean("mos") AS mean_mos, sum("jitter") AS mean_jitter FROM hepic.autogen.hepic_metrics_calls_total_qos WHERE time > now() GROUP BY time(3600)');

console.log(JSON.stringify(res,null,2))
