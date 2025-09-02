import Shape from "./Shape.js";

export default class Square extends Shape {
  constructor(side) {
    super("shape__type_square");
    this._side = side;
  }

  perimeter() {
    return this._side * 4;
  }

  area() {
    return this._side * this._side;
  }
}
