/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
  // 1901 start, need to make prefix tree
  // 1908 realize i need more robust nodes for prefix tree UGH
  // 1914 recreate complex prefix tree real fast in original implementation
  var ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
  if(ALPHABET.length !== 26) throw new Error('Typo in ALPHABET');
  
  if(!products || !searchWord) return null;
  
  // make prefix tree
  var dictionary = {};
  
  products.forEach((product) => {
    addToDictionary(product.split(''), dictionary);
  });
  
  function addToDictionary(name, dictionary) {
    var [firstLetter, ...remainder] = name;
    dictionary[firstLetter] = dictionary[firstLetter] || {};
    
    if(name.length === 1) {
      dictionary[firstLetter].isWord = true;
    } else {
      // no risk of stack overflow bc no product name is 50k-60k letters long
      addToDictionary(remainder, dictionary[firstLetter])
      // time + space complexity for .join() is O(N * M), where N is number of products and M is length of product name (which can probably be considered a constant)
    }
  }
  
  var allSuggestions = [];
  // then process searchWord
  for(var i = 0; i < searchWord.length; i++) {
    var searchPosition = dictionary;
    var subsearch = ''
    for(var j = 0; j <= i; j++) {
      var letter = searchWord[j];
      subsearch = subsearch + letter;
      searchPosition = searchPosition[letter] || {};
    }
    // find 3 suggestions
    var suggestions = findSuggestions(searchPosition, subsearch).slice(0, 3);
    allSuggestions.push(suggestions)
  }
  
  return allSuggestions;
  
  function findSuggestions (searchPosition, subsearch) {
    var solution = [];
    if(searchPosition.isWord) solution.push(subsearch)
    
    ALPHABET.split('').forEach(letter => {
      if(searchPosition[letter]) solution = solution.concat(findSuggestions(searchPosition[letter], subsearch + letter))
    })
    
    return solution;
  }
  // finish writing 1st draft 1925
  // 1931 still debugging failed tests..
  // 1935 FK, i forgot to do solution = solution.concat
};
