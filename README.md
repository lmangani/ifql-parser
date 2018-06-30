# ifql-parser <img src="https://user-images.githubusercontent.com/1423657/38137158-590eefbc-3423-11e8-96dd-487022b5618c.gif" width=100 />
InfluxDB Query Language parser

### Status

* Work in progress! Testers and Contributors welcome

#### Todo

* Parser
  * [x] Baseline SQL parser
  * [x] FROM parser
  * [x] TIME math
  * [ ] Quotes parser
  * [ ] Cleanup & Tests
* Output
  * [x] JSON output
  * [x] Elastic DSL output
  
### JSON Example
```
const parser = require('ifql-parser')();
parser.parse('SELECT sum("load") AS mean_cpu FROM telegraf.autogen.cpu WHERE time > now() - 6h GROUP BY time(3600)');
```

##### Credits
* Parser built using the [nearley](https://www.npmjs.com/package/nearley) ToolKit
* Grammar baseline forked from [js-sql-parse](https://github.com/justinkenel/js-sql-parse)
