class Vec{
 constructor(x,y){
   this.x = x;
   this.y = y;
 }

  plus(value){
    return new Vec(this.x + value.x, this.y + value.y);
  }
  
  minus(value){
   	return new Vec(this.x - value.x, this.y - value.y);
  }
  
  get length(){
    return Math.sqrt((this.x * this.x) + (this.y * this.y));
  }
}
 