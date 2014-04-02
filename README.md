selazy
======

Lazy CSS selector one element at a time

##Exmaple

```javascript
var selazy = require('selazy');
var $ = selazy.createCSSSelector;

var selector = $('div.class2');

var match = selector('div', { id: 'id', class: 'class1 class2'});
console.log('Do we have a match?', match);
```
