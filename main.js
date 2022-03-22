video="";
Status="";
objects=[];
function preload(){
video=createVideo("video.mp4");

}
function setup(){
canvas = createCanvas(480,380);
canvas.center();
video.hide();
}
function gotResult(error,results){

    if(error){
        console.log(error);
    }
    console.log(results);
    objects=results;

}

function draw(){
    image(video,0,0,480,380);
    if(Status=""){
        objectDetector.detect(video,gotResult)
    
    for(i=0;i<objects.length;i++){
    document.getElementById("st").innerHTML="status:object detected";
    document.getElementById("num").innerHTML="number of object detected="+objects.length;
precent=floor(objects[i].confidence*100);
text(objects[i].label+ " "+precent+ "%",objects[i].x,objects[i].y);
fill(red);
noFill();
stroke(red);
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);

}
}
}
function start(){
    document.getElementById("st").innerHTML="stauts-- detecting Objects";
    ObjectDetector=ml5.objectDetector('cocossd',modelLoaded);
}

function modelLoaded(){
    console.log('modelLoaded');
    Status=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}
