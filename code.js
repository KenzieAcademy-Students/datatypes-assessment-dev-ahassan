let textArea = document.getElementById("text");
let results = document.getElementById("results");

// Your Code Here.

textArea.addEventListener("keyup", function() {
  let text = textArea.value;

  // Count vowels and punctuation
  let vowels = {a: 0, e: 0, i: 0, o: 0, u: 0};
  let punctuation = {period: 0, comma: 0, exclamation: 0, questionMark: 0};
  for (let i = 0; i < text.length; i++) {
    let char = text.charAt(i).toLowerCase();
    if (char in vowels) {
      vowels[char]++;
    } else if (char === '.') {
      punctuation.period++;
    } else if (char === ',') {
      punctuation.comma++;
    } else if (char === '!') {
      punctuation.exclamation++;
    } else if (char === '?') {
      punctuation.questionMark++;
    }
  }

  // Count characters and words
  let numCharacters = text.length;
  let words = text.match(/[^\s]+/g);
  let numWords = words ? words.length : 0;

  // Finding the longest and shortest words:
  let longestWord = words ? words.reduce((a, b) => a.length >= b.length ? a : b, '') : '';
  let shortestWord = words ? words.reduce((a, b) => a.length <= b.length ? a : b, words[0]) : '';

  // Finding last three words:
  let lastThreeWords = words ? words.slice(-3) : [];

  // Find Waldo indexes
  let waldoIndexes = [];
  let waldoRegex = /waldo/gi;
  let match;
  while (match = waldoRegex.exec(text)) {
    waldoIndexes.push(match.index);
  }

  // Rendering the results to the page
  let output = `
    <div class="column">
    <h1>Text Analysis</h1>

      <h2>Vowels</h2>
      <ul>
        <li>a: ${vowels.a}</li>
        <li>e: ${vowels.e}</li>
        <li>i: ${vowels.i}</li>
        <li>o: ${vowels.o}</li>
        <li>u: ${vowels.u}</li>
      </ul>
      <h2>Punctuation</h2>
      <ul>
        <li>Period: ${punctuation.period}</li>
        <li>Commas: ${punctuation.comma}</li>
        <li>Question Marks: ${punctuation.questionMark}</li>
        <li>Exclamation Points: ${punctuation.exclamation}</li>
        
      </ul>
    </div>
    <div class="column">
      <h2>Characters</h2>
      <p>${numCharacters}</p>
      <h2>Words</h2>
      <p>${numWords}</p>
      <h2>Longest Word</h2>
      <p>${longestWord}</p>
      <h2>Shortest Word</h2>
      <p>${shortestWord}</p>
      <h2>Last Three Words</h2>
      <p>${lastThreeWords.join(' ')}</p>
      <h2>Waldo Indexes</h2>
      <p>${waldoIndexes.join('')}</p>
    </div>
  `;
  results.innerHTML = output;
});