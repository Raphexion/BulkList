(function (root) {
  var bulklist = {};

  bulklist.attach_to = function (document, div_id) {
    var div = document.getElementById(div_id);
    var list = document.createElement("ul");
    var bulk = document.createElement("textarea");
    bulk.cols = "100";
    bulk.rows = "80";
    div.appendChild(list);
    div.appendChild(bulk);
  };

  root.bulklist = bulklist;
}(this));
