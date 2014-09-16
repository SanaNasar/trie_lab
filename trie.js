
Trie = function(){
  this.characters = {};
};

Trie.prototype.learn = function(word, index){
  // This function should add the given word,
  // starting from the given index,
  // to this Trie.

  // It will be recursive.  It will tell
  // the correct child of this Trie to learn the word
  // starting from a later index.

  // Consider what the learn function should do
  // when it reaches the end of the word?
  // A word does not necessarily end at a leaf.
  // You must mark nodes which are the ends of words,
  // so that the words can be reconstructed later.

  // char = word[index];

  // if (!this.characters[char]) {
  //   this.characters[char] = new Trie();
  // }

  // if (index < word.length - 1) {
  //   this.characters[char].learn(word, index + 1);
  // }
  //   else {
  //     this.isWord = true;
  //   }

  if(index === undefined){
      index=0;
    }
    if(index<word.length){
      var letter=word[index];
      if(this.characters[letter]===undefined){
        //create new Trie
        this.characters[letter]= new Trie();
      }
      //move on through new or existing Trie
      index++;
      this.characters[letter].learn(word,index);

    }else{

      this.isWord=true;
    }
  };


Trie.prototype.getWords = function(words, currentWord){
  // This function will return all the words which are
  // contained in this Trie.
  // it will use currentWord as a prefix,
  // since a Trie doesn't know about its parents.

  // if is word is true then return all the words
  // if it's not true then call the function
  words = words || [];
  currentWord = currentWord || "";
  if (this.isWord) {
    words.push(currentWord);
  }
  for (var lettr in this.characters)
  {
    this.characters[lettr].getWords(words, currentWord = lettr);
  }
  return words;
};

Trie.prototype.find = function(word, index){
  // This function will return the node in the trie
  // which corresponds to the end of the passed in word.

  // Be sure to consider what happens if the word is not in this Trie.
};

Trie.prototype.autoComplete = function(prefix){
  // This function will return all completions 
  // for a given prefix.
  // It should use find and getWords.
};

try{
  module.exports = Trie;
} catch(e){

}