define([
  'intern!bdd',
  'intern/chai!expect',
  'dojo/node!leadfoot/helpers/pollUntil'
], function (bdd, expect, pollUntil) {
  with(bdd) {
    // New group of tests called `Search`
    describe('Search', function() {
      // New nested group of tests called `Autocomplete`
      describe('Autocomplete', function() {
        // New test called `foo`
        it('foo', function() {
          // remote is the remote request object
          return this.remote
          // Load the vitals website
          .get('http://www.vitals.com')
          // Find the query input box
          .findById('q')
            // Click the input box
            .click()
            .type('todd')
            // Finish typing
            .end()
          // Pause/wait
          // Using jquery to check .masthead-main-dropdown visibility until it is shown
          .then(pollUntil('return (jQuery(".masthead-main-dropdown:visible").length > 0 ? true : null);', 30000))
          // Once the drop down is visible then find the first result span under provider
          .findByCssSelector('.masthead-main-dropdown .provider.first span.name')
          // Get the text value of the span (providers name)
          .text()
          // Use the value we got from the span to compare it with what we expect to be there
          .then(function(text) {
            expect(text).to.match(/todd/i)
          });
        });
      });
    });
  }
});

