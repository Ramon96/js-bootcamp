function min(value1, value2){
    if (value1 > value2){
        return value2;
    }
    else
    {
        return value1;
    }
 }


 // recursion for the bonus :)

 function isEven(N){
    if(N==0){
        return true;
    }
    else if (N==1){
        return false;
    }
    else{
        N -= 2;
        return isEven(N);
    }
 }