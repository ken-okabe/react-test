/* jshint node: true */
/* jshint jquery: true */
/* jshint sub: true */
/* global window,document, $,alert,history */

console.log(moment().toString());
console.log(moment().subtract(3, 'seconds').toString());
(function() {

    console.log('----');
    //var ___a = ___(timelineCapacity);
    var ___a = ___();

    //var it = __Natural.getIterator();

    var interval = setInterval(function() {
      //  it.moveNext();

      // math random 1st simple example
      var some1 = ___a.appear(___('NOW').toString());
    }, 1000);

    /*
    var ___b = ___a.map(function(x)
    {
    return x * 2;
    });
    */

    var some2 = ___a.compute(function() {
      //console.log('a: ' + ___a.value(___('NOW')));
      /*
          var dom = < h1 > {
            ___a.value(___('NOW'))
          } < /h1>;

          var c = React
            .render(dom, document.body);
        */
    });

    //====================================

    var timelineCapacity = moment.duration(40, 'seconds');

    var ___cursor = ___();



    var onMouseMove = function(e) {

      var cursor = {
        x: e.clientX,
        y: e.clientY
      };

      ___cursor.appear(cursor);
    };

    var interval2 = setInterval(function() {
      //
      var some1 = ___cursor.appear(___cursor.value(___('NOW')));
    }, 10);

    /* < h1 > {
    cursor.x
  } < /h1>< h1 > {
  cursor.y
} < /h1>*/

//console.log(___('NOW'));
//console.log(moment().subtract(3, 'seconds'));

    var dummy = ___cursor.compute(function() {
        //var cursor = ___cursor.value(___('NOW'));

    //var cursor = ___cursor.value(moment().subtract(3, 'seconds'));
    var cursor = ___cursor.value(___('NOW').subtract(1, 'seconds'))
        var dom = < div >
      <svg height="600" width="600">
      <circle cx={cursor.x} cy={cursor.y} r="20" stroke="black" fill="red" />
      </svg>

      </div > ;

      var c = React
        .render(dom, document.body);

    });









  document.addEventListener("mousemove", onMouseMove);






  //====================================
})();
