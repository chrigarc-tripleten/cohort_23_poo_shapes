import { openPopup } from "../utils/utils.js";

export default class Shape {
  constructor(className) {
    this._className = className;
  }

  perimeter() {}

  area() {}

  _getTemplate() {
    const template = document
      .querySelector(".shape-template")
      .content.querySelector(".shape");
    this._shape = template.cloneNode(true);
    this._shape.querySelector('.shape__type').classList.add(this._className);
  }

  _setEventListeners() {
    const deleteButton = this._shape.querySelector(".shapa__action_delete");
    const areaButton = this._shape.querySelector(".shapa__action_area");
    const perimeterButton = this._shape.querySelector(
      ".shapa__action_perimeter"
    );
    deleteButton.addEventListener("click", () => {
      this._shape.remove();
    });

    areaButton.addEventListener("click", () => {
     // alert(`El area es: ${this.area()}`);
     openPopup(`El area es: ${this.area()}`)
    });

    perimeterButton.addEventListener("click", () => {
      //alert(`El perimetro es: ${this.perimeter()}`);
      openPopup(`El perimetro es: ${this.perimeter()}`)
    });
  }

  render() {
    this._getTemplate();
    this._setEventListeners();
    return this._shape;
  }

  //dibuje -- render
  //buscar template colocar clase
  //activar eventos
}
