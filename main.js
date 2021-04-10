import './main.css';

// countdown
(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  let birthday = "May 30, 2021 16:00:00",
    countDown = new Date(birthday).getTime(),
    x = setInterval(function () {

      let now = new Date().getTime(),
        distance = countDown - now;

      document.getElementById("days").innerText = Math.floor(distance / (day)),
        document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

      //do something later when date is reached
      if (distance < 0) {
        let headline = document.getElementById("headline"),
          countdown = document.getElementById("countdown"),
          content = document.getElementById("content");

        headline.innerText = "Наша свадьба уже сегодня!";
        countdown.style.display = "none";
        content.style.display = "block";

        clearInterval(x);
      }
      //seconds
    }, 0)
}());

// Fix for iphone
if (navigator.platform === 'iPhone') {
  const navigation = document.getElementById('navigation');
  navigation.style.marginBottom = '11vh';
}

var lastScrollTop = 0;
document.addEventListener('scroll', function (e) {
  var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
  if (st > lastScrollTop) {
    // location.hash = '#main';
    // document.getElementById('main').scrollIntoView(false);
  } else {
    // upscroll code
    window.scrollTo(0, 0);
  }
  lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
});