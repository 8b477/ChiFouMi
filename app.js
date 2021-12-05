let player = document.getElementById('player');
let computer = document.getElementById('computer');
let won = document.getElementById('won');

//count loose and win
let countWin = 1;
let countLoose = 1;

let countId = document.getElementById('countWin');
let countIdTwo = document.getElementById('countLoose');

//recup mes boutons
btnStone = document.getElementById('pierre');
btnLif= document.getElementById('feuille');
btnScissor = document.getElementById('ciseau');

//table computer
const computerPlay = [btnStone, btnLif, btnScissor];

let jeu = function (elements, equality, loose, win){
    elements.addEventListener('click', function (e){
        let randomNumb = Math.floor(Math.random()*computerPlay.length);

        if(computerPlay[randomNumb] === equality){
            won.innerHTML = "Egalité !"

        }
        else if(computerPlay[randomNumb] === win){
            won.innerHTML = "Gagné !"
            count = countWin++;
            countId.innerHTML = count;
        }
        else{
            won.innerHTML = "Perdu !"
            countWw = countLoose++;
            countIdTwo.innerHTML = countWw;
        }
    })
}

jeu(btnStone, btnStone, btnLif, btnScissor);
jeu(btnLif, btnLif, btnStone, btnScissor);
jeu(btnScissor, btnScissor, btnStone, btnLif);