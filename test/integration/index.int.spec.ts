var request = require('request');

test('Main page content', function(done) {
    request('http://localhost:3000' , function(_error: any, _response: any, body: any) {
        expect(body).toBe('Hello World');
        done();
    });
});