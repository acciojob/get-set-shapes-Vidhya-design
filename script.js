//complete this code
class Rectangle {
	constructor(width,height){
      this._width=width,
		  this._heigth=heigth;
}
	get width(){
      return width;
}
	get heigth(){
   return height;
}

	get area(){
      return this._width * this._height;
}
	
}

class Square extends Rectangle {
       constructor(side){
		   super(side, side);
    this._side = side;
}
	 getPerimeter() {
    return this._side * 4;
  }
	
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
