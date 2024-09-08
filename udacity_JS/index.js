function fisherYatesShuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(fisherYatesShuffle(array));