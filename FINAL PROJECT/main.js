//Osu Mania Game

//Set up the game Canvas Area
let cnv = document.getElementById("gameBoard");
let ctx = cnv.getContext("2d");
cnv.width = 600
cnv.height = 800
ctx.font = "30px Arial";


//Event Listeners
document.addEventListener('keydown', keyPressed)

//Global Variables

let noteBlocks = [];


//Establish key letters
let keyBind1 = "D"
let keyBind2 = "F"
let keyBind3 = "J"
let keyBind4 = "K"

let color = ["yellow", "pink", "yellow", "white"]

//Variables for game
let speed = 10
let score = 0
let miss = 0

let endGame = false
let playGame = false

// Main Program Loop
requestAnimationFrame(draw);

function draw() {
    // Logic

    // Drawing
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    //Clicking Area letter for each block
    clickArea(0, "yellow", 0, keyBind1, 65)
    clickArea(150, "pink", 150, keyBind2, 215)
    clickArea(300, "yellow", 300, keyBind3, 360)
    clickArea(450, "white", 450, keyBind4, 515)


    //Draw Noteblocks 
    for (let i = 0; i < noteBlocks.length; i++) {
        ctx.drawNoteBlocks(noteBlocks[i].xLocation, noteBlocks[i].yLocation, noteBlocks[i].x, noteBlocks[i].y, randomSetColor(i))
    }

    // Request another Animation Frame
    requestAnimationFrame(draw);
}


// Helper Functions

//When the key is being Pressed
function keyPressed() {

    //Keys needed for game 

    //Key D is pressed
    if (event.code == 'KeyD') {
        console.log("DEEZ NUTS")
        keyBind1 = ""

        for (let i = 0; i < noteBlocks.length; i++) {
            if (noteBlocks[i].yLocation < 700 && noteBlocks[i].yLocation > 580 && noteBlocks[i].xLocation == 0) {
                noteBlocks.splice(i, 1)
                score++
                document.getElementById("score").innerHTML= score
            }
        }

    }

    //Key F is pressed
    else if (event.code == 'KeyF') {
        console.log("FEEZ NUTS")
        keyBind2 = ""
        for (let i = 0; i < noteBlocks.length; i++) {
            if (noteBlocks[i].yLocation < 700 && noteBlocks[i].yLocation > 580 && noteBlocks[i].xLocation == 150) {
                noteBlocks.splice(i, 1)
               score++
               document.getElementById("score").innerHTML= score
            }
        }

    }

    //Key J is pressed
    else if (event.code == 'KeyJ') {
        console.log("JEEZ NUTS")
        keyBind3 = ""
        for (let i = 0; i < noteBlocks.length; i++) {
            if (noteBlocks[i].yLocation < 700 && noteBlocks[i].yLocation > 580 && noteBlocks[i].xLocation == 300) {
                noteBlocks.splice(i, 1)
               score++
               document.getElementById("score").innerHTML= score
            }
        }

    }

    //Key K is pressed
    else if (event.code == 'KeyK') {
        console.log("KEEZ NUTS")
        keyBind4 = ""
        for (let i = 0; i < noteBlocks.length; i++) {
            if (noteBlocks[i].yLocation < 700 && noteBlocks[i].yLocation > 580 && noteBlocks[i].xLocation == 450) {
                noteBlocks.splice(i, 1)
                score++
                document.getElementById("score").innerHTML= score
            }
        }

    }
}



//Create Block
ctx.fillBlock = function (x1, y1, x2, y2, Color) {
    ctx.beginPath();
    ctx.rect(x1, y1, x2, y2);
    ctx.fillStyle = Color;
    ctx.fill();
}

//Create NoteBlocks
ctx.drawNoteBlocks = function (x1, y1, x2, y2, color) {
    ctx.beginPath();
    ctx.rect(x1, y1, x2, y2);
    ctx.fillStyle = color;
    ctx.fill();
}

//Create stroke
ctx.strokeBlock = function (x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.rect(x1, y1, x2, y2);
    ctx.strokeStyle = "grey";
    ctx.stroke();
}

//Make Note Blocks
function randomSetValue() {
    let randomVal = Math.randomInt(1, 5)
    if (randomVal == 1) {
        return 0
    }
    else if (randomVal == 2) {
        return 150
    }
    else if (randomVal == 3) {
        return 300
    }
    else if (randomVal == 4) {
        return 450
    }

}

//Display Colour according to xLocation
function randomSetColor(position) {
    if (noteBlocks[position].xLocation == 0) {
        return color[0]
    }
    else if (noteBlocks[position].xLocation == 150) {
        return color[1]

    }
    else if (noteBlocks[position].xLocation == 300) {
        return color[2]
    }
    else if (noteBlocks[position].xLocation == 450) {
        return color[3]
    }
}

//Pushing in blockValues
function noteBlockVals() {
    noteBlocks.push({
        xLocation: randomSetValue(),
        yLocation: -50,
        x: 150,
        y: 70,
    })
}


//Times when to push next block
setTimeout(makeBlocks, 0)
function makeBlocks() {
    noteBlocks.push({
        xLocation: randomSetValue(),
        yLocation: -70,
        x: 150,
        y: 70,
    })
    setTimeout(makeBlocks, 3 * 1000 / speed);

}

//Make Blocks Falls
var falling = setInterval(blockSpeed, 50/3);
function blockSpeed() {
    speed += 0.001
    //Program Speed
    for (let i = 0; i < noteBlocks.length; i++) {
        noteBlocks[i].yLocation += speed
        document.getElementById("speed").innerHTML = Math.round(speed)

        //Remove a noteblock when it reaches the end
        if (noteBlocks[i].yLocation > cnv.height) {
            noteBlocks.splice(i, 1)
            miss++
            document.getElementById("misses").innerHTML = miss
        }
        //Set losing Screen and retry screen
        if (miss == 50){
            clearInterval(falling)
            endGame = true
            noteBlocks = []
        }
    }
}

//Click Area Vals
function clickArea(fillXLocation, fillColor, strokeXLocation, keyBindNumber, keyBindXLocation) {
    ctx.fillBlock(fillXLocation, 650, 150, 70, fillColor)
    ctx.strokeBlock(strokeXLocation, 650, 150, 70)
    ctx.fillStyle = "black"
    ctx.fillText(keyBindNumber, keyBindXLocation, 695);

}

