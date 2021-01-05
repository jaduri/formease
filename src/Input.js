class Input{
  constructor(type = "text", name = "", label = " Input Label", id = name){
    this.type = type;
    this.name = name;
    this.label = label;
    this.arr = [];
  }

  generateInput(){
    let input = "";

    switch(this.type){
      case "reset":
      case "submit":
      case "hidden":
        input = `<input type="${this.type}" name="${this.name}"/>`;
        break;
      case "checkbox":
      case "radio":
        input = `<label for="${this.name}"><input type="${this.type}" name="${this.name}"/> ${this.label}</label>`
        break;
      default:
        input = `<label for="${this.name}">${this.label}</label>
        <input type="${this.type}" name="${this.name}"/>`
        break;
    }
    return input;
  }
}
export default Input;
