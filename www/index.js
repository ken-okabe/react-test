/* jshint node: true */
/* jshint jquery: true */
/* jshint sub: true */
/* global window,document, $,alert,history */


//var timelineCapacity = moment.duration(40, 'seconds');
console.log('----');
//var ___a = ___(timelineCapacity);
var ___a = ___();

//var it = __Natural.getIterator();

var interval = setInterval(function()
{
  //  it.moveNext();

  // math random 1st simple example
  ___a.appear(___('NOW').toString());
}, 1000);

/*
var ___b = ___a.map(function(x)
{
return x * 2;
});
*/

___a.compute(function()
{
  //console.log('a: ' + ___a.value(___('NOW')));

  var dom =< h1 > {___a.value(___('NOW'))} < /h1>;

  var c = React
  .render(dom, document.body );
});
