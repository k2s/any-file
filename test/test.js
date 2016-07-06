var fs = require('fs'),
    assert = require('assert'),
    AnyFile = require('../'),
    anyfile;

describe('anyfile', function () {
  this.timeout(5000);
  
  beforeEach(function(done){
    anyfile = new AnyFile();
    done();
  });

  afterEach(function(done){
    done();
  });

  it('should have main methods', function () {
    assert.ok(anyfile.from);
  });

  it('s3 copy', function (done) {
    anyfile.from("s3://accesskey:secretkey@bucket:/path/to/file.csv").to("file.csv", function(err, res) {
      if (fs.exists('file.csv')) {
        fs.unlinkSync('file.csv');
      }
      assert.ok(res);
      done();
    });
  });

  it('ftp copy', function (done) {
    anyfile.from("ftp://anonymous:miemail%40gmail.com@speedtest.tele2.net/100KB.zip").to("100KB.zip", function(err, res) {
      if (fs.exists('100KB.zip')) {
        fs.unlinkSync('100KB.zip');
      }
      assert.ok(res);
      done();
    });
  });

  it('http copy', function (done) {
    anyfile.from("http://speedtest.tele2.net/100KB.zip").to("100KB.zip", function(err, res) {
      if (fs.exists('100KB.zip')) {
        fs.unlinkSync('100KB.zip');
      }
      assert.ok(res);
      done();
    });
  });

  it('http auth copy', function (done) {
    anyfile.from("http://anonymous:miemail%40gmail.com@speedtest.tele2.net/100KB.zip").to("100KB.zip", function(err, res) {
      if (fs.exists('100KB.zip')) {
        fs.unlinkSync('100KB.zip');
      }
      assert.ok(res);
      done();
    });
  });


  it('sftp copy', function (done) {
    anyfile.from("sftp://demo:password@test.rebex.net/readme.txt").to("readme.txt", function(err, res) {
      if (fs.exists('readme.txt')) {
        fs.unlinkSync('readme.txt');
      }
      assert.ok(res);
      done();
    });
  });

});
