# ifql-parser
InfluxDB Query Language parser


### Example
```
const parser = require('ifql-parser')();
var res = parser.parse('SELECT sum("load") AS mean_cpu FROM telegraf.autogen.cpu WHERE time > now() GROUP BY time(3600)');
```
