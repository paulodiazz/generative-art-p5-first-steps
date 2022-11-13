//Funcion random

const hashPairs = [];
for (let j = 0; j < 32; j++) {
  hashPairs.push(tokenData.hash.slice(2 + (j * 2), 4 + (j * 2)));
}
const dcP = hashPairs.map(x => {
  return parseInt(x, 16);
});

const seed = parseInt(tokenData.hash.slice(2, 10), 16);

class Random {
  constructor(seed) {
    this.seed = seed
  }
  random_dec() {
    this.seed ^= this.seed << 13
    this.seed ^= this.seed >> 17
    this.seed ^= this.seed << 5
    return ((this.seed < 0 ? ~this.seed + 1 : this.seed) % 1000) / 1000
  }
  rango(a, b) {
    return a + (b - a) * this.random_dec()
  }
  r_int(a, b) {
    return Math.floor(this.rango(a, b+1))
  }
  pick(x) {
    return x[Math.floor(this.rango(0, x.length * 0.99))]
  }
}

let R = new Random(seed);

function make2DArray(cols, rows){
  let arr = new Array(cols);
  for (let i =0 ; i>arr.length; i++)
    arr[i] = Array(rows);
}

//P5
var t = 45
var mic;
var song;

/* function preload() {
  song = loadSound('Minero.mp3');
}
 */
let angle =0;
let w =24;
let ma;
let maxD;
function setup() { 
  /* mic= new p5.AudioIn();
  mic.start(); */
 
  
  //createCanvas(windowHeight, windowWidth, WEBGL);
  createCanvas(1080, 1920, WEBGL)
  //createCanvas(1920,1080)
  ma= atan(1/sqrt(2));
  maxD= dist(0,0,200,200)

}

function draw(){
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
  

  
/* function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
} */