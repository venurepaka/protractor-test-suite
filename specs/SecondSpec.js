//Suite in Jasmine
describe('angularjs homepage todo list', function() {
  // Test in Jasmine
  it('should add a todo', function() {
    // Entering application url in browser
    // browser.get('https://www.google.com/');
    // element(by.css('#lst-ib')).sendKeys('walmart');
    // console.log("entered text in search field");

    browser.get('https://angularjs.org');

    element(by.css('li.dropdown:nth-child(1) > a:nth-child(1)')).click();
    console.log("clicked on Learn link in other spec");

  });
});
