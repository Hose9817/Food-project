window.addEventListener('DOMContentLoaded', () => {

    //Tabs

    const tabs = document.querySelectorAll('.tabheader__item');
    const tabsContent = document.querySelectorAll('.tabcontent');
    const tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContent.forEach(el => {
            el.classList.add('hide');
            el.classList.remove('show', 'fade');
        });

        tabs.forEach(el => {
            el.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }

    });

    // Timer

    // const deadline = '2022-06-11';

    // function getTimeRemaine(endTime) {
    //     let t = Date.parse(endTime) - Date.parse(new Date()),
    //         days = Math.floor(t / (1000 * 3600 * 24)),
    //         hours = Math.floor((t / (1000 * 3600)) % 24),
    //         minutes = Math.floor((t / (1000 * 60)) % 60),
    //         seconds = Math.floor((t / 1000) % 60);

    //     return {
    //         'total': t,
    //         'days': days,
    //         'hours': hours,
    //         'minutes': minutes,
    //         'seconds': seconds,
    //     };
    // }

    // function setClock(selector, endTime) {
    //     const timer = document.querySelector(selector),
    //         days = timer.querySelector('#days'),
    //         hours = timer.querySelector('#hours'),
    //         minutes = timer.querySelector('#minutes'),
    //         seconds = timer.querySelector('#seconds'),
    //         timeInterval = setInterval(updateClock, 1000);

    //         updateClock();

    //         function getZero(num) {
    //             if(num >= 0 && num < 10){
    //                 return `0${num}`;
    //             } else {
    //                 return num;
    //             }
    //         }

    //     function updateClock() {
    //         const t = getTimeRemaine(endTime);

    //         days.innerHTML = getZero(t.days);
    //         hours.innerHTML = getZero(t.hours);
    //         minutes.innerHTML = getZero(t.minutes);
    //         seconds.innerHTML = getZero(t.seconds);

    //         if(t.total <= 0){
    //             clearInterval(timeInterval);
    //         }
    //     }
    // }

    // setClock('.timer', deadline);

    const deadline = '2022-06-11';

    function getTimeRemain(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(t / (1000 * 3600 * 24)),
            hours = Math.floor((t / (1000 * 3600)) % 24),
            minutes = Math.floor((t / (1000 * 60)) % 60),
            seconds = Math.floor((t / 1000) % 60);

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
        };
    }

    function setClock(selector, endtime) {
        const time = document.querySelector(selector),
            days = time.querySelector('#days'),
            hours = time.querySelector('#hours'),
            minutes = time.querySelector('#minutes'),
            seconds = time.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function getZero(num) {
            if (num >= 0 && num < 10) {
                return `0${num}`;
            } else {
                return num;
            }
        }

        function updateClock() {
            const t = getTimeRemain(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }

        }
    }

    setClock('.timer', deadline);

});