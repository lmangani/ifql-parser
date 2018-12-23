@builtin "whitespace.ne"
@builtin "number.ne"

comma@{%
var ws = {literal: " "};
var comma = {literal: ","};
var number = {test: function(n) {
        return n.constructor === Number;
      }};
    %}

literal ->
    string {% d => d[0] %}
  | decimal {% d => ({type: 'decimal', value: d[0]}) %}
  | decimal time_range {% d => ({type: 'decimal', value: d[0], range: d[1]}) %}
  | decimal {% d => ({type: 'decimal', value: d[0]}) %}
  | NULLX {% d => ({type: 'null'}) %}
  | TRUE {% d => ({type: 'true'}) %}
  | FALSE {% d => ({type: 'false'}) %}

selection_column_comma_list ->
    selection_column {% d => ({type: 'selection_columns', columns: [d[0]]}) %}
  | selection_column_comma_list _ "," _ selection_column {%
      d => ({
        type: 'selection_columns',
        columns: (d[0].columns||[]).concat([d[4]])
      })
    %}

selection_metric_list ->
    selection_column {% d => ({type: 'selection_columns', columns: [d[0]]}) %}
  | selection_column_comma_list _ " " _ selection_column {%
      d => ({
        type: 'selection_columns',
        columns: (d[0].columns||[]).concat([d[4]])
      })
    %}

main -> literal %comma selection_column_comma_list %ws literal %ws literal
