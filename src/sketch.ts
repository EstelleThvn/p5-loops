// -------------------
//  Parameters and UI
// -------------------

const gui = new dat.GUI()
const params = {
    Ellipse_Size: 30,
    Download_Image: () => save(),
}
gui.add(params, "Ellipse_Size", 0, 100, 1)
gui.add(params, "Download_Image")

// -------------------
//       Drawing
// -------------------

function draw() {
    background('black')
    noStroke()
    // rectMode(CENTER)
    // fill('#fa7b0c')
    // stroke(255,0,0,200)
    // rect(width/2, height/2, 40, 20)
    // fill('red')
    // triangle(100,10,40,50,200,200)
    // line(100,10,40,50)

    // EXERCICE 1 MAISON
    // background('#6e7055')
    // fill('#544034')
    // rect(width/2, height-height/8, width, height/4)

    // rectMode(CENTER)
    // fill('#bfb2a6')
    // rect(width/2, height/2, width/3, height/2)

    // fill('#5c372e')
    // triangle(width/3, height/2-height/4,
    //     width - width/3, height/2-height/4,
    //     width/2, 50)

    // EXERCICE 2 MICKEY
    // background('white')
    // rectMode(CENTER)
    // fill('black')
    // ellipse(width/2, height/2, width/2)
    // ellipse(width/2-width/4, height/2-height/4, width/4)
    // ellipse(width/2+width/4, height/2-height/4, width/4)

    // EXERCICE 3 FACE
    background('#3C413B')
    fill('#7B3F31')
    ellipse(width/2, height/3, width/1.8, width/3)
    ellipse(width/2-width/4, height/2-height/8, width/4)
    ellipse(width/2+width/4, height/2-height/8, width/4)
    fill('#FED7BC')
    ellipse(width/2, height/2, width/2)

    fill('#FDFEFF')
    ellipse(width/2-80, height/2-30, 100, 50)
    ellipse(width/2+80, height/2-30, 100, 50)

    fill('#5BAA5E')
    ellipse(width/2-80, height/2-30, 30)
    ellipse(width/2+80, height/2-30, 30)
    fill('black')
    ellipse(width/2-80, height/2-30, 10)
    ellipse(width/2+80, height/2-30, 10)

    fill('#7B3F31')
    triangle(width/2-140, height/2-40,width/2-40, height/2-40,width/2-40, height/2-80)
    triangle(width/2+140, height/2-40,width/2+40, height/2-40,width/2+40, height/2-80)

    fill('#C37A6C')
    triangle(width/2-40, height/2+20,width/2+40, height/2+20,width/2, height/2)

    fill('#FDF6CC')
    rectMode(CENTER)
    stroke('#DC7D77')
    strokeWeight(4)
    rect(width/2, height/2+80, 180, 80)

    fill('#CCC7A5')
    noStroke()
    rect(width/2, height/2+80, 400, 4)
    

    
    


    ellipse(mouseX, mouseY, params.Ellipse_Size)
}

// -------------------
//    Initialization
// -------------------

function setup() {
    p6_CreateCanvas()
}

function windowResized() {
    p6_ResizeCanvas()
}