class Remote {
    constructor(_tivi) {
        this.tivi = _tivi;
    }
    getChannel() {
        this.tivi.getChannel();
    }
    setTivi(tivi) {
        this.tivi = tivi;
    }
    changeChannel(newChannel) {
        this.tivi.setChannel(newChannel);
    }
    changeVolume(newVolume) {
        this.tivi.setVolume(newVolume);
    }
    turnOnOff() {
        this.tivi.turnOnOff();
    }
}
let remote = new Remote(tivi);
remote.changeChannel(6);
remote.getChannel();