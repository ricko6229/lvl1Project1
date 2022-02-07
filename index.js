class DigitalClock {
    constructor(element){
        this.element= element;
        console.log(this.element);
    }
}

const clockElement = document.querySelector(".clock");
const clockObject = new DigitalClock(clockElement);