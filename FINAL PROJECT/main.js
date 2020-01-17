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
for (let n = 0; n < 1; n++) {
    noteBlocks.push({
        xLocation: randomSetValue(),
        yLocation: -50,
        x: 150,
        y: 50,

    })
}

let keyBind1 = "D"
let keyBind2 = "F"
let keyBind3 = "J"
let keyBind4 = "K"

let color = ["yellow", "pink", "yellow", "white"]
let speed = 10
let score = 0
let end = false
let noteClicked = false

// Main Program Loop
requestAnimationFrame(draw);

function draw() {
    // Logic

    // Drawing
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    //Clicking Area letter for each block
    ctx.fillBlock(0, 650, 150, 50, "yellow")
    ctx.strokeBlock(0, 650, 150, 50)
    ctx.fillStyle = "black"
    ctx.fillText(keyBind1, 65, 685);

    ctx.fillBlock(150, 650, 150, 50, "pink")
    ctx.strokeBlock(150, 650, 150, 50)
    ctx.fillStyle = "black"
    ctx.fillText(keyBind2, 215, 685);

    ctx.fillBlock(300, 650, 150, 50, "yellow")
    ctx.strokeBlock(300, 650, 150, 50)
    ctx.fillStyle = "black"
    ctx.fillText(keyBind3, 365, 685);

    ctx.fillBlock(450, 650, 150, 50, "white")
    ctx.strokeBlock(450, 650, 150, 50)
    ctx.fillStyle = "black"
    ctx.fillText(keyBind4, 515, 685);

  
    //Program Speed
    for (let i = 0; i < noteBlocks.length; i++) {
        noteBlocks[i].yLocation += speed
    }

    //Remove and add noteblocks
    for (let i = 0; i < noteBlocks.length; i++) {
        if (noteBlocks[i].yLocation > cnv.height) {
            noteBlocks.splice(i, 1)
            end = true
            i--
        }

    }

    if (end == true) {
        for (let n = 0; n < 1; n++) {
            noteBlocks.push({
                xLocation: randomSetValue(),
                yLocation: -50,
                x: 150,
                y: 50,
        
            })
    }
    end = false    
}
  //Draw Noteblocks + Program speed of Drop rate
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
            if (noteBlocks[i].yLocation == 650 && noteBlocks[i].xLocation == 0) {
                noteBlocks.splice(i, 1)

            }
        }

    }

    //Key F is pressed
    else if (event.code == 'KeyF') {
        console.log("FEEZ NUTS")
        keyBind2 = ""
        for (let i = 0; i < noteBlocks.length; i++) {
            if (noteBlocks[i].yLocation == 650 && noteBlocks[i].xLocation == 150) {
                noteBlocks.splice(i, 1)
                
            }
        }

    }

    //Key J is pressed
    else if (event.code == 'KeyJ') {
        console.log("JEEZ NUTS")
        keyBind3 = ""
        for (let i = 0; i < noteBlocks.length; i++) {
            if (noteBlocks[i].yLocation == 650 && noteBlocks[i].xLocation == 300) {
                noteBlocks.splice(i, 1)

            }
        }

    }

    //Key K is pressed
    else if (event.code == 'KeyK') {
        console.log("KEEZ NUTS")
        keyBind4 = ""
        for (let i = 0; i < noteBlocks.length; i++) {
            if (noteBlocks[i].yLocation < 700 && noteBlocks[i].yLocation > 650 && noteBlocks[i].xLocation == 450) {
                noteBlocks.splice(i, 1)
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
    ctx.borderStyle = "grey"
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

//Display Colour according to area
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

function noRepeat(blockCheck) {


}