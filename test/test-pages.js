const { expect } = require('chai')
const request = require('request')

describe('Status and Content', () => {
    
    describe('Main page', () => {

        it('status', done => {
            request('http://localhost:8080/', (err, response, body) => {
                expect(response.statusCode).to.equal(200)
                done()
            })
        })

        it('content', done => {
            request('http://localhost:8080/', (err, response, body) => {
                expect(body).to.equal('Hello World')
                done()
            })
        })

    })

    describe('About page', done => {
        it('status', done => {
            request('http://localhost:8080/about', (err, response, body) => {
                expect(response.statusCode).to.equal(404)
                done()
            })
        })
    })

})

// it('Main page content', done => {
//     request('http://localhost:8080', (err, response, body) => {
//         expect(body).to.contain('Hello World')
//         done()
//     })
// })

// it('Main page status', done => {
//     request('http://localhost:8080', (err, response, body) => {
//         expect(response.statusCode).to.equal(200)
//         done()
//     })
// })

// it('About page content', done => {
//     request('http://localhost:8080/about', (err, response, body) => {
//         expect(response.statusCode).to.equal(404)
//         done()
//     })
// })