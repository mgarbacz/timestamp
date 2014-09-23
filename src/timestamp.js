(function(root) {
    'use strict';

    var Timestamp = function() {
        return new Date();
    };

    if (typeof define !== 'undefined' && define.amd) {
        define(Timestamp);
    } else if (typeof exports === 'object') {
        module.exports = Timestamp;
    } else {
        root.Timestamp = Timestamp;
    }

})(this);
