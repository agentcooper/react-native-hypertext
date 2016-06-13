'use strict';

function splitHypertext(params) {
  var htmlTagRegex =/(<[^>]*>)/g;

  var that = this;

  var split = params.input.split(htmlTagRegex).filter(function(s) {
    return s.length > 0;
  });

  return split.reduce(function(res, _, index, arr) {
    if (arr[index].indexOf('<a') !== -1 && arr[index + 2].indexOf('</a>') !== -1) {
      var href = arr[index].match(/href="([^\'\"]+)/)[1];

      res.push(
        params.onLink.call(that, arr[index + 1], href)
      );
      arr.splice(index, 2);
    } else {
      res.push(
        params.onText.call(that, arr[index])
      );
    }
    return res;
  }, []);
}

module.exports = splitHypertext;
