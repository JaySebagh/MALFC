// visual to verify what page is being affected
document.body.style.border = "5px solid blue";

// character name element at the top of the page
const characters = document.getElementsByClassName("h3_characters_voice_actors");

// loop through "Characters & Voice Actors" section
for(let char of characters){
    // handles inserting button
    Element.prototype.appendAfter = function(element) {
        element.parentNode.insertBefore(this, element.nextSibling.nextSibling.nextSibling);
    }, false;
    
    // create button
    let button = document.createElement("button");
    button.innerHTML = "Add to MALFC";
    button.className = "addChar";
    // button styling
    button.style.backgroundColor = "#2f52a2";
    button.style.color = "#ffffff";
    button.style.borderRadius = "5px";
    button.style.fontSize = "10px"
    
    // handle button click
    button.addEventListener("click", function(){
        // get character URL
        const fetchUrl = char.firstChild.href;
        // grab character ID from url
        let trim = fetchUrl.split('/').slice(4,5)
        // MAL page console is messy so using alert instead of console.log()
        alert(`${trim}`)
    });
    
    // append button after character name
    button.appendAfter(char);
}


