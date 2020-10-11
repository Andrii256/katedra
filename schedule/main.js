'use strict';

import initialDays from './data.js';

console.log(initialDays);

function createDay(dayObj) {
   const day = document.createElement("section");
   day.classList.add("day");

   // add date
   day.insertAdjacentHTML('afterbegin', `
      <h2 class="day__date">
      ${dayObj.date.getDate()} ${getUkrMonthString(dayObj.date)} ${dayObj.date.getYear() + 1900}
      </h1>
   `)

   // add lessons
   dayObj.lessons.forEach(lesson => {
      day.appendChild(createLesson(lesson))
   });

   return day;
}

function getUkrMonthString(date) {
   let index = date.getMonth();
   switch (index) {
      case 0: return 'Січня';
      case 1: return 'Лютого';
      case 2: return 'Березня';
      case 3: return 'Квітня';
      case 4: return 'Травня';
      case 5: return 'Червня';
      case 6: return 'Липня';
      case 7: return 'Серпня';
      case 8: return 'Вересня';
      case 9: return 'Жовтня';
      case 10: return 'Листопада';
      case 11: return 'Грудня';
      default: return 'невідомого місяця';
   }
}

function createLesson(lessonObj) {
   const lesson = document.createElement('div');
   lesson.classList.add('lesson');
   lesson.insertAdjacentHTML('beforeend', `
      <p class="lesson__number">${lessonObj.number}</p>
      <div class="lesson__right-part">
         <h3 class="lesson__name">${lessonObj.name}</h3>
         <div class="lesson__bottom-part">
            <p class="lesson__teacher">${lessonObj.teacher}</p>
            <p class="lesson__room">к ${lessonObj.room}</p>
         </div>
      </div>
   `)

   return lesson;
}

function renderDays(arrayOfDays) {
   daysContainer.innerHTML = '';

   arrayOfDays.forEach(day => {
      daysContainer.appendChild(createDay(day));
   });
}

const today = new Date();
const nextDays = initialDays.filter(day => day.date >= today);
const complitedDays = initialDays.filter(day => day.date < today);

const daysContainer = document.querySelector('#days');
const nextButton = document.querySelector('#next');
const previousButton = document.querySelector('#previous');


nextDays.sort((dayA, dayB) => (dayA.date - dayB.date));
complitedDays.sort((dayA, dayB) => (dayB.date - dayA.date));

// init
renderDays(nextDays);

nextButton.addEventListener('click', () => renderDays(nextDays))
previousButton.addEventListener('click', () => renderDays(complitedDays))