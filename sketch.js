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
function setup() { 
  /* mic= new p5.AudioIn();
  mic.start(); */
 
  
  createCanvas(windowWidth, windowHeight, WEBGL);
}
var inc=.01;

var start =0;
var yoff =0;

function draw(){
  background(175)
  var xoff= start;
   for (var x = start; x<width; x++){

    var y = noise(xoff) * height;
    circle(x, y);
    xoff +=inc;
    
   }

   var x = map(noise(xoff), 0, 1 ,0 ,width);

   start+=inc;
  


//tierra
  for (var y = R.rango(2,10); y <= R.rango(10,15); y++) {
    for (var x = -10; x <= 10; x++) {
      for (var z = -4; z <= 4; z++) {

        push();
        translate(20 * x, 20 * y, 20 * z);
        rotateX(radians(t*2));
        var boxScale = map(noise(t/2), -1, 1, 5, 10);
        normalMaterial();
        sphere(noise(t)*(boxScale)); //* sin(t/10));
        pop();

      }
    }
  }


  //agua

  for (var y = 4; y <= 8; y++) {
    for (var x = -10; x <= 0; x++) {
      for (var z = -4; z <= 4; z++) {

        push();
        translate(20 * (x+noise(t/2)), 20 * (y+noise(t/2)), 20 * z);
        rotateX(radians(t*2));
        var boxScale = map(sin(t/2), -1, 1, 5, 10);
        fill(0,0,250);
        box(boxScale); //* sin(t/10));
        pop();
       push();
        translate(20 * x, 20 * y, 20 * z);
        rotateX(radians(t*2));
        var boxScale = map(sin(t/2), -1, 1, 5, 10);
        fill(250,0,0);
        box(noise(t)*boxScale); //* sin(t/10));
        pop();
      }
    }
  }

  //fuego
  for (var y = -10; y <= 10; y++) {
    for (var x = 4; x <= 10; x++) {
      for (var z = -4; z <= 4; z++) {

        push();
        translate(20 * x, 20*y, 20 * z);
        rotateX(radians(t*2));
        var boxScale = map(sin(t/2), -1, 1, 5, 10);
        fill(255);
        box(boxScale); //* sin(t/10));
        pop();
      }
    }
  }

  
  
  /* directionalLight(155, 100, 0, 1, -10, 0, sin(t / 2));
  directionalLight(20, 85, 0, 1, 2, 0, cos(t / 2));
  directionalLight(0, 0, 50, 1, 0, sin(t / 2), -2); */
  spotLight(255, 0, 0, -1, -1, -1, 0, 0, 0)
  
  
  t += 0.1;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}