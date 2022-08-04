sec3parts = document.getElementById("sec3parts")


document.getElementById("li1").addEventListener("click", function() {

    document.getElementById("sec3h2").textContent = "Projects"
    document.getElementById("sec3h3").textContent = "for David Šetek’s videos"

    document.getElementById("sec3parts").setAttribute("href","CSS/part1.css")

}
)
document.getElementById("li2").addEventListener("click", function() {

    document.getElementById("sec3h2").textContent = "Games"
    document.getElementById("sec3h3").textContent = "created with canvas"

    document.getElementById("sec3parts").setAttribute("href","CSS/part2.css")

}
)
document.getElementById("li3").addEventListener("click", function() {

    document.getElementById("sec3h2").textContent = "Repositories"
    document.getElementById("sec3h3").textContent = "placed on Github"

    document.getElementById("sec3parts").setAttribute("href","CSS/part3.css")

}

)
document.getElementById("li4").addEventListener("click", function() {

    document.getElementById("sec3h2").textContent = "Library"
    document.getElementById("sec3h3").textContent = "containing a lot of javascript stuff"

    document.getElementById("sec3parts").setAttribute("href","CSS/part4.css")

}
)
console.log("cet");
var firstname = "filip"
console.log("gi",firstname,"imdd");