let i;
let y;
let board = "";
let tileColor = 0;
let size = 8;

for(i = 0; i < size; i++){
    for(y = 0; y < size; y++){
        tileColor ++;
        if (tileColor % 2){
            board += "[ ]";
        }
        else{
            board += "[#]";
        }
    }
    tileColor ++;
    board += "\n";
}
console.log(board);