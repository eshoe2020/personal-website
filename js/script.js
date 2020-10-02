// Declare your constants and variables(state)
//select and cache DOM element reference
//initialize your event listeners
//Define application functions

let year;
const yearEl = document.getElementById('year');
init();
function init() {
    year = new Date().getFullYear();
    yearEl.innerText = year;
}
