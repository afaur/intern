define([
  'intern!bdd',
  'intern/chai!expect',
  'dojo/node!leadfoot/helpers/pollUntil'
], function (bdd, expect, pollUntil) {
  with(bdd) {
    describe('Search', function() {
      describe('Autocomplete', function() {
        it('foo', function() {
          return this.remote
          .get('http://www.vitals.com')
          .findById('q')
            .click()
            .type('todd')
            .end()
          .then(pollUntil('return (jQuery(".masthead-main-dropdown:visible").length > 0 ? true : null);', 30000))
          .findByCssSelector('.masthead-main-dropdown .provider.first span.name')
          .text()
          .then(function(text) {
            expect(text).to.match(/todd/i)
          });
        });
      });
    });
  }
});
