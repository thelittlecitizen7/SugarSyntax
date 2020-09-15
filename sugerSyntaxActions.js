

window.onload = function () {
    var newString = StringFormat("{name} {lastName} with {age}",{name: "lior" , lastName: "bahar",age: 22});
    console.log(newString);

    var circle = new Circle("rehovot","red",new Point(2,3),1.2);
    console.log(circle.ToString());
    circle.ChangePoint(new Point(4,5));
    console.log(circle.ToString());
}

// 1
function StringFormat(str , dic){
    
    var newStr = str;
    
    for (var key in dic)
    {
        newStr = newStr.replace("{" + key + "}",dic[key]);
    }
   
      return newStr;
}

class Point {
    x;
    y;
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    
}



// 2
class Shape {
    area;
    color;
    point; 
    constructor(area,color,point){
        this.area = area;
        this.color = color;
        this.point = point;
    }
    ToString() {
        return "area : " + this.area + " color : " + this.color + " point : x : " + this.point.x + " point : y : " + this.point.y;
    }
    ChangePoint(point){
        this.point = point;
    }
}


class Circle extends Shape{
    radios;
    constructor(area,color,point,radios){
        
        super(area,color,point);
        this.radios = radios;
    }

    ToString(){
        return super.ToString() + " radios : " + this.radios
    }
}

class Square  extends Shape{
    name
    constructor(area,color,point,name){
        
        super(area,color,point);
        this.name = name;
    }
    ToString(){
        return super.ToString() + " name : " + this.name
    }
}