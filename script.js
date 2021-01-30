// for (x=0; x<9; x++) {
//     let board = document.createElement('div');
//     board.className = 'bubble';
//     document.getElementById('board').appendChild(board);
// }

let arrayOfElements = [];

let elem = document.createElement('div');
elem.id = 'bubble';
elem.className = 'bubble';
elem.innerText = '10+6';
let playField = document.querySelector('.playing-field');
playField.appendChild(elem);

for (let i = 0; i <= 4; i++) {
	arrayOfElements[i] = elem;
}

function MoveDrop() {    
    let pos = 0;
    let id = setInterval(frame, 10);

    function frame() {
        // console.log(elem.getBoundingClientRect());
        if (pos == document.documentElement.clientHeight - waves.offsetHeight) {
            elem.remove();
            wavesIncrease();
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = `${pos}px`;
        }
    }
}


window.onload = function() {
    MoveDrop()
};

// let copy = elem.cloneNode(true);
// playField.appendChild(copy);

// if ()



// setInterval(MoveDrop, 5000);

// CALC

let arrOfNambers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    buttons = document.querySelector('.control__keyboard'),
    numbers = document.querySelectorAll('.control__button'),
    clearBtn = document.querySelector('.control__button--clear'),
    deleteBtn = document.querySelector('.control__button--delete'),
    result = document.querySelector('.control__button--enter'),
    display = document.querySelector('.control__display');


const numberPress = (number) => {
        if(display.value === '0') {
                display.value = number;
        } else {
            display.value += number;
        };
};


const clear = () => {
    display.value = '';
};

const deleteChar = () => {
    display.value = display.value.slice(0, display.value.length - 1);
}

clearBtn.addEventListener('click', clear);
deleteBtn.addEventListener('click', deleteChar);

buttons.addEventListener('click', function(event) {
    const content = event.target.innerText;
    if(!content) return;
    else if (arrOfNambers.some(item => item === content)) {
        numberPress(content);
    }
})

const checkAnswer = () => {
    if (display.value === '16') {
        console.log(display.value);
        elem.remove();
        clear();
    } else {
        console.log('wrong!')
        clear();
        wavesIncrease();
    }
}

result.addEventListener('click', checkAnswer);


// BUBBLE

// WAVES

// const drop = () => {
//     if (elem.style.top = 500 + 'px') {
//         elem.remove();
//     }
// }

let waves = document.querySelector('.playing-field__wave');

const wavesIncrease = () => {   
    waves.style.height = `${waves.offsetHeight + 40}px`;
}

// const touchWawes = () => {
// let rect = elem.getBoundingClientRect();
//     if (rect.top === 771 + 'px') {
//         elem.remove();
//         wavesIncrease();
//         console.log('ddd')
// }
// }




// if (waves.style.height = `${waves.offsetHeight + 150}px`) {
//         document.location.href = './result.html';
// }
// let numberOfLives = 3;


