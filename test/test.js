
process.env.NODE_ENV = 'test';
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');
var should = chai.should();

chai.use(chaiHttp);
describe('Mathfun', () => {
    beforeEach((done) => {
        done();
    });

    describe('/GET Mathfun', () => {
        it('it should GET Mathfun', (done) => {
            chai.request(server)
                .get('/Mathfun.html')
                .end((err, res) => {
                    res.should.have.status(200)
                    done();
                });
        });
    });

    describe('/GET Trangchu', () => {
        it('it should GET Trangchu', (done) => {
            chai.request(server)
                .get('/Trangchu.html')
                .end((err, res) => {
                    res.should.have.status(200)
                    done();
                });
        });
    });


    describe('/GET Luyentap', () => {
        it('it should GET Luyentap', (done) => {
            chai.request(server)
                .get('/Luyentap.html')
                .end((err, res) => {
                    res.should.have.status(200)
                    done();
                });
        });
    });
    describe('/GET Kiemtra', () => {
        it('it should GET Kiemtra', (done) => {
            chai.request(server)
                .get('/Kiemtra.html')
                .end((err, res) => {
                    res.should.have.status(200)
                    done();
                });
        });
    });
    describe('/GET Giaitri', () => {
        it('it should GET Giaitri', (done) => {
            chai.request(server)
                .get('/Giaitri.html')
                .end((err, res) => {
                    res.should.have.status(200)
                    done();
                });
        });
    });
    
    describe('/GET Lienhe', () => {
        it('it should GET Lienhe', (done) => {
            chai.request(server)
                .get('/Lienhe.html')
                .end((err, res) => {
                    res.should.have.status(200)
                    done();
                });
        });
    });
});
