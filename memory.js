let words = JSON.parse(localStorage.getItem('memorizedWords')) || [];
console.log(words);

let startIndex = 0;
let count = 2;

function displayWords() {

    console.log("dunct", words);
    let wordsList = document.querySelector('#words-list');

    /*
step 1
    startIndex = 0
    count = 5
step 2
    startIndex + 5 = 5 + 5 = 10

    step 3

    si = 10 c = 5 = 15 + 5 = 20

    */


    const batch = words.slice(startIndex, startIndex + count);
    startIndex += count;

    batch.forEach(word => {
        console.log(word);
        const wordData = `
        <h1>${word.word}</h1>
        <p><strong>Definition:</strong> ${word.definition}</p>
        <p><strong>Examples:<br></strong> ${word.examples.join('<br>')} </p>
        <p><strong>Synonyms:<br></strong> ${word.synonyms.join('<br>')} </p>
        <p><strong>antonyms:<br></strong> ${word.antonyms.join('<br>')} </p>
        `;
        wordsList.innerHTML += wordData;
    });
}

displayWords();

window.addEventListener('scroll', () => {

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        displayWords();
    }
});