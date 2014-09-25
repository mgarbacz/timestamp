var expect = require('chai').expect,
    Timestamp = require('../src/timestamp');

describe('Timestamp', function() {
    it('should exist', function() {
        expect(Timestamp).to.be.ok;
    });

    it('should have a format method', function() {
        expect(Timestamp.format).to.be.ok;
        expect(Timestamp.format).to.be.instanceof(Function);
    });

    it('should not accept non-<time> element', function() {
        var fn = function() {
            Timestamp.format({ element: '<p>Not a time element</p>' });
        };

        expect(fn).to.throw(Error, /element must be valid time element/);
    });
});
