class Tivi {
    constructor(_channel,_volume,_status) {
        this.channel = _channel;
        this.volume = _volume;
        this.status = _status;
    }
    setChannel(newchannel) {
        this.channel = newchannel;
    }
    setVolume(newvolume) {
        this.volume = newvolume;
    }
    turnOnOff() {
        this.status = !this.status;
    }
    getChannel() {
        alert(this.channel) ;
    }
}
let tivi = new Tivi(2,4,true);