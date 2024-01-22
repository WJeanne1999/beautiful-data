let coordData; // Global variable to store JSON coordinates


let row = 0;

function preload() {
  // Load your JSON file with coordinates
  coordData = loadJSON('coord.JSON', dataLoaded);
}

function dataLoaded(data) {
  console.log('JSON Data loaded successfully:', data);
  coordData = data; // Set the global variable after loading the data
}

function setup() {
  frameRate(7);
  createCanvas(800, 800);
  textFont('IBM Plex Mono');
  textSize(16);
  background('black');
}

function draw() {
  textSize(20);
noStroke()
fill('white');
textFont('futura Condensed Extrabold')

text("86FT", 30,300)
text("29.10.20", 30,30)
text("6FT", 30 ,500)

textSize(50);
fill('white');
textFont('futura Condensed Extrabold')

text("Sebastian Steudtner", 300,700)
    let x = coordData[row].x;
    x= x-50
    let y = coordData[row].y;
 
    console.log(y)
    
 if (y > 225){ 
  fill('#0070BB')
} 
    
    if( y > 400){
  fill('#960018')
} 


 if (y<225){
  fill('#003262')
}

  
  noStroke();
  
    noStroke();
   
    circle(x, y, 20); // Adjust the size of the circle as needed

    row++;
  }


