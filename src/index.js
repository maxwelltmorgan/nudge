// import your function
import { toDoFactory, addToDo } from './createTodo';

const todosList = document.getElementById('todos-list');

todosList.appendChild(addToDo('Shopping', 'Buy Stuff', 'Tomorrow', 'High'));
todosList.appendChild(addToDo('Lift', 'Get Big', 'Tomorrow', 'High'));
todosList.appendChild(addToDo('Eat', 'Maintain Energy', 'Tomorrow', 'High'));
todosList.appendChild(addToDo('Read', 'Stay smart', 'Tomorrow', 'High'));
todosList.appendChild(addToDo('Sleep', 'Recharge', 'Tomorrow', 'High'));
