const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

//using the function to show the notes 
function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

//Storing the notes in browser
function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}

//creating the notes on cliclk of create button
createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "img/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})

//delete the note on cliking the delete icon
notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    //else it will update it and will store the notes
    else if(e.target.tagName ==="p"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})

//showing the notes as it has been written
document.addEventListener("keydown", event => {
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})