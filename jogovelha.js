

var player = "Cup";

var numJog = 0;

var playing = true;

//verificação das colunas 
var wins = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
]

function checkjogo(id) {

    // alert(pc);

    var slot = document.getElementById(id);


    if (slot.style.backgroundImage == "" && playing) {


        document.getElementById(id).style.backgroundImage = `url("img/${player}.png")`;

        numJog++;
        if (checkwin()) {

            // alert("Fim de jogo " + player + "  venceu!" );
            document.getElementById('print1').innerHTML = ("Fim de jogo!! " + player + " venceu!🎉");
            var imgwinn = document.getElementById('imgwin');
            imgwinn.src = `img/${player}.png`;
            document.getElementById('imgwin').style.display = 'block';
            endgame();
            return false;

        }


        if (numJog >= 9) {
            // alert("Fim de jogo!! deu velha!!!");
            document.getElementById('print2').innerHTML = "Fim de jogo!! deu velha!!!";
            document.getElementById('imgvelha').style.display = 'block';
            document.getElementById('print2').style.display = 'block';
            endgame();
            return false;

        }
        //trocando os players
        player = (player == "Cup" ? "mug" : "Cup");

        var pc = document.getElementById('_bot').checked;

        if (pc && player == "mug") {
            bot();
        }


    }



}

//bot para jogar contra
function bot() {
    if (document.getElementById('c5').style.backgroundImage == '') {
        return checkjogo('c5'); // Funcão de checkjogo
    }

    var slot = document.getElementById(`c${Math.floor(Math.random() * 9 + 1)}`);
    if (slot.style.backgroundImage == '') {

        return checkjogo(slot.id);
    }

    return bot();
}


function checkwin() {
    //pegar todos voids e verifica vitoria uma por uma
    for (win of wins) {

        let one = document.getElementById(`c${win[0]}`).style.backgroundImage;
        let two = document.getElementById(`c${win[1]}`).style.backgroundImage;
        let three = document.getElementById(`c${win[2]}`).style.backgroundImage;

        if (one == two && one == three && one != '') {
            return true;
        }
    }
    return false;
}

function endgame() {

    playing = false;

}

function restart() {
    //reiniciar game
    document.getElementById('print1').style.display = 'none';
    document.getElementById('print2').style.display = 'none';
    document.getElementById('imgwin').style.display = 'none';
    document.getElementById('imgvelha').style.display = 'none';
    document.querySelectorAll("tr td").forEach((slot) => {
        slot.style.backgroundImage = "";
    })
    playing = true;
    numJog = 0;

}
