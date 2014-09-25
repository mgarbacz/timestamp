(function(root) {
    'use strict';

    var Timestamp = {};

    Timestamp.format = function(params) {
        if (params.element.nodeName !== 'time')
            throw new Error('element must be valid time element');
        if (!isDatetime(params.element.attributes.datetime))
            throw new Error('element must have a valid datetime attribute');
        return;
    };

    var isDatetime = function(datetime) {
        var date = new Date(datetime);
        return (date !== "Invalid Date" && !isNaN(date));
    };

    if (typeof define !== 'undefined' && define.amd) {
        define(Timestamp);
    } else if (typeof exports === 'object') {
        module.exports = Timestamp;
    } else {
        root.Timestamp = Timestamp;
    }

})(this);
