import { todos, project, projects, currentProject, setCurrentProject, createProject } from './crud';

const projectsList = document.getElementById('projects-list');
const projectItem = document.createElement('li');
projectItem.innerHTML = projects[0].name;
projectItem.classList.add("project-item");
projectsList.appendChild(projectItem);

const todosList = document.getElementById('todos-list');
const todosItem = document.createElement('li');
todosItem.innerHTML = todos[0].description;
todosItem.classList.add("todo-item");
todosList.appendChild(todosItem);

export { renderTodos, renderProjects };
