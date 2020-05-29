/*
This problem is an interactive problem new to the LeetCode platform.

We are given a word list of unique words, each word is 6 letters long, and one word in this list is chosen as secret.

You may call master.guess(word) to guess a word.  The guessed word should have type string and must be from the original list with 6 lowercase letters.

This function returns an integer type, representing the number of exact matches (value and position) of your guess to the secret word.  Also, if your guess is not in the given wordlist, it will return -1 instead.

For each test case, you have 10 guesses to guess the word. At the end of any number of calls, if you have made 10 or less calls to master.guess and at least one of these guesses was the secret, you pass the testcase.

Besides the example test case below, there will be 5 additional test cases, each with 100 words in the word list.  The letters of each word in those testcases were chosen independently at random from 'a' to 'z', such that every word in the given word lists is unique.

Example 1:
Input: secret = "acckzz", wordlist = ["acckzz","ccbazz","eiowzz","abcczz"]

Explanation:

master.guess("aaaaaa") returns -1, because "aaaaaa" is not in wordlist.
master.guess("acckzz") returns 6, because "acckzz" is secret and has all 6 matches.
master.guess("ccbazz") returns 3, because "ccbazz" has 3 matches.
master.guess("eiowzz") returns 2, because "eiowzz" has 2 matches.
master.guess("abcczz") returns 4, because "abcczz" has 4 matches.

We made 5 calls to master.guess and one of them was the secret, so we pass the test case.
Note:  Any solutions that attempt to circumvent the judge will result in disqualification.
*/

var findSecretWord = function (wordlist, master) {
  //helper function to compare the amount of character/position matches between two of the strings
  function findMatch(str1, str2) {
    let match = 0;

    for (let i = 0; i < str1.length; i++) {
      if (str1[i] === str2[i]) {
        match++;
      }
    }
    return match;
  }

  //i is representing the max amount of times we can use master.guess
  //n is representing the max amount of char/position matches we can have in a string with a length of 6 (i.e. finding the secret word)
  for (let i = 0, n = 0; i < 10 && n < 6; i++) {
    const count = {};

    //compare ever word in the word list with every other word and isolate all of the words that have 0 matches with each other by putting them inside of our "count" map
    for (const word1 of wordlist) {
      for (const word2 of wordlist) {
        if (findMatch(word1, word2) === 0) {
          if (!count[word1]) count[word1] = 0;
          count[word1]++;
        }
      }
    }

    //create an array that will we will use to hold a word that excludes the zero matches (since it only looks for words that are not inside of count already) and chooses one to be our first guess
    let minimax = [null, Infinity];
    for (const word of wordlist) {
      if (!count[word]) count[word] = 0;
      if (count[word] < minimax[1]) {
        minimax = [word, count[word]];
      }
    }

    //we then use that word that we found above and put into minimax to try as our guess
    n = master.guess(minimax[0]);
    const wordlist2 = [];
    for (const word of wordlist) {
      //n now represents the amount of matching characters/positions we have in our guessed word.
      //we iterate through our word list and isolate only the words with the same amount of positional character matches and apply them to the new word list, making our pool smaller every time

      if (findMatch(minimax[0], word) === n) {
        wordlist2.push(word);
      }
    }
    wordlist = wordlist2;
  }
};
