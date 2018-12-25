const parser = require('../parser')();

//var res = parser.parse('SELECT mean("free") AS "mean_free" FROM telegraf.autogen.mem WHERE time > now() - 1h GROUP BY time(3600) FILL(null)');
//console.log(JSON.stringify(res,null,2))

var res = parser.parse('SELECT mean("hepsize") AS "mean_hepsize" FROM "hepic_statistics"."autogen"."hepic_statistics_proto" WHERE time > now() - 5m FILL(null)');
console.log(JSON.stringify(res,null,2))
