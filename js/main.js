'use strict';

window.addEventListener('DOMContentLoaded', function () {
    let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
    let date = new Date();
    let currentDay = date.getDay();
    week.forEach(function (day, index) {
        let presentDay = document.createElement('p');
        presentDay.textContent = day;
        document.body.appendChild(presentDay);
        if (index === 5 || index === 6) {
            presentDay.style.fontStyle = 'italic';
        }
        if (currentDay === 0) {
            currentDay = 7;
        }
        if (index === (currentDay - 1)) {
            presentDay.style.fontWeight = 'bold';
        }
    });
});