import { todos, project, projects, currentProject, setCurrentProject, createProject } from './crud';

const projectsList = document.getElementById('projects-list');

const projectItem = document.createElement('li');
projectItem.innerHTML = projects[0].name;
projectItem.classList.add("project-item");

let removeButton = document.createElement("a")
removeButton.classList.add("remove")
removeButton.innerHTML = '<i class="material-icons">delete_outline</i>'
projectItem.append(removeButton)

projectsList.appendChild(projectItem);

const projectItemb = document.createElement('li');
projectItemb.innerHTML = projects[1].name;
projectItemb.classList.add("project-item");

let removeButtonb = document.createElement("a")
removeButtonb.classList.add("remove")
removeButtonb.innerHTML = '<i class="material-icons">delete_outline</i>'
projectItemb.append(removeButtonb)

projectsList.appendChild(projectItemb);

const projectItemc = document.createElement('li');
projectItemc.innerHTML = projects[2].name;
projectItemc.classList.add("project-item");

let removeButtonc = document.createElement("a")
removeButtonc.classList.add("remove")
removeButtonc.innerHTML = '<i class="material-icons">delete_outline</i>'
projectItemc.append(removeButtonc)

projectsList.appendChild(projectItemc);

const todosList = document.getElementById('todos-list');

const todosItem = document.createElement('li');
todosItem.innerHTML = todos[0].title;
todosItem.classList.add("todo-item");

let removeButtond = document.createElement("a")
removeButtond.classList.add("remove")
removeButtond.innerHTML = '<i class="material-icons">delete_outline</i>'
todosItem.append(removeButtond)

todosList.appendChild(todosItem);


const todosItemb = document.createElement('li');
todosItemb.innerHTML = todos[1].description;
todosItemb.classList.add("todo-item");

let removeButtone = document.createElement("a")
removeButtone.classList.add("remove")
removeButtone.innerHTML = '<i class="material-icons">delete_outline</i>';
todosItemb.append(removeButtone)

todosList.appendChild(todosItemb);

const todosItemc = document.createElement('li');
todosItemc.innerHTML = todos[2].dueDate;
todosItemc.classList.add("todo-item");

let removeButtonf = document.createElement("a")
removeButtonf.classList.add("remove")
removeButtonf.innerHTML = '<i class="material-icons">delete_outline</i>'
todosItemc.append(removeButtonf)

todosList.appendChild(todosItemc);

const renderCurrentProject = document.getElementById('current-project');
renderCurrentProject.innerHTML = currentProject;

export { renderTodos, renderProjects };
