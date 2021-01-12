const { expect } = require('chai')
const supertest = require('supertest')
const app = supertest(require('../app'))

describe('Status and Content', () => {

    describe('Main page', () => {

        it('status', function (done) {
            app.get('/').expect(200, done)
        })

        it('content', function (done) {
            app.get('/').expect('Hello World', done)
        })

    })

    describe('About page', () => {

        it('status', function (done) {
            app.get('/about').expect(200, done)
        })

        it('content', function (done) {
            app.get('/about')
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err)
                    expect(res.text).to.contain('About')
                    return done()
                })
        })

    })

})