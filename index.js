var csswhat = require('CSSwhat');

function createSelector(cssSelector) {
  var selectors = csswhat(cssSelector);

  return function(name, attribs) {
    var subselect;
    var subselect_satisfied;
    var selector;

    for(var i=0; i<selectors.length; i++) {
      subselect = selectors[i];
      subselect_satisfied = true;
      for(var j=0; j<subselect.length; j++) {
        selector = subselect[j];
        if (!testSelector(selector, name, attribs)) {
          // if any of the selectors in the sub-select are not satisfied break from the sub-select
          subselect_satisfied = false;
          break;
        }
      }

      // if one of the sub-select is satisfied return true
      if (subselect_satisfied) return true;
    }

    return false;
  };
}

function testSelector(selector, name, attribs) {
  if (selector.type === 'tag') {
    return name === selector.name;
  }

  if (selector.type === 'attribute') {
    if (selector.action === 'equals') {
      return attribs[selector.name] === selector.value;
    }

    if (selector.action === 'element') {
      var elements = attribs[selector.name].split(' ');
      return elements.indexOf(selector.value) !== -1;
    }
  }

  return false;
}

exports.createCSSSelector = createSelector;
