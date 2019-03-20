const monthlyRainfall = [23, 13, 27, 20, 20, 31, 33, 26, 19, 12, 14, 12, 10];

const totalRainfall = monthlyRainfall.reduce(
  (totalRain, currentMonthRain) => totalRain + currentMonthRain
);

console.log(totalRainfall);

const words = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]

const sentence = words.reduce((fullSentence, currentWord) => fullSentence + " " + currentWord)

console.log(sentence)
