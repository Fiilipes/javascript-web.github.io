cat = document.getElementById("cat")

//const element = document.getElementById("cat")
//const cssObj = window.getComputedStyle(element, null);
//
//let right = cssObj.getPropertyValue("right");
//
//console.log(right);

let number = 1

    let counter = 0;
    const i = setInterval(function(){
        //console.log(counter);
        // console.log(number);

        counter++
        number++
        if (number == 17) {
            number = 1
            
        }

                /**/        if(number == 1) {
                /**/            document.getElementById("cat").setAttribute("src","IMG/cat_phase1.png")
                /**/        } else if(number == 2) {
                /**/            document.getElementById("cat").setAttribute("src","IMG/cat_phase2.png")
                /**/        } else if(number == 3) {
                /**/            document.getElementById("cat").setAttribute("src","IMG/cat_phase3.png")
                /**/        } else if(number == 4) {
                /**/            document.getElementById("cat").setAttribute("src","IMG/cat_phase4.png")
                /**/        } else if(number == 5) {
                /**/            document.getElementById("cat").setAttribute("src","IMG/cat_phase5.png")
                /**/        } else if(number == 6) {
                /**/            document.getElementById("cat").setAttribute("src","IMG/cat_phase6.png")
                /**/        } else if(number == 7) {
                /**/            document.getElementById("cat").setAttribute("src","IMG/cat_phase7.png")
                /**/        } else if(number == 8) {
                /**/            document.getElementById("cat").setAttribute("src","IMG/cat_phase8.png")
                /**/        } else if(number == 9) {
                /**/            document.getElementById("cat").setAttribute("src","IMG/cat_phase9.png")
                /**/        } else if(number == 10) {
                /**/            document.getElementById("cat").setAttribute("src","IMG/cat_phase10.png")
                /**/        } else if(number == 11) {
                /**/            document.getElementById("cat").setAttribute("src","IMG/cat_phase11.png")
                /**/        } else if(number == 12) {
                /**/            document.getElementById("cat").setAttribute("src","IMG/cat_phase12.png")
                /**/        } else if(number == 13) {
                /**/            document.getElementById("cat").setAttribute("src","IMG/cat_phase13.png")
                /**/        } else if(number == 14) {
                /**/            document.getElementById("cat").setAttribute("src","IMG/cat_phase14.png")
                /**/        } else if(number == 15) {
                /**/            document.getElementById("cat").setAttribute("src","IMG/cat_phase15.png")
                /**/        } else if(number == 16) {
                /**/            document.getElementById("cat").setAttribute("src","IMG/cat_phase16.png")
                /**/        }

        cat.style.right = counter * 7 - 80 + "px";
        if(counter === 230) {
            document.getElementById("cat").style.opacity = 0

            counter = -10;

            
        }
        if(counter === -10) {
            document.getElementById("cat").style.opacity = 1

        }
    }, 120);   