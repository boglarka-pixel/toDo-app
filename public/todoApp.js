// Create a "close" and a "done" button and append it to each list item

let myNodelist = document.getElementsByTagName("LI");

for (let i = 0; i < myNodelist.length; i++) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("Delete");
    let span2 = document.createElement("SPAN");
    let txt2 = document.createTextNode("Done");
    span2.className = "done";
    span.className = "close";
    span.appendChild(txt);
    span2.appendChild(txt2);
    myNodelist[i].appendChild(span);
    myNodelist[i].appendChild(span2);
}


// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");

for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
    }
}
//Click on a done button to check the current list item
let done = document.getElementsByClassName("done");

for (let i = 0; i < done.length; i++) {
    done[i].onclick = function() {
        let div = this.parentElement;
        div.classList.toggle('line-throuh');

    }
}



// Create a new list item when clicking on the "Add" button
function newElement() {
    let li = document.createElement("li");
    // li.classList.add('checked')
    let inputValue = document.getElementById("myInput").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    let span = document.createElement("SPAN");
    let span2 = document.createElement("SPAN");
    let txt = document.createTextNode("Delete");
    let txt2 = document.createTextNode("Done");
    span.className = "close";
    span2.className = "done";
    span.appendChild(txt);
    span2.appendChild(txt2);
    li.appendChild(span);
    li.appendChild(span2);


    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}