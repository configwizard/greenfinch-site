(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  let roundone = "April 21, 2023 15:59:00",
      countDown = new Date(roundone).getTime(),
      x = setInterval(function() {    

        let now = new Date().getTime(),
            distance = countDown - now;

            var rDay = Math.floor(distance / (day));
            var rHour = Math.floor((distance % (day)) / (hour));
            var rMin = Math.floor((distance % (hour)) / (minute));
            var rSec = Math.floor((distance % (minute)) / second);

            /* 
            document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
            */

        document.getElementById("days").innerText = rDay,
        document.getElementById("hours").innerText = rHour,
        document.getElementById("minutes").innerText = rMin,
        document.getElementById("seconds").innerText = rSec;

        // do something later when date is reached
        if (distance < 0) {
          let headline = document.getElementById("headline"),
              countdown = document.getElementById("countdown"),
              content = document.getElementById("content");

          headline.innerText = "It's MainNet time!";
          countdown.style.display = "none";
          content.style.display = "block";

          clearInterval(x);
        }
        //seconds
      }, 0)
  }());

