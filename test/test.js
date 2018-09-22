const assert = require('assert');
const expect = require('chai').expect;
const request = require('supertest');
const app = require('../server/index');

describe.only('GET /', function () {
  it('should respond with index.html', function (done) {
    request(app)
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200, done);
  });
});