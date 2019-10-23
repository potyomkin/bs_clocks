
/** Our wonderfull little clock **/
class Clock {

  /**
   * Clock initialization
   */
  constructor(tz) {
    this.hourHand = document.querySelector('[data-tz="'+tz+'"] .hour.hand');
    this.minuteHand = document.querySelector('[data-tz="'+tz+'"] .minute.hand');
    this.secondHand = document.querySelector('[data-tz="'+tz+'"] .second.hand');
    this.tz = tz;
    this.timer();
    setInterval(() => this.timer(), 1000);

    this.tz;
  }
  
  /**
   * Timer of the clock
   */
  timer() {
    this.sethandRotation('hour');
    this.sethandRotation('minute');
    this.sethandRotation('second');
  }

  // let date = new Date();
  // console.log('asdasd');



  /**
   * Changes the rotation of the hands of the clock
   * @param  {HTMLElement} hand   One of the hand of the clock
   * @param  {number}      degree degree of rotation of the hand
   */
  sethandRotation(hand) {
    let date, hours, minutes, seconds, percentage, degree;
   

    // tm = new Date().toLocaleString('en-US', {timeZone: this.tz});
    // console.log(tm);

    
    // console.log(new Date(new Date().toLocaleString('en-US', {timeZone: this.tz})));


    date = new Date(new Date().toLocaleString('en-US', {timeZone: this.tz}));
	
    // console.log(this.tz);


    switch (hand) {
      case 'hour':
        hours = date.getHours();
        minutes = date.getMinutes();

        hand = this.hourHand;
        percentage = this.numberToPercentage(hours+minutes/60, 12);
 
        break;
      case 'minute':
        minutes = date.getMinutes();
        hand = this.minuteHand;
        percentage = this.numberToPercentage(minutes, 60);
        break;
      case 'second':
        seconds = date.getSeconds();
        hand = this.secondHand;
        percentage = this.numberToPercentage(seconds, 60);
        break;
    }
  
    degree = this.percentageToDegree(percentage);
    hand.style.transform = `rotate(${degree}deg) translate(-50%, -50%)`;
  }

  /**
   * Converting a number to a percentage
   * @param  {number} number Number
   * @param  {number} max    Maximum value of the number
   * @return {number}        Return a percentage
   */
  numberToPercentage(number = 0, max = 60) {
    return (number / max) * 100;
  }

  /**
   * Converting a percentage to a degree
   * @param  {number} percentage Percentage
   * @return {number}            Return a degree
   */
  percentageToDegree(percentage = 0) {
    return (percentage * 360) / 100;
  }

}

// let newyork = new Clock('newyork','America/New_York');
// let london = new Clock('london','Europe/London');
// let singapore = new Clock('singapore','Asia/Singapore');


// const z = Array.from(document.getElementsByClassName('clock_item'));

var clock = document.querySelectorAll('.clock');




for (var i = 0; i < clock.length; ++i) {

  new Clock(clock[i].dataset.tz);
  	
}
