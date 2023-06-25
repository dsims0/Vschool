var text = document.querySelector ("#header").textContent
document.querySelector ("#paragraph").textContent = text 
var text = document.querySelector ("#head1").textContent
document.querySelector ("#paragraph1").textContent = text

var header = document.getElementById("practice")
header.style.fontsize,40
header.style.backgroundColor = "red"
document.body.style.backgroundColor = "lightgreen"
console.log





document.querySelector("#header").classList.add("title")
console.log (document.querySelector("#header").className)("title")
document.querySelector("#header").classList.remove("title")
console.log (document.querySelector("#header").className)

document.querySelector("#header").classList.add (" new-class")
console.log (document.querySelector("#header").className) (" new-class")

document.querySelector("#header").classList.toggle("Second")
console.log (document.querySelector("#header").className)
document.querySelector("#header").classList.toggle("title")
console.log (document.querySelector("#header").className)