class ElectricLamp {
    constructor() {
        this.status = true ;
    }
    turnOnOff() {
        if (this.status == true) {
            alert("The Electric Lamp is shining");
        }
        else  {
            alert("The Electric Lamp is off");
        }
        // switch (this.status) {
        //     case true :
        //         alert("The Electric Lamp is shining");
        //         break;
        //     case false :
        //         alert("The Electric Lamp is off");
        //         break;
        // }
    }
}
let lamp = new ElectricLamp()