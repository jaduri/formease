import Form from "./Form.js";
import Input from "./Input.js";

document.addEventListener("DOMContentLoaded", function(){
  document.getElementById("primary-form").addEventListener("submit", function(){
    event.preventDefault();
    createElement(this.children[1].value, this.children[3].value, this.children[5].value);
    this.children[1].value = "";
    this.children[3].value = "";
    this.children[5].value = "";
    //generate form to build final html form array fields
    document.getElementById("root").innerHTML = form.generateForm();
  });
});

function createElement(type, name, label){
  form.addField(type, name, label);
}
const form = new Form("/register", "Submit", "POST");
