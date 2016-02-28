(function (root) {
    'use strict';

    var app,
        listContainer,
        list,
        bulk;

    function attachTo(div_id) {
        /*jslint browser:true */
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
        /*jslint browser:true */
        listContainer.removeChild(list);
        list = document.createElement("ul");
        listContainer.appendChild(list);
    }

    function update() {
        var lines = bulk.value.trim().split('\n'),
            ii,
            li;

        clearList();

        for (ii = 0; ii < lines.length; ii += 1) {
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
