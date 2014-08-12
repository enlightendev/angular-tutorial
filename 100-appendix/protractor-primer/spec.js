/**
 * This shows how protractor testing combines the Jasmine interface/syntax and protractor api.
 * The describe and it syntax is from the Jasmine framework.
 * browser is a global created by Protractor, which is used for browser-level commands
 */
describe('angularjs homepage', function() {
    it('should add one and two', function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys(1);
        element(by.model('second')).sendKeys(2);

        element(by.id('gobutton')).click();

        expect(element(by.binding('latest')).getText()).
            toEqual('5'); // This is wrong!
    });
});