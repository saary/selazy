var assert = require("assert");
var Selazy = require('../index.js');

var $ = Selazy.createCSSSelector;

describe('Selazy', function(){
  describe('createCSSSelector', function(){
    it('should detect tag', function() {
      var input = ['div', {}];
      var selector = $('div');

      var res = selector.apply(this, input);
      assert.ok(res);
    });

    it('should detect id', function() {
      var input = ['div', { id: 'id'}];
      var selector = $('#id');

      var res = selector.apply(this, input);
      assert.ok(res);
    });

    it('should detect class', function() {
      var input = ['div', { id: 'id', class: 'class1 class2'}];
      var selector = $('.class2');

      var res = selector.apply(this, input);
      assert.ok(res);
    });

    it('should detect div with a specific class', function() {
      var input = ['div', { id: 'id', class: 'class1 class2'}];
      var selector = $('div.class2');

      var res = selector.apply(this, input);
      assert.ok(res);
    });

    it('should not detect link with a specific class', function() {
      var input = ['div', { id: 'id', class: 'class1 class2'}];
      var selector = $('link.class2');

      var res = selector.apply(this, input);
      assert.ok(!res);
    });

    it('should detect div or link', function() {
      var input = ['div', {}];
      var selector = $('div, link');
      var res = selector.apply(this, input);
      assert.ok(res);

      input = ['link', {}];
      res = selector.apply(this, input);
      assert.ok(res);
    });
  });
});