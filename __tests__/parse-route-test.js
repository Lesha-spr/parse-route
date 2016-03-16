jest.dontMock('./../index.js');

var parseRoute;

describe('parse-route', function() {
    parseRoute = require('./../index.js');

    it('should return source string when no params passed', function() {
        expect(parseRoute('/path/to/api')).toBe('/path/to/api');
    });

    it('should remove params from string when there is no values', function() {
        expect(parseRoute('/path/with/:param', {otherParam: 10})).toBe('/path/with/');
    });

    it('should replace params with values', function() {
        expect(parseRoute('/path/:with/some/:param', {with: 'someOtherWith', param: 10})).toBe('/path/someOtherWith/some/10');
    });
});