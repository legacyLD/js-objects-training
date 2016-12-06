/*

  Create a function `letterCount` that accepts a string, and finds the number of times each letter
  occurs in the string. For example, given the word "apple", letterCount("apple") should count all
  occurrences of the letters "a", "p", "l" and "e" and then return the following output:

  ```javascript
  {
    "a": 1,
    "p": 2,
    "l": 1,
    "e": 1
  }
  ```

  Bonuses
  - Make sure that lower case letters and upper case letters count for the same character.
  - Ignore spaces, special characters, and punctuation.
  - Instead of just counting letters, calculate their percent-based frequency.
    See: http://www.math.cornell.edu/~mec/2003-2004/cryptography/subs/frequencies.html

    ```javascript
    {
      "a": 0.2, // percent
      "p": 0.4,
      "l": 0.2,
      "e": 0.2
    }
    ```

*/
function letterCount(word) {
    var lowerCase = word.toLowerCase();
    var letters = lowerCase.split("");
    var aCount = 0;
    var bCount = 0;
    var cCount = 0;
    var dCount = 0;
    var eCount = 0;
    var fCount = 0;
    var gCount = 0;
    var hCount = 0;
    var iCount = 0;
    var jCount = 0;
    var kCount = 0;
    var lCount = 0;
    var mCount = 0;
    var nCount = 0;
    var oCount = 0;
    var pCount = 0;
    var qCount = 0;
    var rCount = 0;
    var sCount = 0;
    var tCount = 0;
    var uCount = 0;
    var vCount = 0;
    var wCount = 0;
    var xCount = 0;
    var yCount = 0;
    var zCount = 0;
    letters.forEach(function(letter) {
      console.log(letter);
      var arrayOfLetters = [];
      if (letter==="a") {
        console.log("a works");
        arrayOfLetters.push('a');
      }
  });
};
