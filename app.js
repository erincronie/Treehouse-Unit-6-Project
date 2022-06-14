const startButton = document.querySelector('.btn__reset');
const overlay = document.querySelector('.start');
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');

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
    //return arr; - may not need this?
}
addPhraseToDisplay(phraseArray);
// console.log(addRandomPhraseAsArray(phrases));


//check if a letter is in the phrase - check letter function
function checkLetter( button )  {
    const letters = document.querySelectorAll('.letter');
    let match = null;
    let selectLi = document.querySelectorAll('li')
    for ( let i = 0; 1 < letters.length; i++ ){
        if (button.textContent === selectli[i].textContent.toLowerCase()) {
            selectLi[i].classList.add('show');
            match = button;
        }
    }
return match;
}

//listen for the onscreen keyboard to be clicked
qwerty.addEventListener("click", (e) => {
    let btn = e.target;
    if (btn.tagName === "BUTTON") {
      btn.disabled = true;
      btn.className = "chosen";
      let letterFound = checkLetter(btn);
  
      if (letterFound === null) {
        const lost = document.querySelectorAll(".tries img")[missed];
        lost.src = "images/lostHeart.png";
        missed++;
      }
    }
    checkWin();
  });
    //console.log(event.target.textContent);
