var expect = require('chai').expect,
    Timestamp = require('../src/timestamp');

describe('Timestamp', function() {
    var timestamp;

    it('should exist', function() {
        timestamp = new Timestamp();
        expect(timestamp).to.be.ok;
    });
    
    it('should return like Date with no arguments', function() {
       timestamp = new Timestamp();
       var date = new Date();
       expect(timestamp).to.equal(date);
    });
});
