// Rover Object Goes Here{
// ======================
let  rover =  {
  direction: 'N',
}
// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");

if(rover.direction == 'N'){
  rover.direction = 'W'
}
else if(rover.direction == 'W'){
  rover.direction = 'S'
}

else if (rover.direction == 'S'){
  rover.direction = 'E'
}
else if(rover.direction == 'E'){
  rover.direction = 'N'
}

}

function turnRight(rover){
  console.log("turnRight was called!");

if(rover.direction == 'N'){
  rover.direction = 'E'
}

else if(rover.direction == 'W'){
  rover.direction = 'S'
}

else if(rover.direction == 'S'){  
rover.direction = 'W'
}

else if(rover.direction == 'W'){
  rover.direction = 'N'
}


}

function moveForward(rover){
  console.log("moveForward was called")
}
