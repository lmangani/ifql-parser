# ifql-parser <img src="https://user-images.githubusercontent.com/1423657/38137158-590eefbc-3423-11e8-96dd-487022b5618c.gif" width=100 />
InfluxDB Query Language parser using [nearley](https://www.npmjs.com/package/nearley) grammar

### Status

* Work in progress! Testers and Contributors welcome

#### Todo

* [x] Baseline SQL parser
* [x] FROM parser
* [ ] TIME math
* [ ] Quotes parser

### Example
```
const parser = require('ifql-parser')();
parser.parse('SELECT sum("load") AS mean_cpu FROM telegraf.autogen.cpu WHERE time > now() GROUP BY time(3600)');
```

##### Credits
IFQL variant based on [js-sql-parse](https://github.com/justinkenel/js-sql-parse)
