(function () {
    'use strict';

    var items = {
        hook: document.querySelector('.hook'),
        panel: document.querySelector('.panel')
    };
    var clickHandler = function () {
        var isHidden = items.panel.hidden;

        if(isHidden) {
            items.panel.hidden = false;

            return;
        }

        items.panel.hidden = true;
    };

    items.hook.addEventListener('click', clickHandler);
}());
