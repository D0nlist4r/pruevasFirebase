import {Tasksave, getTasks, ongetTask , deleteTask} from './firebase.js';

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
    <button class="btn-delete" data-id="${doc.id}">Delete</button>
    </div>`
     } );
    taskContainer.innerHTML= html;
    const btnTaskdelete = taskContainer.querySelectorAll('.btn-delete');
    btnTaskdelete.forEach( btn =>{
    btn.addEventListener("click", ({ target: { dataset } })=>{
       deleteTask(dataset.id);
    })
  })
 });
});



taskform.addEventListener('submit',(e)=>{
  e.preventDefault()
  const title = taskform['task-title'];
  const description = taskform['task-description'];

  Tasksave(title.value,description.value); //creacion de un nuevo objeto en la database

  taskform.reset();
})