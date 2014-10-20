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
        var testElement = {};
        testElement.nodeName = 'p';

        var fn = function() {
            Timestamp.format({ element: testElement });
        };

        expect(fn).to.throw(Error, /element must be valid time element/);
    });

    it('should not accept <time> element without valid datetime', function() {
        var testElement = {};
        testElement.nodeName = 'time';
        testElement.attributes = {};

        var fnNoDatetime = function() {
            testElement.attributes.datetime = undefined;
            Timestamp.format({ element: testElement });
        };

        var fnInvalidDatetime = function() {
            testElement.attributes.datetime = 'Invalid datetime';
            Timestamp.format({ element: testElement });
        };

        expect(fnNoDatetime).to
            .throw(Error, /element must have a valid datetime attribute/);
        expect(fnInvalidDatetime).to
            .throw(Error, /element must have a valid datetime attribute/);

    });

    it('should accept a valid time element', function() {
        var testElement = {};
        testElement.nodeName = 'time';
        testElement.attributes = {};
        testElement.attributes.datetime = '2014-01-01T00:00:00.000Z';

        expect(Timestamp.format({ element: testElement })).to.be.ok;
    });

    it('should return self if there are no errors', function() {
        var testElement = {};
        testElement.nodeName = 'time';
        testElement.attributes = {};
        testElement.attributes.datetime = '2014-01-01T00:00:00.000Z';

        expect(Timestamp.format({ element: testElement })).to
            .deep.equal(Timestamp);
    });
});
