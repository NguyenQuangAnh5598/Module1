class Human {
    constructor(_name,_sex,_weight) {
        this.name = _name;
        this.sex = _sex;
        this.weight = _weight;
    }
    checkInformation(Human) {
        return Human.name +" , weight: " + Human.weight +" ,sex: " + Human.sex;
}
    speak(text) {
        alert(text);
    }
    checkApple(apple) {
        return apple.getWeight() > 0;
    }
    eatApple(apple) {
        if (this.checkApple(apple)) {
            alert(this.name + " take a bite of apple");
            this.weight++;
            apple.decrease();
        }
    }
    checkAppleweight(apple) {
        return apple.getWeight();
    }
}
let Adam = new Human("Adam","Men",70);
let Eva = new Human("Eva","Lady",50);

Adam.speak("Hello đằng ấy");
Eva.speak("Đằng ấy say hi");
Adam.eatApple(apple);
Eva.eatApple(apple);
alert("Now adam weight is" + Adam.weight);
alert("Now Eva weight is" + Eva.weight);
alert("Adam said the weight of the apple is " + Adam.checkAppleweight(apple));
alert(Adam.checkInformation(Eva));