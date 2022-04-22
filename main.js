noseX=0;
noseY=0;
load="";

function clown_nose(){
    load="a";
}

function mustache(){
    load="b";
}

function lips(){
    load="c";
}

function preload(){
nose=loadImage('Clown Nose.png');
lip=loadImage('Lips.png');
must=loadImage('Mustache.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    }

function draw(){
image(video, 0, 0, 300, 300);

if(load == "a"){
    image(nose, noseX-19, noseY-19, 50, 50);
}

if(load == "b"){
    image(must, noseX-23, noseY+5, 45, 35);
}

if(load == "c"){
    image(lip, noseX-12, noseY+2, 30, 30);
}

}

function take_snapshot(){
    save('MyFilterImage.png');
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
    }
}
