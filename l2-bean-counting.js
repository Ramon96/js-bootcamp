 function countBs(Word){
     let bAmount = 0;
     for(let i=0; i < Word.length; i++){
        if(Word[i] == "B"){
            bAmount += 1;
        }
     }
     return bAmount;
 }

 function countChar(Word, Character){
    let charAmount = 0;
    for(let i=0; i < Word.length; i++){
        if(Word[i] == Character){
            charAmount += 1;
        }
     }
     return charAmount;
 }