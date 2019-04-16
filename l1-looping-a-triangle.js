let htmlDiv = document.getElementsByTagName("div")[0];

for(let i = 0; i < 8; i++ ){
    for(let y = 0; y < i; y++){
        console.log(" # ");
        htmlDiv.innerHTML += "#";
    }
    console.log("<br>");
    htmlDiv.innerHTML += "<br>";
}