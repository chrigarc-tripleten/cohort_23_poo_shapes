import Square from "../components/Square.js";
import Circle from "../components/Circle.js";
import { shapesArea } from "../utils/constants.js";

const square = new Square(10);
shapesArea.append(square.render());

const circle = new Circle(20);
shapesArea.append(circle.render());