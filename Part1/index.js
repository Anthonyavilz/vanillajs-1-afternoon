let progress = [];

function play(clickedBox){
   let playerSpan = document.getElementById("player")
   let clickedElement = document.getElementById(clickedBox)
   if (playerSpan.innerText === "X"){
         playerSpan.innerText = 'O'
         clickedElement.innerText = 'X'
         progress[clickedBox] = 'X'
   } else {
        playerSpan.innerText = 'X'
        clickedElement.innerText = 'O'
        progress[clickedBox] = 'O'
   }


let topLeft = progress[0];
let topCenter = progress[1];
let topRight = progress[2];
let middleLeft = progress[3];
let middleCenter = progress[4];
let middleRight = progress[5];
let bottomLeft = progress[6];
let bottomCenter = progress[7];
let bottomRight = progress[8];

if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight){
    alert(`${topLeft} is the Winner`);
    // document.location.href=""
    return
}
if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight){
    alert(`${middleLeft} is the Winner`);
    // document.location.href=""
    return
}
if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight){
    alert(`${bottomLeft} is the Winner`);
    // document.location.href=""
    return
}
if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft){
    alert(`${topLeft} is the WInner`);
    // document.location.href=""
    return
}
if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter){
    alert(`${topCenter} is the Winner`);
    // document.location.href=""
    return
}
if (topRight !== undefined && topRight === middleRight && topRight === bottomRight){
    alert(`${topRight} is the Winner`);
    // document.location.href=""
    return
}
if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight){
    alert(`${topLeft} is the Winner`);
    // document.location.href=""
    return
}
if (topRight !== undefined && topRight === middleCenter && topRight === bottomLeft){
    alert(`${topRight} is the Winner`);
    // document.location.href=""
    return
}
let boardFull = true;
  for (let i = 0; i <= 8; i++) {
    if (progress[i] === undefined) {
      boardFull = false;
    }
  }
  if (boardFull === true) {
    alert("Cat's game, there is no winner");
  }
}



function reset(){
    document.getElementById('reset')
    document.location.href=""
}