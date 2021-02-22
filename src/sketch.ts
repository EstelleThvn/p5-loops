// -------------------
//  Parameters and UI
// -------------------

//RECTANGLES
// const gui = new dat.GUI()
// const params = {
//     N: 140,
//     Random_Seed: 0,
//     p: 0.5,
//     Transparence : 125,
//     Download_Image: () => save(),
// }
// gui.add(params, "N", 0, 1000, 1)
// gui.add(params, "p", 0, 1, 0.001)
// gui.add(params, "Transparence", 0, 255, 1)
// gui.add(params, "Random_Seed", 0, 100, 1)
// gui.add(params, "Download_Image")


//ELLIPSES
const gui = new dat.GUI()
const params = {
    N: 400,
    Random_Seed: 0,
    Download_Image: () => save(),
}
gui.add(params, "N", 0, 1000, 1)
gui.add(params, "Random_Seed", 0, 100, 1)
gui.add(params, "Download_Image")

//ROSACE
// const gui = new dat.GUI()
// const params = {
//     N: 6,
//     Random_Seed: 0,
//     Base_Size:0.8,
//     Size_Ratio: 1,
//     Stroke_Weight
//     Download_Image: () => save(),
// }
// gui.add(params, "N", 0, 1000, 1)
// gui.add(params, "Random_Seed", 0, 100, 1)
// gui.add(params, "Download_Image")

// -------------------
//       Drawing
// -------------------


//RECTANGLES
// function draw() {
//     randomSeed(params.Random_Seed)
//     background('white')
//     noStroke()
//     rectMode(CENTER)
//     for (let i = 0; i < params.N; i++) {
//         fill(random([
//             color(41,50,127, params.Transparence), 
//             color(72,161,179, params.Transparence),
//             color(235,86,118, params.Transparence)
//         ]))
//         push()
//         translate(random(width), random(height))
//         if (random(0,1) < params.p){
//             rotate(TAU/4)
//         }
//         rect(0, 0, random(40,100), random(10, 30))
//         pop()
//     }

//     // ellipse(mouseX, mouseY, params.Ellipse_Size)
// }


//ELLIPSES
function draw() {
    randomSeed(params.Random_Seed)
    background('#1D1A37')
    noStroke()
    rectMode(CENTER)
    fill(255,255,255,20)
    for (let i = 0; i < params.N/2; i++) {
        ellipse(random(width/4,width-width/4), random(height/4,height-height/4), random(20,80))
        ellipse(random(0,width), random(0,height), random(20,80))
    }
}

//ROSACE (pas fait)
// function draw() {
//     randomSeed(params.Random_Seed)
//     background('black')
// }

// -------------------
//    Initialization
// -------------------

function setup() {
    p6_CreateCanvas()
}

function windowResized() {
    p6_ResizeCanvas()
}