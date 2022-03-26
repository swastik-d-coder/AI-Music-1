song = "";
song2 = "";

function preload() {
    song = loadSound("Wahran - Randall(PagalWorld) (1).mp3");
    song2 = loadSound("Glass_Animals_-_Heat_Wavescom.mp3");
}

function setup() {
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 500);
}