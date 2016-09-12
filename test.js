var should = require('should');

var stringModule = require('./index.js')


describe('Test url-string-api module, ', function () {

  var URL = "http://abc.def/ghi/jkl/pic.jpg"
  var dirtyURL = "http://abc.def/ghi/jkl/pic.jpg"

  before(function (done) {
    done();
  });

  after(function (done) {
    done();
  });

  it('hostname:', function (done) {
    stringModule.hostname(URL).should.be.eql('abc.def')
    done()
  })
  it('urlFileName:', function (done) {
    stringModule.urlFileName(URL).should.be.eql('pic.jpg')
    done()
  })
  it('urlGetPath:', function (done) {
    stringModule.urlGetPath(URL).should.be.eql('http://abc.def/ghi/jkl')
    done()
  })
})