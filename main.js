boardArray = [];
count = 1;

function mouseHover(event){
eventTarget = event.target;
eventTarget.setAttribute("fill", "blue");
}

function mouseLeave(event){
    eventTarget = event.target;
    eventTarget.setAttribute("fill", "white");
}

function mouseClick(event){
    x = event.clientX;
    y = event.clientY;

    if(count%2==0){
        outputString = `<use href="#circle" transform="translate(${x-5} ${y-6})"></use>`;
    }else{
        outputString = ` <use href="#xShape" transform="translate(${x} ${y-20})"></use>`
    }
    boardArray.push(outputString);
    count++;
    drawBoard();
}

function drawBoard(){
    outputString="";
    for(i=0;i<boardArray.length;i++){
        outputString += boardArray[i];
    }
    choice.innerHTML=outputString;
}

function clearBoard(){
    boardArray = [];
    drawBoard();
}