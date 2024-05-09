// Select all elements with class "container"
const containers = document.querySelectorAll(".container");
const sidePanel = document.querySelector("side-panel");
let index = 0

// Loop through each container and add event listener
containers.forEach(container => {
    container.addEventListener("click", nextSection);
    console.log("added")
});

function nextSection() {
    console.log('Clicked!');
    containers[index].style.display = "none";
    containers[(index+1)%3].style.display = "grid";
    index++;
    index%=3;
}