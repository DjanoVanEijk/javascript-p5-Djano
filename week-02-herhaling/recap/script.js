button = document.getElementById("test-btn")
invoer = document.getElementById("input").value
output = document.getElementById("output")
function iets(){
button.style.backgroundcolor = "green"
output.innerHTML = invoer
output.style.color = "green"

}

button.addeventlistener('click', iets)