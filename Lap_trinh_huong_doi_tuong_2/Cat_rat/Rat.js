class Rat {
    constructor(_name,_weight,_speed) {
        this.name = _name;
        this.weight = _weight;
        this.speed = _speed;
        this.status = true;
    }
    sounding(text) {
        return ("Rat said: " + text);
    }
}
let jerry = new Rat("jerry",10,15);
