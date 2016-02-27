(function (root) {
    'use strict';

    var words = [],
        app,
        listContainer,
        list,
        bulk;

    function attachTo(document, div_id) {
        app = document.getElementById(div_id);
        listContainer = document.createElement("div");
        listContainer.id = div_id.concat("_list");
        list = document.createElement("ul");
        bulk = document.createElement("textarea");
        bulk.id = div_id.concat("_bulk");
        bulk.cols = "50";
        bulk.rows = "30";
        listContainer.appendChild(list);
        app.appendChild(listContainer);
        app.appendChild(bulk);
    }

    function clearList() {
        listContainer.removeChild(list);
        list = document.createElement("ul");
        listContainer.appendChild(list);
    }

    function update() {
        var lines = bulk.value.trim().split('\n'),
            ii,
            li;

        clearList();

        for (ii = 0; ii < lines.length; ii++) {
            li = document.createElement('li');
            li.innerHTML = lines[ii];
            list.appendChild(li);
        }
    }

    var bulklist = {
        attachTo: attachTo,
        update: update
    };

    root.bulklist = bulklist;
}(this));
