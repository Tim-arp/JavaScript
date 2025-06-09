let colourchange;
let start = document.getElementById("start")
let stop = document.getElementById("stop")
let body = document.querySelector('body')

function randomcolour(){
  let val1 = Math.floor(Math.random()*255)
  let val2 = Math.floor(Math.random()*255)
  let val3 = Math.floor(Math.random()*255)
  return `rgb(${val1},${val2},${val3})`
}
start.addEventListener('click',function(){
  colourchange = setInterval(function(){
  body.style.backgroundColor = randomcolour()
  },1000)
})

stop.addEventListener('click',function(){
  clearInterval(colourchange)
})