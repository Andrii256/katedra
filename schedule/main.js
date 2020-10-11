"use strict";

class Day {
   constructor(day, month, year, lessons) {
      this.date = new Date(`${month} ${day} ${year} 23:59`);
      this.lessons = lessons;
   }
}

class Lesson {
   constructor(number, name, teacher, room) {
      this.number = number;
      this.name = name;
      this.teacher = teacher;
      this.room = room;
   }
}

const initialDays = [
   // array of days
   new Day(15, 10, 2020, [
      new Lesson(1, "ВП 06 Тактика МП 7/1 л", "Коротков", "201"),
      new Lesson(2, "ВП  05 ОМРОС 5/3 гз", "Лакомський", "201"),
      new Lesson(3, "ВП  04 СЗ ВП 3/2 пз", "Добровольський", "204"),
      new Lesson(4, "ВП  10 ВП та П 14/3 пз", "Лакомський", "201")
   ]),
   new Day(22, 10, 2020, [
      new Lesson(1, "ВП 11 МПЗ 1/1 л", "Лакомський", "201"),
      new Lesson(2, "ВП 06 Тактика МП (ОЗ) 14/1 гз", "Шабалдак", "205"),
      new Lesson(3, "ВП 11 МПЗ 1/2 гз", "Лакомський", "201"),
      new Lesson(4, "ВП  06 Тактика МП 8/1 гз", "Проценко", "201")
   ]),
   new Day(29, 10, 2020, [
      new Lesson(1, "ВП 07 ЩВУ 2/1 л", "Коротков", "201"),
      new Lesson(2, "ВП 06 Тактика МП (РХБЗ) 13/3 гз", "Кульчицький", "200"),
      new Lesson(3, "ВП 14 Автомобільна підготовка 1/2 гз", "Прохорчук", "206"),
      new Lesson(4, "ПВ 06 Тактика МП 8/2 с", "Проценко", "201")
   ]),
   new Day(5, 11, 2020, [
      new Lesson(1, "Тактика МП 8/3 пз", "Проценко", "200"),
      new Lesson(2, "Тактика МП 8/3 пз", "Проценко", "200"),
      new Lesson(3, "ВП 05 ОМРОС", "Лакомський", "201"),
      new Lesson(4, "ВП 11 МПЗ 1/3 с", "Лакомський", "201")
   ]),
   new Day(12, 11, 2020, [
      new Lesson(1, "ОППК", "Хуторний", "201"),
      new Lesson(2, "МПЗ", "Лакомський", "206"),
      new Lesson(3, "ОВУ", "Коротков", "201"),
      new Lesson(4, "Автомобільна підготовка", "Прохорчук", "206")
   ]),
   new Day(19, 11, 2020, [
      new Lesson(1, "Тактика МП", "Шабалдак", "201"),
      new Lesson(2, "МПЗ", "Лакомський", "201"),
      new Lesson(3, "Тактика МП", "Проценко", "200"),
      new Lesson(4, "Тактика МП", "Проценко", "200")
   ]),
   new Day(26, 11, 2020, [
      new Lesson(1, "СЗ ВП", "Добровольський", "204"),
      new Lesson(2, "ОМРОС", "Лакомський", "201"),
      new Lesson(3, "Тактика МП", "Кульчицький", "200"),
      new Lesson(4, "Автомобільна підготовка", "Прохорчук", "206")
   ])
];
/*
   new Day(день, місяць, 2020, [
      new Lesson(1, 'наваПредмету', 'назваВикладача', 'кабінет'),
      new Lesson(2, 'наваПредмету', 'назваВикладача', 'кабінет'),
      new Lesson(3, 'наваПредмету', 'назваВикладача', 'кабінет'),
      new Lesson(4, 'наваПредмету', 'назваВикладача', 'кабінет'),
   ]),
   */

function createDay(dayObj) {
   const day = document.createElement("section");
   day.classList.add("day"); // add date

   day.insertAdjacentHTML(
      "afterbegin",
      `
      <h2 class="day__date">
      ${dayObj.date.getDate()} ${getUkrMonthString(dayObj.date)} ${
      dayObj.date.getYear() + 1900
    }
      </h1>
   `
   ); // add lessons

   dayObj.lessons.forEach((lesson) => {
      day.appendChild(createLesson(lesson));
   });
   return day;
}

function getUkrMonthString(date) {
   let index = date.getMonth();

   switch (index) {
      case 0:
         return "Січня";

      case 1:
         return "Лютого";

      case 2:
         return "Березня";

      case 3:
         return "Квітня";

      case 4:
         return "Травня";

      case 5:
         return "Червня";

      case 6:
         return "Липня";

      case 7:
         return "Серпня";

      case 8:
         return "Вересня";

      case 9:
         return "Жовтня";

      case 10:
         return "Листопада";

      case 11:
         return "Грудня";

      default:
         return "невідомого місяця";
   }
}

function createLesson(lessonObj) {
   const lesson = document.createElement("div");
   lesson.classList.add("lesson");
   lesson.insertAdjacentHTML(
      "beforeend",
      `
      <p class="lesson__number">${lessonObj.number}</p>
      <div class="lesson__right-part">
         <h3 class="lesson__name">${lessonObj.name}</h3>
         <div class="lesson__bottom-part">
            <p class="lesson__teacher">${lessonObj.teacher}</p>
            <p class="lesson__room">к ${lessonObj.room}</p>
         </div>
      </div>
   `
   );
   return lesson;
}

function renderDays(arrayOfDays) {
   currentDays = arrayOfDays;

   daysContainer.innerHTML = "";
   arrayOfDays.forEach((day) => {
      daysContainer.appendChild(createDay(day));
   });
}

const today = new Date();
const nextDays = initialDays.filter((day) => day.date >= today);
const complitedDays = initialDays.filter((day) => day.date < today);
let currentDays = [];
const daysContainer = document.querySelector("#days");
const nextButton = document.querySelector("#next");
const previousButton = document.querySelector("#previous");
nextDays.sort((dayA, dayB) => dayA.date - dayB.date);
complitedDays.sort((dayA, dayB) => dayB.date - dayA.date); // init

renderDays(nextDays);
nextButton.addEventListener("click", () => renderDays(nextDays));
previousButton.addEventListener("click", () => renderDays(complitedDays));


/* search feature */
const input = document.querySelector('.search__input');

function search(query) {
   renderDays(currentDays);

   let days = [...document.querySelectorAll('.day')];
   return days.filter(day => day.innerText.toUpperCase().includes(query.toUpperCase()));
}

function render(array) {
   daysContainer.innerHTML = '';

   array.forEach(elem => {
      daysContainer.appendChild(elem);
   });
}


input.addEventListener('input', (event) => {
   const query = event.target.value;

   render(search(query));
})