const startButton = document.querySelector('.btn__reset');
const overlay = document.querySelector('.start');
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase ul');

let missed = 0; 
let phrases = [
'Single Ladies',
'Shake it Off',
'Rolling in the Deep',
'Hips dont Lie',
'Poker Face'
];

const phraseArray = getRandomPhraseAsArray(phrases);

//listen for the start game button to be pressed
 startButton.addEventListener('click', e => {
    overlay.style.display = 'none'});

//return a random phrase from an array
function getRandomPhraseAsArray(arr) {
    let random = Math.floor(Math.random() * arr.length);
    let randomPhrase = arr[random].toLowerCase();
    let newPhrase = randomPhrase.split('');
    return newPhrase;
}

//adds the letters of a string to the display
function addPhraseToDisplay(arr) {
    for (let i = 0; i < arr.length; i++ ) { 
        const ul = document.querySelector('ul');
        const li = document.createElement('li');
        li.textContent = arr[i];
        ul.appendChild(li);
        if (li.textContent !== ' ') {
            li.className = 'letter';
        } else {
            li.className = 'space';
        }
    }
    return arr; 
}
addPhraseToDisplay(phraseArray);
// console.log(addRandomPhraseAsArray(phrases));


//check if a letter is in the phrase - check letter function
function checkLetter (button) {
    const letters = document.querySelectorAll('ul li');
    let match = null;
    for (let i = 0; i < letters.length; i++ ){
        const letterContent = letters[i].textContent;
        if (button === letterContent.toLowerCase()) {
            letters[i].classList.add('show');
            match = button;
        }
    }
return match;
}

//listen for the onscreen keyboard to be clicked
qwerty.addEventListener("click", (e) => {
    const button = e.target;
    const buttonContent = button.textContent;
    if (button.tagName === 'BUTTON') {
        button.className = 'chosen'; 
        button.disabled = 'true';

    const letterFound = checkLetter(buttonContent);
    if (letterFound === null) {
        const hearts = document.querySelectorAll('.tries img');
        hearts[missed].src = 'images/lostHeart.png';
        missed ++;
        }
    }
    checkWin();
});
    //console.log(event.target.textContent);


//check if the game has been won or lost
function checkWin() {
    const letter = document.querySelectorAll('.letter');
    const show = document.querySelectorAll('.show');
    let title = document.querySelector('.title');
    if (letter.length === show.length){
        overlay.className = 'win';
        title.textContent = 'YOU WIN!';
       overlay.style.display = "flex";
       
    } else if ( missed > 4 ) {
        overlay.className = 'lose';
        title.textContent = 'YOU LOSE!';
        overlay.style.display = 'flex';
    }
}


