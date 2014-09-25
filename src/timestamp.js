(function(root) {
    'use strict';

    var Timestamp = {};

    Timestamp.format = function(params) {
        if (params.element.nodeName !== 'time')
            throw new Error('element must be valid time element');
        return;
    };

    if (typeof define !== 'undefined' && define.amd) {
        define(Timestamp);
    } else if (typeof exports === 'object') {
        module.exports = Timestamp;
    } else {
        root.Timestamp = Timestamp;
    }

})(this);
