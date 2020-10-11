'use strict';

const container = document.querySelector('.teachers');
const teachers = [...document.querySelectorAll('.teacher')];
const input = document.querySelector('.search__input');

function search(query) {
   return teachers.filter(teacher => teacher.innerText.toUpperCase().includes(query.toUpperCase()));
}

function render(array) {
   container.innerHTML = '';

   array.forEach(elem => {
      container.appendChild(elem);
   });
}


input.addEventListener('input', (event) => {
   const query = event.target.value;

   render( search(query) );
})

