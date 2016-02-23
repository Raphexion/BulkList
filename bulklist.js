(function (root) {
  var bulklist = {};

  bulklist.attach_to = function (document, div_id) {
    var words = [];

    var div = document.getElementById(div_id);
    var list = document.createElement("ul");
    var bulk = document.createElement("textarea");
    bulk.cols = "100";
    bulk.rows = "80";
    div.appendChild(list);
    div.appendChild(bulk);

    function update() {
      var lines = bulk.value.split('\n');
      for (var ii=0; ii<lines.length; ii++) {
        console.log(lines[ii]);
      }
    };

    bulk.addEventListener('keypress', update);
  };

  root.bulklist = bulklist;
}(this));
