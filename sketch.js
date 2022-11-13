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
  createCanvas(400, 400, WEBGL)
  ma= atan(1/sqrt(2));
  maxD= dist(0,0,200,200)

}

function draw(){
  noStroke();
  background('black')
  ortho(-300,300,-300,300,0,1000);
  pointLight(0, 255, 0,1, 0, -1, 0)
  //directionalLight('black',5, 1,-5)
  pointLight(0, 0, 255,0, 1,0)
  pointLight(0, 240, 0,0,-200, -200,-1)
  pointLight(240,0,0,-1,200,0)
  pointLight(0,0,240,1,1,1)
  pointLight(0,0,240,-200,100,100)

  //translate(0,50,-50)
  rotateX(-0.3*PI)
  rotateY(ma);
  
  let offset =0;
  //AGUA
  for(let z = -height/5; z<height-height/3; z+=w)
  {
    for(let x = 0; x<width; x+=w){
      push();
      let d = dist(x,z,width/2, height/2)
      let offset = map(d,0, maxD,-2,2);
      let a = angle + offset;
      
      translate(x -width/2,0,z-height/2);
      ambientMaterial(0,0,255);
      let h = map(cos(a+offset), -1,1,0,100);
      box(w-2,h,w-2);
      //rect(x - width/2 + w/2,0,w-2,h);
      
      pop();
    }
    offset +=.1;
    }
    angle +=0.1;
//HUMO
w2=10
    for(let z = 300; z<height-20; z+=w2)
  {
    for(let x = 0; x<width; x+=w2){
      push();
      let d = dist(x,z,width/2, height/2)
      let offset = map(d,0, maxD,-1,1);
      let a = angle + offset;
      
      translate(x -width/2,0,z-height/2);
      specularMaterial(250,250,250);
      let h = map(.5*noise(a), -1,1,200,350);
      box(w2,h,w2);
      //rect(x - width/2 + w/2,0,w-2,h);
      
      pop();
    }
    offset +=.1;
    }
    //Fuego
    for(let z = 400; z<height+220; z+=w)
  {
    for(let x = 0; x<width; x+=w){
      push();
      let d = dist(x,z,width/2, height/2)
      let offset = map(d,0, maxD,-1,1);
      let a = angle + offset;
      
      translate(x -width/2,0,z-height/2);
      emissiveMaterial(120, 7, 7);
      let h = map(sin(a)+2*noise(a), -1,1,20,100);
      box(w-2,h,w-2);
      //rect(x - width/2 + w/2,0,w-2,h);
      
      pop();
    }
    offset +=.1;
    }

    //TIERRA
    for(let z = 100; z<height+100; z+=w)
  {
    for(let x = -250; x<width-450; x+=w){
      push();
      let d = dist(x,z,width/2, height/2)
      let offset = map(d,0, maxD,-1,1);
      let a = angle + offset;
      
      translate(x -width/2,0,z-height/2);
      emissiveMaterial(84, 43, 22);
      let h = map(noise(a), -1,1,100,200);
      box(w-2,h,w-2);
      //rect(x - width/2 + w/2,0,w-2,h);
      
      pop();
    }
    offset +=.1;
    }
  //Aire
  for(let z = -100; z<height+100; z+=w)
  {
    for(let x = 450; x<width+200; x+=w){
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
  for(let z = -600; z<height-500; z+=w)
  {
    for(let x = -450; x<width; x+=w){
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