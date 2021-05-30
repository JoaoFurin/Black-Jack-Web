
function randomValue() {

    min = Math.ceil(1);
    max = Math.floor(13);
    var rdn = Math.floor(Math.random() * (max - min)) + min;
    return rdn;

}

var score1 = 0;
var score2 = 0;

function player1() {

    var randomScore1 = randomValue();
    var cards1 = document.getElementById("cards1");
    $(cards1).attr("src", '/images/' + randomScore1 + '.png');
    score1 += randomScore1;
    document.getElementById('score1').innerHTML = score1;    
    
}

function player2() {

    var randomScore2 = randomValue();
    var cards2 = document.getElementById("cards2");
    $(cards2).attr("src", '/images/' + randomScore2 + '.png');
    score2 += randomScore2;
    document.getElementById('score2').innerHTML = score2;  

}

function results() {
    if (score1 == 21) {
        document.getElementById('result').innerHTML = 'PLAYER 1 WINS';
    }
    else if (score2 == 21) {
        document.getElementById('result').innerHTML = 'PLAYER 2 WINS';
    }
    else if (score1 <= 21 && score2 <= 21) {
        if (score1 > score2)
            document.getElementById('result').innerHTML = 'PLAYER 1 WINS';
        else
            document.getElementById('result').innerHTML = 'PLAYER 2 WINS';
    }
    else if (score1 > 21 && score2 <= 21) {
        document.getElementById('result').innerHTML = 'PLAYER 2 WINS';
    }
    else if (score2 > 21 && score1 <= 21) {
        document.getElementById('result').innerHTML = 'PLAYER 1 WINS';
    }
    else if (score1 == score2) {
        document.getElementById('result').innerHTML = 'DRAW';
    }
    else
        document.getElementById('result').innerHTML = 'NO WINNERS';
}

function stop1() {

    var playOne = document.getElementById("playOne");
    var playTwo = document.getElementById("playTwo");
    var stopOne = document.getElementById("stopOne");
    var stopTwo = document.getElementById("stopTwo");

    $(playOne).attr('disabled', 'disabled');
    $(stopOne).attr('disabled', 'disabled');

    $(playTwo).removeAttr('disabled', 'disabled');
    $(stopTwo).removeAttr('disabled', 'disabled');
}

function stop2() {

    var playOne = document.getElementById("playOne");
    var playTwo = document.getElementById("playTwo");
    var stopOne = document.getElementById("stopOne");
    var stopTwo = document.getElementById("stopTwo");

    $(playTwo).attr('disabled', 'disabled');
    $(stopTwo).attr('disabled', 'disabled');

    $(stopTwo).attr(results());

}
