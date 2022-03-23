
const container = document.getElementById('container');

//IIFE = Immediately Invoked Function Expression
// Common to prefix private properties w underscore?
const gameboard = (() => {
    'use strict';

    let _board = Array.from({length: 9}, x => 0);

    const addMove = (marker, i) => {
        _board[i] = marker;
        let box = document.querySelector(`[data-index='${i}']`);
        box.innerText = marker;
    }

    const print = () => {
        let display = document.createElement('div');
        display.setAttribute('id', 'gameboard');

        for (let i = 0; i < 9; i++) {
            let box = document.createElement('div');
            box.classList = 'box';
            box.setAttribute('data-index', i);
            display.appendChild(box);
            box.addEventListener('click', () => {
                addMove('x', i);
            })
        }

        container.appendChild(display);
    }

    return {
        print,
        addMove,
    }
})();

const game = (() => {
    'use strict';

    const winningConditions = `
    012
    345
    678

    036
    147
    258
    
    048
    246`;
})();

// factory function for the players
const playerFactory = (name, marker) => {
    const getName = () => name;
    const getMarker = () => marker;
    return {
        getName,
        getMarker,
    }
}

let player1 = playerFactory('One', 'X');
let player2 = playerFactory('Two', 'O');

gameboard.print();