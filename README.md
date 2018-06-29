# ifql-parser
InfluxDB Query Language parser

### Status

* Work in progress! Testers and Contributors welcome

#### Todo

* [x] Baseline SQL parser
* [x] FROM parser
* [ ] TIME parser
* [ ] Quotes parser

### Example
```
const parser = require('ifql-parser')();
parser.parse('SELECT sum("load") AS mean_cpu FROM telegraf.autogen.cpu WHERE time > now() GROUP BY time(3600)');
```
