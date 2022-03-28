song = "";
song2 = "";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;

function preload() {
    song = loadSound("Wahran - Randall(PagalWorld) (1).mp3");
    song2 = loadSound("Glass_Animals_-_Heat_Wavescom.mp3");
}

function setup() {
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function modelLoaded() {
    console.log('Posenet Is Initialized');
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function gotPoses() {
    if(results.lenght > 0) {
console.log(results);

leftWristX = resluts[0].pose.leftWrist.x;
leftWristY = resluts[0].pose.leftWrist.y;
console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);

rightWristX = resluts[0].pose.rightWrist.x;
rightWristY = resluts[0].pose.rightWrist.y;
console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);
    }
}