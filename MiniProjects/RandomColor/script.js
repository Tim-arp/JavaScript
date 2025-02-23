let boxes = document.querySelector(".container").children

function randomColor(){
    let val1 = Math.floor(Math.random() * 256)
    let val2 = Math.floor(Math.random() * 256)
    let val3 = Math.floor(Math.random() * 256)
    return `rgb(${val1},${val2},${val3})`
}
randomColor()

Array.from(boxes).forEach((e)=>{
    e.style.backgroundColor = randomColor()
    e.style.color = randomColor()
})