noseX = 0;
noseY = 0;


function preload(){
    clown_nose = loadImage('https://i.postimg.cc/qBsr49XY/4c01697cb7f3975b21584f7d6011c5b3-1.png');
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}



function modelLoaded(){
    console.log('PoseNet is Initialized');
}



function draw(){
image(video, 0, 0, 300, 300);
image(clown_nose, noseX, noseY, 100, 100);
}




function take_snapshot(){
    save('MyFilter.png');
}




function gotPoses(results){
if(results.length > 0){
    console.log(results);
    noseX = results[0].pose.nose.x-50;
    noseY = results[0].pose.nose.y-75;
    console.log("nose x = " + results[0].pose.nose.x);
    console.log("nose y = " + results[0].pose.nose.y);
}
}