let recording = false;
let recorder;
let chunks = [];

const fr = 30;

function record() {
  chunks.length = 0;
  
  let stream = document.querySelector('canvas').captureStream(fr);
  
  recorder = new MediaRecorder(stream);
  
  recorder.ondataavailable = e => {
    if (e.data.size) {
      chunks.push(e.data);
    }
  };
  
  recorder.onstop = exportVideo;
  
}

function exportVideo(e) {
  var blob = new Blob(chunks, { 'type' : 'video/webm' });

    // Draw video to screen
    var videoElement = document.createElement('video');
    videoElement.setAttribute("id", Date.now());
    videoElement.controls = true;
    document.body.appendChild(videoElement);
    videoElement.src = window.URL.createObjectURL(blob);
  
  // Download the video 
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  document.body.appendChild(a);
  a.style = 'display: none';
  a.href = url;
  a.download = 'newVid.webm';
  a.click();
  window.URL.revokeObjectURL(url);

}


// taken from pr.js docs
var x, y;

let angle =0;
let w =24;
let ma;
let maxD;
function setup() { 
  /* mic= new p5.AudioIn();
  mic.start(); */
 
  
  //createCanvas(windowHeight, windowWidth, WEBGL);
  createCanvas(1080, 1920, WEBGL)
  frameRate(fr);
  record();
  x = 1920 / 2
  y = 1080
  //createCanvas(1920,1080)
  ma= atan(1/sqrt(2));
  maxD= dist(0,0,200,200)

}

function keyPressed() {
    
  // toggle recording true or false
  recording = !recording
  console.log(recording);
  
  // 82 is keyCode for r 
  // if recording now true, start recording 
  if (keyCode === 82 && recording ) {
    
    console.log("recording started!");
    recorder.start();
  } 
  
  // if we are recording, stop recording 
  if (keyCode === 82 && !recording) {  
    console.log("recording stopped!");
    recorder.stop();
  }
  
}

function draw() {
  noStroke();
  background('black')
  ortho(-300,300,-300,300,0,10000);
  pointLight(255, 0, 0,1, 80,1500,100)
  //directionalLight('black',5, 1,-5)
  //pointLight(0, 0, 255,0, 1,0)
  pointLight(255, 255, 255,0,-500, -500,-100)
  pointLight(244, 251, 59,-1,200,0)
  //pointLight(0,0,240,1,1,1)
  //pointLight(0,0,240,-200,100,100)
  pointLight(3, 46, 99,0,-1500,500)
  spotLight(255,0,0,0,-50,500,1,1,-1,PI,10)
  spotLight(255,0,0,0,-80,500,-1,1,-1,PI,10)

  //translate(0,50,-50)
  rotateX(-0.3*PI)
  rotateY(ma);
  
  let offset =0;
  //AGUA
  for(let z = height/2.5; z<height-height/2.5; z+=w)
  {
    for(let x = width/4; x<width-(width/4); x+=w){
      push();
      let d = dist(x,z,width/2, height/8)
      let offset = map(d,0, maxD,-2,2);
      let a = angle + offset;
      
      translate(x -width/2,0,z-height/2);
      ambientMaterial(0,0,255);
      let h = map(cos(a+offset), -1,1,0,100);
      box(w-2,h,w-2);
      //rect(x - width/2 + w/2,0,w-2,h);
      
      pop();
    }
    offset +=.01;
    }
    angle +=0.02;

   //Fuego
    for(let z = height-height/2.7; z<height-height/3.5; z+=w)
  {
    for(let x = width/4; x<width-width/3; x+=w){
      push();
      let d = dist(x,z,width/2, height/2)
      let offset = map(d,0, maxD,-1,1);
      let a = angle + offset;
      
      translate(x -width/2,0,z-height/2);
      ambientMaterial(120, 7, 7);
      let h = map(sin(a)+2*noise(a), -1,1,20,100);
      box(w-2,h,w-2);
      //rect(x - width/2 + w/2,0,w-2,h);
      
      pop();
    }
    offset +=.1;
    }

    //TIERRA
    for(let z = height-height/2; z<height-height/3.5; z+=w)
  {
    for(let x = -width/3; x<width- width/1.25; x+=w){
      push();
      let d = dist(x,z,width/2, height/2)
      let offset = map(d,0, maxD,-1,1);
      let a = angle + offset;
      
      translate(x -width/2,0,z-height/2);
      ambientMaterial(255);
      let h = map(noise(a), -1,1,100,200);
      box(w-2,h,w-2);
      //rect(x - width/2 + w/2,0,w-2,h);
      
      pop();
    }
    offset +=.1;
    }
  //Aire
for(let z = -height/2; z<height/2.6; z+=w)
  {
    for(let x = width/3; x<width/1.4; x+=w){
      push();
      let d = dist(x,z,width/2, height/2)
      let offset = map(d,0, maxD,-1,1);
      let a = angle + offset;
      
      translate(x -width/2,0,z-height/2);
      ambientMaterial(255);
      let h = map(sin(a), -1,1,10,70);
      box(w-10,h,w-10);
      //rect(x - width/2 + w/2,0,w-2,h);
      
      pop();
    }
    offset +=.1;
    }
    //Aire2
for(let z = -height/2; z<height/1.9; z+=w)
  {
    for(let x = width/1.32; x<width+width/3; x+=w){
      push();
      let d = dist(x,z,width/2, height/2)
      let offset = map(d,0, maxD,-1,1);
      let a = angle + offset;
      
      translate(x -width/2,0,z-height/2);
      ambientMaterial(255);
      let h = map(sin(a), -1,1,10,70);
      box(w-10,h,w-10);
      //rect(x - width/2 + w/2,0,w-2,h);
      
      pop();
    }
    offset +=.1;
    } 
}