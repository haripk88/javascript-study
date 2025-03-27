let yourChoice;
let computerChoice;

function randamNumber() {
        let number = Math.random()*3;
    
        if(0 <= number && number <= 1){
            return 'bat';
        }else if( 1< number && number <= 2){
            return 'ball';
        }else{
            return 'stump';
        }
}

function finalResult(yourChs, compChs){
    let result;
    if(yourChs == 'bat' && compChs == 'ball'){
       result='You won the match.';
    }else if(yourChs == 'bat' && compChs == 'stump'){
       result='Computer won';
    }else if(yourChs == 'bat' && compChs == 'bat'){
       result='The match is draw.';
    }else if(yourChs == 'ball' && compChs == 'stump'){
      result='You win';
    }else if(yourChs == 'ball' && compChs == 'bat'){
        result ='Computer won';
    }else if(yourChs == 'ball' && compChs == 'ball'){
       result='The match is draw.';
    }else if(yourChs == 'stump' && compChs == 'stump'){
        result='The match is draw';
    }else if(yourChs == 'stump' && compChs == 'ball'){
        result='Computer won';
    }else if(yourChs == 'stump' && compChs == 'bat'){
        result='You won.';
    }

    document.querySelector('#result').innerHTML= result;

}

function batChoosen(){
    yourChoice = 'bat';
computerChoice = randamNumber();
finalResult(yourChoice, computerChoice);
}

function ballChoosen(){
    yourChoice = 'ball';
computerChoice = randamNumber();
finalResult(yourChoice, computerChoice);

}

function stumpChoosen(){
    yourChoice = 'stump';
computerChoice = randamNumber();
finalResult(yourChoice, computerChoice);

}