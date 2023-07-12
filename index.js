// document.querySelector('#search-btn').addEventListener('click', async () => {
//     let word = document.querySelector('#search-input');
//     let option = document.querySelector('#search-option').value;
//     let resultsDiv = document.querySelector('#results');

//     let response = await fetch('./words.json');
//     let words = await response.json();

//     const wordData = words.find(currentWord => currentWord.word === word.value);

//     if (!wordData) {
//         resultsDiv.innerHTML = '<p>Word not found</p>';
//         word.value = "";
//         return;
//     }


//     let html = `<h1>${wordData.word}</h1>`;
//     // other info goes here

//     if (option === 'definition' || option === 'all') {
//         html += `<p><strong>Definition:</strong> ${wordData.definition}</p>`;
//     }

//     if (option === 'examples' || option === 'all') {
//         html += `<p><strong>Examples:<br></strong> ${wordData.examples.join('<br>')} </p>`;
//     }

//     if (option === 'synonyms' || option === 'all') {
//         html += `<p><strong>Synonyms:<br></strong> ${wordData.synonyms.join('<br>')} </p>`;
//     }

//     if (option === 'antonyms' || option === 'all') {
//         html += `<p><strong>antonyms:<br></strong> ${wordData.antonyms.join('<br>')} </p>`;
//     }

//     html += `<input type="checkbox"  id="memorize-${wordData.word}"> Memorize This word`;

//     resultsDiv.innerHTML = html;

//     let memorizedWord = JSON.parse(localStorage.getItem('memorizedWords')) || [];
//     const memorizedIndex = memorizedWord.map(e => e.word).indexOf(wordData.word);


//     document.querySelector(`#memorize-${wordData.word}`).checked = memorizedIndex > -1;

//     document.querySelector(`#memorize-${wordData.word}`).addEventListener('change', (e) => {

//         let memorizedWords = JSON.parse(localStorage.getItem('memorizedWords')) || [];

//         if (e.target.checked) {
//             const index = memorizedWords.map(e => e.word).indexOf(wordData.word);
//             if (index === -1) {
//                 memorizedWords.push(wordData);
//             }
//         } else {
//             // remove from the list 
//             // 1. check from the list
//             // 2. remove from the list

//             const index = memorizedWords.map(e => e.word).indexOf(wordData.word);

//             // const index = memorizedWords.indexOf(wordData.word);

//             if (index > -1) {
//                 memorizedWords.splice(index, 1);
//             }
//         }
//         localStorage.setItem('memorizedWords', JSON.stringify(memorizedWords));
//     });
// });



// Create a person object
const person = {
    name: 'John',
    age: 25,
};

// Access properties directly on the object
console.log(person.name);  // Output: John
console.log(person.age);// Output: 25

person.greet = function () {
    console.log('Hello');
};

// Access properties through the prototype
console.log(person.toString());  // Output: [object Object]
