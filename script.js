// Contador
(function () {
  'use strict';

  class Countdown {
    constructor(futureDate) {
      this.ele = document.querySelector('.countdown');
      this.futureDate = futureDate;
      this.daysEle = document.querySelector('[data-cd="days"]');
      this.hoursEle = document.querySelector('[data-cd="hours"]');
      this.minutesEle = document.querySelector('[data-cd="minutes"]');
      this.secondsEle = document.querySelector('[data-cd="seconds"]');
      this.init();
    }
    init() {
      this.timer = setInterval(() => {
        this.counter();
      }, 1000);
      setTimeout(() => {
        this.ele.classList.add('active');
      }, 1000);
    }
    counter() {
      const currentDate = new Date();
      this.diff = this.futureDate.getTime() - currentDate.getTime();
      const days = this.getDays();
      const hours = this.getHours();
      const minutes = this.getMinutes();
      const seconds = this.getSeconds();
      if (this.daysEle) {
        this.daysEle.innerText = days;
        const daysInf = document.querySelectorAll('.cd-days');
        if (days < 1) {
          daysInf.forEach((item) => (item.style.display = 'none'));
        } else {
          daysInf.forEach((item) => (item.style.display = 'block'));
        }
      }
      if (this.hoursEle) {
        this.hoursEle.innerText = hours;
      }
      if (this.minutesEle) {
        this.minutesEle.innerText = minutes;
      }
      if (this.secondsEle) {
        this.secondsEle.innerText = seconds;
      }
      if (this.diff < 1000) {
        this.destroy();
      }
    }
    getDays() {
      const days = Math.floor(this.diff / 1000 / 60 / 60 / 24);
      return days >= 0 ? days : 0;
    }
    getHours() {
      return this.zeroFill(Math.floor(this.diff / 1000 / 60 / 60) % 24);
    }
    getMinutes() {
      return this.zeroFill(Math.floor(this.diff / 1000 / 60) % 60);
    }
    getSeconds() {
      return this.zeroFill(Math.floor(this.diff / 1000) % 60);
    }
    zeroFill(num) {
      let n = num < 0 ? 0 : num;
      return n > 9 ? n : '0' + n;
    }
    updateDate(date) {
      clearInterval(this.timer);
      this.futureDate = new Date(date + ' GMT-0300');
      this.init();
    }
    destroy() {
      clearInterval(this.timer);
    }
  }

  const $texts = document.querySelector('h1');
  const $figure = document.querySelector('figure');
  const $el = document.querySelector('.countdown');
  const date = new Date($el.dataset.date);
  const countdown = new Countdown(date);
  setTimeout(() => {
    $texts.classList.add('active');
    $figure.classList.add('active');
  }, 700);
})();

// Animação fundo corações
(function () {
  'use strict';
  const hearts = setInterval(function () {
    const r_num = Math.floor(Math.random() * 40) + 1;
    const r_size = Math.floor(Math.random() * 65) + 10;
    const r_left = Math.floor(Math.random() * 100) + 1;
    const r_bg = Math.floor(Math.random() * 25) + 100;
    const r_time = Math.floor(Math.random() * 5) + 5;

    $('.bg_heart').append(
      "<div class='heart' style='width:" +
        r_size +
        'px;height:' +
        r_size +
        'px;left:' +
        r_left +
        '%;background:rgba(255,' +
        (r_bg - 25) +
        ',' +
        r_bg +
        ',1);-webkit-animation:love ' +
        r_time +
        's ease;-moz-animation:love ' +
        r_time +
        's ease;-ms-animation:love ' +
        r_time +
        's ease;animation:love ' +
        r_time +
        "s ease'></div>",
    );

    $('.bg_heart').append(
      "<div class='heart' style='width:" +
        (r_size - 10) +
        'px;height:' +
        (r_size - 10) +
        'px;left:' +
        (r_left + r_num) +
        '%;background:rgba(255,' +
        (r_bg - 25) +
        ',' +
        (r_bg + 25) +
        ',1);-webkit-animation:love ' +
        (r_time + 5) +
        's ease;-moz-animation:love ' +
        (r_time + 5) +
        's ease;-ms-animation:love ' +
        (r_time + 5) +
        's ease;animation:love ' +
        (r_time + 5) +
        "s ease'></div>",
    );

    $('.heart').each(function () {
      const top = $(this)
        .css('top')
        .replace(/[^-\d\.]/g, '');
      const width = $(this)
        .css('width')
        .replace(/[^-\d\.]/g, '');
      if (top <= -100 || width >= 150) {
        $(this).detach();
      }
    });
  }, 500);
})();
