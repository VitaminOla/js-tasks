/*
#1 Фильтрация строки
Создать переменную со строковым значением. 
Сформировать переменную которая будет состоять только из ГЛАСНЫХ букв этой строки. 
Результат вывести в консоль.
*/

const string = "Привет! Как дела? Отлично! Юхху!";
const vowels = ["у", "е", "ы", "а", "о", "э", "ё", "я", "и", "ю"];
const getVowels = stringToFilter => {
  let extractedVowels = "";
  for (let i = 0; i < stringToFilter.length; i++) {
  const currentLetter = stringToFilter[i].toLowerCase();
  if (vowels.includes(currentLetter)) {
    extractedVowels += currentLetter;
  }
  };

  return extractedVowels;
}

console.log(getVowels(string));
