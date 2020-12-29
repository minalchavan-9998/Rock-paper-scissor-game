// challenge-3

function rps(yourchoice) {

    console.log(yourchoice);
    var humanchoice, botchoice;
    humanchoice = yourchoice.id;
    botchoice = numtochoice(randomrsp());
    console.log('computer choice ' + botchoice);
    result = decidedwinner(humanchoice, botchoice);    // [0,1] human =lost [1,0] human won [0.5,0.5] you tied
    console.log(result);
    message = finalmsg(result);
    console.log(message);      // {'message':'you won' , 'color':'green'}
    rpsfrontend(yourchoice.id , botchoice,message);
}

function randomrsp() {

    return Math.floor(Math.random() * 3);
}

function numtochoice(number) {
    return ['rock', 'paper', 'scissor'][number]
}

function decidedwinner(yourchoice, botchoice) {
    var rpsdatabase = {
        'rock': { 'scissor': 1, 'rock': 0.5, 'paper': 0 },
        'paper': { 'rock': 1, 'paper': 0.5, 'scissor': 0 },
        'scissor': { 'paper': 1, 'scissor': 0.5, 'rock': 0 },
    }
    var score = rpsdatabase[yourchoice][botchoice];
    var computerscore = rpsdatabase[botchoice][yourchoice];

    return [score, computerscore];

}

function finalmsg([score, computerscore]) {
    if (score === 0) {
        return { 'message': 'You lost' , 'color':"red"};
    }

    else if (score === 0.5) {
        return { 'message': 'You Tied!!' , 'color':"yellow"};

    }
    else {
        return { 'message': 'you won' , 'color':"green"};
    }
}

function rpsfrontend(humanimagechoice, botimagechoice, finalmsg) {
    var imgdatabase={
        'rock': document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissor':document.getElementById('scissor').src
    }

    // remove img

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    var humandiv=document.createElement('div');
    var botdiv=document.createElement('div');
    var messagediv=document.createElement('div');

    humandiv.innerHTML = "<img src= '" +  imgdatabase[humanimagechoice] + " '  height=150  width=150 style='box-shadow: 0px 10px 50px rgba(37,50,223,1);'>"
    messagediv.innerHTML="<h1 style='color: " +finalmsg['color'] + "; font-size:60px; padding:30px;'>" + finalmsg['message'] + "</h1>";


    botdiv.innerHTML = "<img src= '" +  imgdatabase[botimagechoice] + " '  height=150  width=150 style='box-shadow: 0px 10px 50px rgba(248,38,24,1);'>"


    document.getElementById('flex-box-div').appendChild(humandiv);
    document.getElementById('flex-box-div').appendChild(messagediv);
    document.getElementById('flex-box-div').appendChild(botdiv);

      

}










