function timer() {
    //Timer

    const deadLine = '2021-06-18';

    function getTimeremaning(endTime) {
        const t = Date.parse(endTime) - Date.parse(new Date()),
            days = Math.floor(t / 86400000),
            hours = Math.floor((t / 3600000) % 24),
            minutes = Math.floor((t / 60000) % 60),
            seconds = Math.floor((t / 1000) % 60);

        return {
            total: t,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds

        };

    }

    function addLeadingZero(number) {
        if (number < 10) {
            return "0" + number.toString();
        } else {
            return number.toString();
        }
    }

    function setClock(selector, endTime) {

        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);



        updateClock();


        function updateClock() {

            const t = getTimeremaning(endTime);

            days.innerHTML = addLeadingZero(t.days);
            hours.innerHTML = addLeadingZero(t.hours);
            minutes.innerHTML = addLeadingZero(t.minutes);
            seconds.innerHTML = addLeadingZero(t.seconds);
            const timeClock = setInterval(clock, 1000);

            clock();

            function clock() {
                const currentTime = new Date(),
                    hoursAfter = currentTime.getHours(),
                    minutesAfter = currentTime.getMinutes(),
                    secondsAfter = currentTime.getSeconds();

                if (t.total <= 0) {

                    clearInterval(timeInterval);
                    days.innerHTML = '00';
                    hours.innerHTML = addLeadingZero(hoursAfter);
                    minutes.innerHTML = addLeadingZero(minutesAfter);
                    seconds.innerHTML = addLeadingZero(secondsAfter);


                }

            }

        }

    }



    setClock('.timer', deadLine);
}

module.exports = timer;