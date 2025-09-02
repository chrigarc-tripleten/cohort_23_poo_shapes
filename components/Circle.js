import Shape from "./Shape.js";

export default class Circle extends Shape {
    constructor(radio){
        super('shape__type_circle')
        this._radio = radio;
    } 

    perimeter() {
        return this._radio * 2 * Math.PI; 
    }

    area() {
        return this._radio * this._radio * Math.PI;
    }
}