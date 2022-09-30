// visual to verify what page is being affected
document.body.style.border = "5px solid red";

// character name element at the top of the page
const char = document.getElementsByClassName("title-name h1_bold_none")[0];

// handles inserting button
Element.prototype.appendAfter = function(element){
  element.parentNode.insertBefore(this, element.nextSibling);
}, false;

// create button
let button = document.createElement("button");
button.innerHTML = "Add to MALFC";
button.className = "addChar";
// button styling
button.style.marginLeft = "10px";
button.style.backgroundColor = "#2f52a2";
button.style.color = "#ffffff";
button.style.borderRadius = "5px";

// handle button click
button.addEventListener("click", function(){
  // get current URL
  const fetchUrl = window.location.href;
  // grab character ID from url
  let trim = fetchUrl.split('/').slice(4,5)
  // MAL page console is messy so using alert instead of console.log()
  alert(`${trim}`)
});

// append button after character name
button.appendAfter(char);