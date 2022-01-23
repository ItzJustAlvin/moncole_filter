right_eyeX = 0;
right_eyeY = 0;

function preload() {
    monocle = loadImage("https://i.postimg.cc/fTDRBjnR/real-monocle.png");
}

function setup() {
    canvas = createCanvas(400, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded); 
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is Initialized');
}

function draw() {
    image(video, 0, 0, 400, 300);
    image(monocle, right_eyeX, right_eyeY, 70, 70);
}

function take_snapshot() {
    save('you_are_a_detective.png');
}

function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
        right_eyeX= results[0].pose.rightEye.x - 35;
        right_eyeY = results[0].pose.rightEye.y - 18;
        console.log("right eye x = " + right_eyeX);
        console.log("right eye y = " + right_eyeY);
    }
}
