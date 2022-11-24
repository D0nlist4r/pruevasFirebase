import {Tasksave, getTasks, ongetTask , deleteTask, getTask, updateTask} from './firebase.js';

const taskform = document.getElementById('task-form');
const taskContainer = document.getElementById('tasks-container');
let editStatus = false;
let id = "";
let html = ``;

window.addEventListener('DOMContentLoaded', async () => {
  
  ongetTask(querysnapshot => {

    taskContainer.innerHTML = "";

  querysnapshot.forEach(doc => {
    const task = doc.data();
    taskContainer.innerHTML +=`
    <div>
    <h3>${task.title}</h3>
    <p>${task.description}</p>
    <button class="btn-delete" data-id="${doc.id}">Delete</button>
    <button class="btn-edit" data-id="${doc.id}">Edit</button>
    </div>`
     } );

    const btnTaskdelete = taskContainer.querySelectorAll('.btn-delete');
        btnTaskdelete.forEach( btn => {
          btn.addEventListener("click", ({ target: { dataset } })=>{
            deleteTask(dataset.id); // mandando id para eliminar
          })
       });

    const btnTaskedit = taskContainer.querySelectorAll('.btn-edit');
    btnTaskedit.forEach((btn) => {
      btn.addEventListener("click",async (e) => {
        const doc = await getTask(e.target.dataset.id);
        const task = doc.data();
        taskform['task-title'].value = task.title;
        taskform['task-description'].value = task.description;

        editStatus = true;
        id = doc.id;
        taskform['btn-task-save'].innerText = 'update';
      });
    })    
  });
});



taskform.addEventListener('submit',(e)=>{
  e.preventDefault()
  const title = taskform['task-title'];
  const description = taskform['task-description'];
  if(!editStatus){
    Tasksave(title.value,description.value); //creacion de un nuevo objeto en la database
  }else{
    updateTask(id,{title: title.value,description: description.value})
    editStatus = false;
    id = "";
    taskform['btn-task-save'].innerText = 'save';
  }

  taskform.reset();
})