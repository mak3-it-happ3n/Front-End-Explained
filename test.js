const deck = document.querySelector('.deck');

const nodeList = document.querySelectorAll('.card');
let list = Array.from(nodeList); //turns that list into an array



list = shuffle(list);

function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
  }



for (let i = 0; i < list.length; i++) {
  deck.children[i].innerHTML = list[i].innerHTML;
};

let a = list[0].innerHTML;
let b = deck.children[0].innerHTML;

console.log(a);
console.log(b);
