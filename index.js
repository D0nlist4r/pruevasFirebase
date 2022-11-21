import {Tasksave, getTasks, ongetTask} from './firebase.js';

const taskform = document.getElementById('task-form');
const taskContainer = document.getElementById('tasks-container');
let html = ``;

window.addEventListener('DOMContentLoaded', async () => {
  
  ongetTask(querysnapshot => {
  querysnapshot.forEach(doc => {
    const task = doc.data();
    html+=`
    <div>
    <h3>${task.title}</h3>
    <p>${task.description}</p>
    </div>`
  } );
  taskContainer.innerHTML= html;
});
});



taskform.addEventListener('submit',(e)=>{
  e.preventDefault()
  const title = taskform['task-title'];
  const description = taskform['task-description'];

  Tasksave(title.value,description.value); //creacion de un nuevo objeto en la database

  taskform.reset();
})