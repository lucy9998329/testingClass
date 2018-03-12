let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')

canvas.width = 400
canvas.height = 400

function Greeting() {
    console.log("Hello")

}

//ES6 - function must be declared before calling - safe!
let GreetingArrow = () => {
    console.log("Hello Arrow")
}

//GreetingArrow


function draw(){

    ctx.beginPath()
    ctx.arc(200, 200, 80, Math.PI * 2, false)
    ctx.fillStyle = '#09c'
    ctx.strokeStyle = "black"
    ctx.stroke()
    ctx.fill()

}
draw()
