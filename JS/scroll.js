function disableScroll() {
    document.body.classList.add("stop-scrolling");
}
  
function enableScroll() {
    document.body.classList.remove("stop-scrolling");
}



let sec2ul2 = document.getElementById("sec2ul2")
let sec2 = document.getElementById("sec2")
let balloon = document.getElementById("balloon")
let arrow = document.getElementById("arrow")
let main = document.getElementById("main")
let sec3first = document.getElementById("sec3first")
let codeli1 = document.getElementById("codeli1")
let codeli2 = document.getElementById("codeli2")
let codeli3 = document.getElementById("codeli3")
let codeli4 = document.getElementById("codeli4")
let codeli5 = document.getElementById("codeli5")
let codeli6 = document.getElementById("codeli6")







window.addEventListener("scroll", function(){
    value = this.window.scrollY
    this.document.getElementById("value1").textContent = parseInt(value) 
    main.style.opacity = 1.5 - value / 500
    document.getElementById("adress").textContent = location.hash

    if (value > 821 && value < 1240) {
        sec2ul2.style.opacity = 1 - (value - 821) / 300
        balloon.style.top = 1540 - (value - 821) / 1.45 + "px"
        balloon.style.width = 100 + (value - 821) / 3.5+ "px"
        balloon.style.height = 120 + (value - 821) / 3.5 + "px"
        arrow.style.top = 1540 - (value - 821) / 2 + "px"

    }
    if (value < 821) {
        sec2.style.opacity = (value - 821) / 300 + 1
    }
    if (value >= 1200) {
        sec2ul2.style.visibility = "hidden"
    } else {
        sec2ul2.style.visibility = "visible"
    }
    if (value == 1240) {
        arrow.style.transition = 0.75 + "s"
    } else {
        arrow.style.transition = 0 + "s"
    }
    if (value > 1240) {
        sec3first.style.opacity = 1 - (value - 1240) / 300
        balloon.style.top = 1252.14 - (value - 1240) / 1.45 + "px"
        balloon.style.width = 219.25 + (value - 1240) / 3.5 + "px"
        balloon.style.height = 239.25 + (value - 1240) / 3.5 + "px"
        arrow.style.top = 1331.3 - (value - 1240) / 2 + "px"

    }


})
const scrollDemo = document.querySelector("#scrollDemo");
const value2 = document.querySelector("#value2");

scrollDemo.addEventListener("scroll", event => {
    value2.innerHTML = `scrollTop: ${parseInt(scrollDemo.scrollTop)}`;
    if (parseInt(scrollDemo.scrollTop) <= 50) {

        document.getElementById("codeli1").style.opacity = 1        
        document.getElementById("codeli2").style.opacity = 1     
        document.getElementById("codeli3").style.opacity = 1
        document.getElementById("codeli4").style.opacity = 0 
        document.getElementById("codeli5").style.opacity = 0 
        document.getElementById("codeli6").style.opacity = 0 


    }
    if (parseInt(scrollDemo.scrollTop) < 400 && parseInt(scrollDemo.scrollTop) > 50) {
        document.getElementById("codeli1").style.opacity = 1 - (parseInt(scrollDemo.scrollTop)) / 400 * 1.4
        document.getElementById("codeli2").style.opacity = 1 - (parseInt(scrollDemo.scrollTop)) / 400 * 1.4
        document.getElementById("codeli3").style.opacity = 1 - (parseInt(scrollDemo.scrollTop)) / 400 * 1.4
        document.getElementById("codeli4").style.opacity = (parseInt(scrollDemo.scrollTop) - 50) / 400 * 1.4
        document.getElementById("codeli5").style.opacity = (parseInt(scrollDemo.scrollTop) - 50) / 400 * 1.4

    }
    
    if (parseInt(scrollDemo.scrollTop) >= 400 && parseInt(scrollDemo.scrollTop) <= 800){
        document.getElementById("codeli1").style.opacity = 0
        document.getElementById("codeli2").style.opacity = 0 
        document.getElementById("codeli3").style.opacity = 0
        document.getElementById("codeli4").style.opacity = 1
        document.getElementById("codeli5").style.opacity = 1
        document.getElementById("codeli6").style.opacity = 0 
    }
    if (parseInt(scrollDemo.scrollTop) >= 400 && parseInt(scrollDemo.scrollTop) <= 700){
        document.getElementById("codeli4").style.marginTop = (parseInt(scrollDemo.scrollTop) - 460) + "px"
        document.getElementById("codeli5").style.marginTop = (parseInt(scrollDemo.scrollTop) - 460) + "px"
        document.getElementById("codeli6").style.opacity = 0
    }
    if (parseInt(scrollDemo.scrollTop) > 700 && parseInt(scrollDemo.scrollTop) < 1100){
        document.getElementById("codeli4").style.marginTop = 240 + "px"
        document.getElementById("codeli5").style.marginTop = 240 + "px"
        document.getElementById("codeli4").style.opacity = 1 - (parseInt(scrollDemo.scrollTop) - 700) / 200
        document.getElementById("codeli5").style.opacity = 1 - (parseInt(scrollDemo.scrollTop) - 700) / 200
        document.getElementById("codeli6").style.opacity = (parseInt(scrollDemo.scrollTop) - 700) / 400 

    }
    if (parseInt(scrollDemo.scrollTop) >= 1100 && parseInt(scrollDemo.scrollTop) <= 1400){
        document.getElementById("codeli6").style.marginTop = (parseInt(scrollDemo.scrollTop) - 1200) + "px"
        document.getElementById("codeli6").style.opacity = 1
        document.getElementById("codeli4").style.opacity = 0
        document.getElementById("codeli5").style.opacity = 0

    } 


    
}, { passive: true });



