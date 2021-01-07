import Form from "./Form.js";
import Input from "./Input.js";

//create form instance
const form = new Form("/register", "Submit", "POST");

//ensure document is loaded
document.addEventListener("DOMContentLoaded", function(){
  //attach listener to add form button
  document.getElementById("primary-form").addEventListener("submit", function(){
    event.preventDefault();
    //create single element from add form fields
    createElement(this.children[1].value, this.children[3].value, this.children[5].value);
    //reset add form fields
    this.children[1].value = "";
    this.children[3].value = "";
    this.children[5].value = "";
    //generate form to build final html form array fields
    document.getElementById("root").innerHTML = form.generateForm();
  });
  //add copy button event listener
  document.getElementById("copy-button").addEventListener("click", function(){
    event.preventDefault();
    //store form code in variable
    const code = document.getElementById("root").innerHTML;
    //copy code to clipboard
    navigator.clipboard.writeText(code).then(()=>{
      let note = document.getElementById("notification");
      //show notification
      note.innerHTML = "Copied!";
      note.classList.add("show-note");
      const displayNote = setTimeout(function(){
        //hide notification
        note.classList.remove("show-note");
        clearTimeout(displayNote);
      }, 5000);
    });
  });
});

function createElement(type, name, label){
  type = (type === "") ? "text" : type
  label = (label === "") ? "No label" : label
  form.addField(type, name, label);
}
