let time = 0
let width = 1200
let height = 700
let radius1 = 100
let x 
let y
let wave = []
let n = 1
function setup() 
{
  createCanvas(width, height)
  background(100)
  slider = createSlider(1,25,1)
  slider.position(50,600)
}

function draw() 
{   
    background(100)
    translate(350,350)

    x = 0
    y = 0

    for (let i = 0; i < slider.value(); i++)
    {
     
    prevX = x 
    prevY = y
        
    n = i*2 + 1 
    radius = (100*(4 / (n * PI)))
    
    x += radius*cos(n * time)
    y += radius*sin(n * time)


    strokeWeight(2)
    stroke(255)
    noFill()
    circle(prevX,prevY, radius*2)

    strokeWeight(2)
    stroke(255)
    line(prevX,prevY, x, y)
   
    noStroke()
    fill(255)
    circle(x, y, 8)
    }

    wave.unshift(y)

    strokeWeight(2)
    stroke(255)
    line(x, y, 350, wave[0])
    
    fill(255,255,0)
    noStroke()
    circle(350, wave[0], 10)

    translate(350,0)
    strokeWeight(2)
    stroke(255)
    beginShape()
    noFill()
    for (let i = 0; i < wave.length; i++)
    {
        vertex(i, wave[i])
    }
    endShape()
    
    if (wave.length > 500)
    {
        wave.pop()
    }

    time += 0.01
    
}