function Countdown(num) {
    this.countdownFrom = num;
}

Countdown.prototype.start = function () {
    if (this.countdownFrom >= 0) {
        setTimeout(
            function () {
                console.log(this.countdownFrom);
                this.start((this.countdownFrom -= 1));
            }.bind(this),
            1000
        );
    }
};

var countdown = new Countdown(5);
countdown.start();
