class Cat {
    constructor(_name,_weight,_speed) {
        this.name = _name;
        this.weight = _weight;
        this.speed = _speed;
    }
    sounding(text) {
        document.write("Cat said:" + text + "<br>");
    }
    catch(rat) {
        if (this.speed > rat.speed) {
            document.write("catched you, " + rat.name +"<br>");
        }
        else {
            document.write("slowdown baby," + rat.name);
        }
        this.weight--;
    }
    eat(rat) {
        document.write("You are delicious! " + rat.name);
        rat.status = false;
        this.weight += rat.weight;
    }
}
let Tom = new Cat("Tom",20,23);
Tom.sounding("run babe");
jerry.sounding("help!");

Tom.catch(jerry);

Tom.eat(jerry);