var gui = new dat.GUI();
var params = {
    Ellipse_Size: 30,
    Download_Image: function () { return save(); },
};
gui.add(params, "Ellipse_Size", 0, 100, 1);
gui.add(params, "Download_Image");
function draw() {
    background('black');
    noStroke();
    background('#3C413B');
    fill('#7B3F31');
    ellipse(width / 2, height / 3, width / 1.8, width / 3);
    ellipse(width / 2 - width / 4, height / 2 - height / 8, width / 4);
    ellipse(width / 2 + width / 4, height / 2 - height / 8, width / 4);
    fill('#FED7BC');
    ellipse(width / 2, height / 2, width / 2);
    fill('#FDFEFF');
    ellipse(width / 2 - 80, height / 2 - 30, 100, 50);
    ellipse(width / 2 + 80, height / 2 - 30, 100, 50);
    fill('#5BAA5E');
    ellipse(width / 2 - 80, height / 2 - 30, 30);
    ellipse(width / 2 + 80, height / 2 - 30, 30);
    fill('black');
    ellipse(width / 2 - 80, height / 2 - 30, 10);
    ellipse(width / 2 + 80, height / 2 - 30, 10);
    fill('#7B3F31');
    triangle(width / 2 - 140, height / 2 - 40, width / 2 - 40, height / 2 - 40, width / 2 - 40, height / 2 - 80);
    triangle(width / 2 + 140, height / 2 - 40, width / 2 + 40, height / 2 - 40, width / 2 + 40, height / 2 - 80);
    fill('#C37A6C');
    triangle(width / 2 - 40, height / 2 + 20, width / 2 + 40, height / 2 + 20, width / 2, height / 2);
    fill('#FDF6CC');
    rectMode(CENTER);
    stroke('#DC7D77');
    strokeWeight(4);
    rect(width / 2, height / 2 + 80, 180, 80);
    fill('#CCC7A5');
    noStroke();
    rect(width / 2, height / 2 + 80, 400, 4);
    ellipse(mouseX, mouseY, params.Ellipse_Size);
}
function setup() {
    p6_CreateCanvas();
}
function windowResized() {
    p6_ResizeCanvas();
}
var __ASPECT_RATIO = 1;
var __MARGIN_SIZE = 25;
function __desiredCanvasWidth() {
    var windowRatio = windowWidth / windowHeight;
    if (__ASPECT_RATIO > windowRatio) {
        return windowWidth - __MARGIN_SIZE * 2;
    }
    else {
        return __desiredCanvasHeight() * __ASPECT_RATIO;
    }
}
function __desiredCanvasHeight() {
    var windowRatio = windowWidth / windowHeight;
    if (__ASPECT_RATIO > windowRatio) {
        return __desiredCanvasWidth() / __ASPECT_RATIO;
    }
    else {
        return windowHeight - __MARGIN_SIZE * 2;
    }
}
var __canvas;
function __centerCanvas() {
    __canvas.position((windowWidth - width) / 2, (windowHeight - height) / 2);
}
function p6_CreateCanvas() {
    __canvas = createCanvas(__desiredCanvasWidth(), __desiredCanvasHeight());
    __centerCanvas();
}
function p6_ResizeCanvas() {
    resizeCanvas(__desiredCanvasWidth(), __desiredCanvasHeight());
    __centerCanvas();
}
var p6_SaveImageSequence = function (durationInFrames, fileExtension) {
    if (frameCount <= durationInFrames) {
        noLoop();
        var filename_1 = nf(frameCount - 1, ceil(log(durationInFrames) / log(10)));
        var mimeType = (function () {
            switch (fileExtension) {
                case 'png':
                    return 'image/png';
                case 'jpeg':
                case 'jpg':
                    return 'image/jpeg';
            }
        })();
        __canvas.elt.toBlob(function (blob) {
            p5.prototype.downloadFile(blob, filename_1, fileExtension);
            setTimeout(function () { return loop(); }, 100);
        }, mimeType);
    }
};
//# sourceMappingURL=../src/src/build.js.map