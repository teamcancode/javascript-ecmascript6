function findWord(str) {
    const arrWords = str.split(/\s*(?:[, ]|$)\s*/);
    const wordMap = {};
    const result = [];

    for (let word of arrWords) {
        wordMap[word] = word in wordMap ? wordMap[word] + 1 : 1;
    }

    for (let word in wordMap) {
        if (wordMap.hasOwnProperty(word) && wordMap[word] > 1) {
            result.push(word);
        }
    }

    return result;
}

console.log(findWord('Nguyen Huu Binh, Hoang Thi Thu Huong, Le Hung Tinh, Pham Anh Dai, Nguyen Tan Khoa, Nguyen Hong Ha, Tran Thi Hong Hue, ...'));
