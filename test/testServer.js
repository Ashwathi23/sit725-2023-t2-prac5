const { expect } = require("chai");
const request = require("request");
let url = 'http://localhost:3001/api/cat';

let cat = {
    title: 'Test title',
    path: 'images/astro main.jpeg',
    subTitle: 'test subtitle',
    description: 'Test description'
}

describe('test GET', function () {
    it('returns statusCode of 200', function (done) {
        request(url, function (a, b, c) {
            console.log(arguments);
            let responseObj = JSON.parse(c);
            expect(responseObj.statusCode).to.equal(200);
            done();
        });
    });
});

describe('test POST', function () {
    it('post cat to DB', function (done) {
        request.post({ url: url, form: cat }, function (error, response, body) {
            body = JSON.parse(body)
            expect(body.message).to.contain('success');
            done();
        });

    });

});

describe('test delete', function () {
    it('delete a cat from DB', function (done) {
        request.delete({ url: url, form: cat }, function (error, response, body) {
            body = JSON.parse(body)
            expect(body.message).to.contain('success');
            done();
        });
    });
});