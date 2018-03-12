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


function draw(x, y, r) {

    ctx.beginPath()
    ctx.arc(x, y, r, Math.PI * 2, false)
    ctx.fillStyle = '#09c'
    ctx.strokeStyle = "black"
    ctx.stroke()
    ctx.fill()

}
function animate() {

    let x = Math.floor((Math.random() * 350))
    let y = Math.floor((Math.random() * 350))

    let r = Math.floor((Math.random() * 50))

    let dx = Math.random() - 0.5
    let dy = Math.random() - 0.5

    setTimeout(function () {

        requestAnimationFrame(animate)
        ctx.clearRect(0, 0, 400, 400)
    }, 200)

    update(x, y, dx, dy, r)

}
function update(x, y, dx, dy, r) {
    x += dx
    y += dy

    draw(x, y, r) //calling draw function
}
animate()