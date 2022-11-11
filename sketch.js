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

//P5

function setup(){
console.log('run')
createCanvas(500,500);

}

function draw(){
    background('black');
   
        
    


    line(100,100,100,100)
    push()
    
    triangle(400,500,500,500,400,450)
        push()
        translate(-100,-50)
        triangle(400,500,500,500,400,450)
        pop()
        push()
        translate(-200,-100)
        triangle(400,500,500,500,400,450)
        pop()
    rect(0,450,400,50);
    rect(0,401,300,50)
    rect(0,350,200,50)
    pop()

   

    var earth = (R.rango(60,90),R.rango(37,70),R.rango(3,20))


    for(var i=400;i<500;i=i+2){
        push()
        stroke(earth)
        line((i+R.rango(-5,5)),500,(i+random(-5,5)),450+(i-400))
        
        pop()
        
    }
    for(var i=0;i<298;i=i+2){
       
        line((i+random(-5,5)),450,(i+random(-5,5)),400)
        stroke(74, 53, 10)
    }
    
}