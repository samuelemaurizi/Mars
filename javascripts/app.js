

var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
}

var obstacles = [
	[null, 'O', null, null, null, null, null, null, null, null],
	[null, 'O', null, null, null, null, null, null, null, null],
	[null, null, null, null, 'O', null, null, null, null, null],
	[null, 'O', null, null, null, null, null, null, null, null],
	[null, null, null, null, 'O', null, null, null, null, null],
	[null, null, null, null, 'O', null, null, null, null, null],
	[null, null, null, null, null, null, null, 'O', null, null],
	[null, null, 'O', 'O', null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null, null, 'O'],
	[null, null, null, null, null, null, 'O', null, null, null],
];

function turnLeft(){
  switch (rover.direction){
    case "N":
    rover.direction = "W";
    break;
    case "W":
    rover.direction = "S";
    break;
    case "S":
    rover.direction = "E";
    break;
    case "E":
    rover.direction = "N";
    break;
  }
  console.log("turnLeft was called! " + "Current direction is: " + rover.direction);
}

function turnRight(){
  switch (rover.direction){
    case "N":
    rover.direction = "E";
    break;
    case "E":
    rover.direction = "S";
    break;
    case "S":
    rover.direction = "W";
    break;
    case "W":
    rover.direction = "N";
    break;
  }
  console.log("turnRight was called! " + "Current direction is: " + rover.direction);
}

function moveForward(){
  if (rover.direction === "N" && rover.y > 0){
    rover.y += -1;
    // if (checkObstacles()){rover.y += 1;}
    console.log("Current positon is: " + "y " + rover) //It shows nothing
  }
  else if (rover.direction === "W" && rover.x > 0){
    rover.x += -1;
    // if (checkObstacles()){rover.x += 1;}
  }
  else if (rover.direction === "S" && rover.y < 10){
    rover.y += +1;
    // if (checkObstacles()){rover.y += -1;}
  }
  else if (rover.direction === "E" && rover.x < 10){
    rover.x += +1;
    // if (checkObstacles()){rover.x += -1;}
  }
  else {
		console.log("You must stay inside the 10x10 grid! Position: " + rover.x + ", " + rover.y);
	}
  rover.travelLog.push("(x: " + rover.x + ", y: " + rover.y + ", Dir: " + rover.direction + ")")
  console.log("moveForward was called! x: " + rover.x + " y: " + rover.y);
}

function moveBackward(){
  if (rover.direction === "N" && rover.y < 10){
    rover.y += 1;
    console.log("Current positon is: " + "y " + rover)
  }
  else if (rover.direction === "W" && rover.x < 10){
    rover.x += 1;
  }
  else if (rover.direction === "S" && rover.y > 0){
    rover.y += -1;
  }
  else if (rover.direction === "E" && rover.x > 0){
    rover.x += -1;
  }
  else {
		console.log("You must stay inside the 10x10 grid! Position: " + rover.x + ", " + rover.y);
	}
  rover.travelLog.push("(x: " + rover.x + ", y: " + rover.y + ", Dir: " + rover.direction + ")")
  console.log("moveBackward was called! x: " + rover.x + " y: " + rover.y);
}

function command(str) {
  // Check invalid input
  for (var e = 0; e < str.length ; e++){
    if (str[e] !== "l" && str[e] !== "r" && str[e] !== "f" && str[e] !== "b"){
      return "Invalid input! Sorry dude. Valid input are 'l' 'r' 'f' 'b'.";
    }
  }

  for (var i = 0; i < str.length; i++){
    switch (str[i]) {
      case "l":
        turnLeft();
        break;
      case "r":
        turnRight();
        break;
      case "f":
        moveForward();
        break;
      case "b":
        moveBackward();
        break;
    }
  }
  console.log(rover.travelLog);
}

/* function checkObstacles(){
	for (var r = 0; r < obstacles.length; r++){
		for (var c = 0; c < obstacles[r].length; c++){
			if (obstacles[r][c] === "O"){
				console.log("Obstacle found at: x " + c + " y " + r);
				return true;	
			}
		}
	}
} */

command("rffrfflfrff");
