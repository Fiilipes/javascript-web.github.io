body = document.getElementById("body")
html = document.getElementById("html")
head = document.getElementById("head")



clickCircle = document.getElementById("clickCircle")
body.style.height = innerHeight * 2 + "px"

window.addEventListener("click", function(){

    let counterr = 0;
    const i = this.setInterval(function(){
        //console.log(counter);
        // console.log(number);
        counterr++
        if (counterr == 1){
            clickCircle.style.opacity = 1
        } else {
            clickCircle.style.opacity = 0
        }
    }, 250);   
})

 

    
