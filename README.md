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
parser.parse('SELECT sum('load') AS mean_cpu FROM telegraf.autogen.cpu WHERE time > now() - 6h GROUP BY time(3600)');
```
##### Output
```javascript
{ referencedTables: [ 'cpu' ],
  createdTables: undefined,
  sourceTables: [ 'cpu' ],
  operation: 'select',
  parsed:
   { type: 'select',
     top: undefined,
     all_distinct: undefined,
     selection:
      { type: 'selection_columns',
        columns:
         [ { type: 'column',
             expression:
              { type: 'function_call',
                name: { value: 'sum' },
                parameters: [ { type: 'string', string: 'load' } ] },
             alias: { type: 'identifier', value: 'mean_cpu' } } ] },
     table_exp:
      { type: 'from_table',
        from:
         { type: 'from',
           table_refs:
            [ { type: 'table', table: 'cpu', db: 'telegraf', ret: 'autogen' } ] },
        where:
         { type: 'where',
           condition:
            { type: 'operator',
              operator: '>',
              left: { type: 'identifier', value: 'time' },
              right:
               { type: 'operator',
                 operator: '-',
                 left:
                  { type: 'function_call',
                    name:
                     { value: 'now',
                       from_timestamp: 1545482191716,
                       to_timestamp: 1545482213317 },
                    parameters: [] },
                 right:
                  { type: 'decimal',
                    value: 6,
                    range: { type: 'data_type', data_type: 'hour', size: undefined } } } } },
        groupby:
         { type: 'group_by',
           columns:
            { type: 'selection_columns',
              columns:
               [ { type: 'column',
                   expression:
                    { type: 'function_call',
                      name: { value: 'time' },
                      parameters: [ { type: 'decimal', value: 3600 } ] } } ] } },
        having: undefined,
        order: undefined } },
  joins: [],
  returnColumns: [ { name: 'mean_cpu', sourceColumns: [] } ] }
```

##### Credits
* Parser built using the [nearley](https://www.npmjs.com/package/nearley) ToolKit
* Grammar baseline forked from [js-sql-parse](https://github.com/justinkenel/js-sql-parse)
