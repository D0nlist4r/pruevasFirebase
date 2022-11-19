window.addEventListener('DOMContentLoaded',()=>{

});
const taskform = document.getElementById('task-form');
import {Tasksave} from './firebase.js'

taskform.addEventListener('submit',(e)=>{
  e.preventDefault()
  const title = taskform['task-title'];
  const description = taskform['task-description'];

  Tasksave(title.value,description.value);
})