// app.test.js
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const app = require('./app');

chai.use(chaiHttp);

describe('HTTP Server', () => {
  it('should return "Hello, World!" when GET /', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Hello, World!\n');
        done();
      });
  });
});
