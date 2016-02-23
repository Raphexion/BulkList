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
        list = document.createElement("ul");
        bulk = document.createElement("textarea");
        bulk.cols = "100";
        bulk.rows = "80";
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
