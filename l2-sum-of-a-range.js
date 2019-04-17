 function isEven(N){
    if(N==0){
        return true;
    }
    else if (N==1){
        return false;
    }
    else{
        N -= 2;
        isEven(N);
    }
 }