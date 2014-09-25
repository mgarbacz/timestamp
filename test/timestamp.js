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

    it('should not accept invalid <time> element', function() {
        expect(Timestamp.format('<p>')).to.not.be.ok;
    });
});
