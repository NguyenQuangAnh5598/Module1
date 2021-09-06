class SwitchButton {
    constructor(_status) {
        this.status = _status;
    }
    connectToLamp(lamp) {
        if (this.status==true) {
             lamp.status = true;
        }
        else  {
            lamp.status = false;
        }
    }

    switchOff() {
         this.status = false;
    }
    switchOn() {
         this.status = true;
    }
}
let congtac = new SwitchButton(true)
congtac.connectToLamp(lamp);
lamp.turnOnOff();