# ifql-parser <img src="https://user-images.githubusercontent.com/1423657/38137158-590eefbc-3423-11e8-96dd-487022b5618c.gif" width=100 />
InfluxDB Query Language parser

### Status

* Work in progress! Testers and Contributors welcome

#### Todo

* [x] Baseline SQL parser
* [x] FROM parser
* [x] TIME math
* [ ] Quotes parser

### Example
```
const parser = require('ifql-parser')();
parser.parse('SELECT sum("load") AS mean_cpu FROM telegraf.autogen.cpu WHERE time > now() GROUP BY time(3600)');
```

##### Credits
* Parser built using the [nearley](https://www.npmjs.com/package/nearley) ToolKit
* Grammar baseline forked from [js-sql-parse](https://github.com/justinkenel/js-sql-parse)
