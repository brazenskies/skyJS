define(function (require) {
    var tmpl = document.querySelector('template'),
        activityItemProto = Object.create(HTMLElement.prototype),
        activityItem, model;

    activityItemProto.createdCallback = function () {
        var root = this.createShadowRoot();
        root.appendChild(document.importNode(tmpl.content, true));

        root.querySelector('#entry').innerHTML = this.getAttribute('entry');
        root.querySelector('#name').innerHTML = this.getAttribute('name');
        root.querySelector('.userIcon').textContent = getInitials(this.getAttribute("name"));
    }

    activityItem = document.registerElement('activity-item', {
        prototype: activityItemProto
    });

    function getInitials (name) {
        var matches = name.match(/\b(\w)/g);
        return matches.join('');
    }
});