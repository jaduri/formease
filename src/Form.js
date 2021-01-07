import Input from "./Input.js";

class Form{
  constructor(action, buttonAction = "Submit", method = "POST"){
    this.action = action;
    this.method = method;
    this.content = "";
    this.fields = [];
    this.buttonAction = buttonAction;
  }

  addField(type, name, label){
    this.fields.push(new Input(type, name, label).generateInput());
  }

  generateForm(){
    this.content = this.fields.reduce((final, current) => {
      return final += current + "\n";
    });
    return `<form action="${this.action}" method="${this.method}">
    ${this.content}<button type="submit">${this.buttonAction}</button>
    </form>`
  }
}

export default Form;
