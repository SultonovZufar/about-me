let timeTag = document.getElementById('time');
let btn = document.getElementById('btn');
let selectedTime = document.getElementById('letter_2');
let currentTime = document.getElementById('currentTime');
currentTime.style.padding = "10px";
currentTime.style.color = "white";
currentTime.style.fontFamily = "Arial";

let dateFormat = new Date().toDateString();

currentTime.textContent = dateFormat; // .split(' ').join('. ')

let finish = new Audio();
finish.src = 'sound.wav';

let givenTime;

class FocusBooster {
    constructor(timeTag) {
        this.timeTag = timeTag;
        this.min = 0;
        this.sec = 0;
        this.inrl;
    }

    secc(a) {
        this.sec = (givenTime * 60 - a) % 60;
        this.sec = this.sec < 10 ? `0${this.sec}` : this.sec;

        return this.sec;
    }

    minn(a) {
        this.min = parseInt((givenTime * 120 - a) / 120);
        this.min = this.min = this.min < 10 ? `0${this.min}` : this.min;

        return this.min;
    }

    stop() {
        if (parseInt(this.min) <= 0 && parseInt(this.sec) <= 0) {
            finish.play();
            clearInterval(this.inrl);
            btn.removeAttribute('disabled');
            selectedTime.removeAttribute('disabled');
            timeTag.textContent = selectedTime.value < 10 ? `0${givenTime} : 00` : `${givenTime} : 00`;
        }
    }

    interv() {
        let b = 1;
        let a = 0;

        this.inrl = setInterval(() => {
           // tick.play();
            a = b++;
            this.timeTag.textContent = `${this.minn(a)} : ${this.secc(a)}`;
            this.stop();
        }, 1000);        
    }
}

let focusbooster = new FocusBooster(timeTag); 

function getTimePar() {
    givenTime = selectedTime.value;
    timeTag.textContent =  selectedTime.value < 10 ? `0${givenTime} : 00` : `${givenTime} : 00`;
    selectedTime.setAttribute('disabled', '');
};

btn.addEventListener('click', function() {
    givenTime = selectedTime.value;
    focusbooster.interv();
    btn.setAttribute('disabled', '');
    selectedTime.setAttribute('disabled', '');
});
