const fashionArticles = [
  { name: 'Poppy', type: 'tshirt', color: 'red' },
  { name: 'Jumping', type: 'occhiali', color: 'blue' },
  { name: 'CrissCross', type: 'scarpe', color: 'black' },
  { name: 'Jenny', type: 'borsa', color: 'pink' },
]

const generateRandomChar = () => {
  const char= 'abcdefghijklmnopqrstuvwxyz'
  return char[Math.floor(Math.random() * char.length)];
}

const editFashionArticles = fashionArticles.map((article) => {
  const pos = generateRandomChar();
  return { ...article, pos };
})

console.log(fashionArticles)
console.log(editFashionArticles)