let buttons = document.querySelectorAll(".button")
let body = document.body

buttons.forEach( (e)=>{
    e.addEventListener("click",(a)=>{
        console.log(a.target); 
        if(a.target.id == "grey"){
            document.body.style.backgroundColor = a.target.id
        }
        if(a.target.id == "white"){
            document.body.style.backgroundColor = a.target.id
        }
        if(a.target.id == "blue"){
            document.body.style.backgroundColor =a.target.id
        }
        if(a.target.id == "yellow"){
            document.body.style.backgroundColor = a.target.id
        }
    }) 
} )
