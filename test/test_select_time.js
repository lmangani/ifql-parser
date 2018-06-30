const parser = require('../parser')();

var res = parser.parse('SELECT mean("free") AS "mean_free" FROM telegraf.autogen.mem WHERE time > now() - 6h GROUP BY time(3600) FILL(null)');
console.log(JSON.stringify(res,null,2))
