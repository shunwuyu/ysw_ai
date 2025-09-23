const WordDictory = function() {
  // 初始化一个对象字面量，承担map的角色
  this.words = {};
}
WordDictory.prototype.addWord = function(word) {
  if (this.words[word.length]) {
    this.words[word.length].push(word);
  } else {
    this.words[word_length] = [word];
  }
}

WordDictory.prototype.search = function(word) {
  if (!this.words[word.length]) {
    return false;
  }
  const len = word.length;
  // 正则来搜
  if (!word.includes('.')) {
    return this.words[len].includes(word);
  }

  const reg = new RegExp(word);
  return  this.words[len].some(item => reg.test(item));
}