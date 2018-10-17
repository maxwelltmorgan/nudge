import { todos, project, projects, currentProject, setCurrentProject, createProject } from './crud';

const projectsList = document.getElementById('projects-list');

const projectItem = document.createElement('li');
projectItem.innerHTML = projects[0].name;
projectItem.classList.add("project-item");
projectsList.appendChild(projectItem);

const projectItemb = document.createElement('li');
projectItemb.innerHTML = projects[1].name;
projectItemb.classList.add("project-item");
projectsList.appendChild(projectItemb);

const projectItemc = document.createElement('li');
projectItemc.innerHTML = projects[2].name;
projectItemc.classList.add("project-item");
projectsList.appendChild(projectItemc);

const todosList = document.getElementById('todos-list');

const todosItem = document.createElement('li');
todosItem.innerHTML = todos[0].title;
todosItem.classList.add("todo-item");
todosList.appendChild(todosItem);

const todosItemb = document.createElement('li');
todosItemb.innerHTML = todos[1].description;
todosItemb.classList.add("todo-item");
todosList.appendChild(todosItemb);

const todosItemc = document.createElement('li');
todosItemc.innerHTML = todos[2].dueDate;
todosItemc.classList.add("todo-item");
todosList.appendChild(todosItemc);

export { renderTodos, renderProjects };
