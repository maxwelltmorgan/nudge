import { todos, project, projects, currentProject, setCurrentProject, createProject, deleteProject, createTodo, deleteTodo } from './crud';

const projectsList = document.getElementById('projects-list');

const projectItem = document.createElement('li');
projectItem.textContent = projects[0].name;
projectItem.id = projects[0].name;
projectItem.classList.add("project-item");
projectItem.setAttribute('data-item', projects[0].index);

let removeButton = document.createElement("a")
removeButton.classList.add("remove")
removeButton.innerHTML = '<i class="material-icons">delete_outline</i>'

projectItem.append(removeButton);

removeButton.addEventListener('click', function() {
    const projectIndex = projects.findIndex(project => project.name === projectItem.id);
    deleteProject(projectIndex);
    projectsList.removeChild(projectItem);
});

projectsList.appendChild(projectItem);

const projectItemb = document.createElement('li');
projectItemb.textContent = projects[1].name;
projectItemb.classList.add("project-item");
projectItemb.setAttribute('data-item', projects[1].name);

let removeButtonb = document.createElement("a")
removeButtonb.classList.add("remove")
removeButtonb.innerHTML = '<i class="material-icons">delete_outline</i>'

removeButtonb.addEventListener('click', function() {
    alert(projectItemb.getAttribute('data-item'));
});

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

const projectButton = document.getElementById('projectButton');
projectButton.addEventListener('click', function() {
    const newProjectName = prompt("Enter project name");
    createProject(newProjectName);

    const projectItemz = document.createElement('li');
    projectItemz.textContent = projects[3].name;
    projectItemz.id = projects[3].name;
    projectItemz.classList.add("project-item");
    projectItemz.setAttribute('data-item', projects[3].index);

    let removeButton = document.createElement("a")
    removeButton.classList.add("remove")
    removeButton.innerHTML = '<i class="material-icons">delete_outline</i>'

    projectItemz.append(removeButton);

    removeButton.addEventListener('click', function() {
        const projectIndex = projects.findIndex(project => project.name === projectItemz.id);
        deleteProject(projectIndex);
        projectsList.removeChild(projectItemz);
    });

    projectsList.appendChild(projectItemz);

});

const todosList = document.getElementById('todos-list');

const todosItem = document.createElement('li');
todosItem.innerHTML = todos[0].title;
todosItem.id = todos[0].title;
todosItem.classList.add("todo-item");

let removeButtond = document.createElement("a")
removeButtond.classList.add("remove")
removeButtond.innerHTML = '<i class="material-icons">delete_outline</i>'
todosItem.append(removeButtond);

removeButtond.addEventListener('click', function() {
    const todoIndex = todos.findIndex(todos => todos.title === todosItem.id);
    deleteProject(todoIndex);
    todosList.removeChild(todosItem);
});

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

const todoButton = document.getElementById('todoButton');
todoButton.addEventListener('click', function() {
    const newTodoName = prompt("Enter todo");
    createTodo(newTodoName, 'blah','blah','blah');

    const todosItemd = document.createElement('li');
    todosItemd.textContent = todos[3].title;
    todosItemd.id = todos[3].title;
    todosItemd.classList.add("todo-item");
    todosItemd.setAttribute('data-item', todos[3].index);

    let removeButton = document.createElement("a")
    removeButton.classList.add("remove")
    removeButton.innerHTML = '<i class="material-icons">delete_outline</i>'

    todosItemd.append(removeButton);

    removeButton.addEventListener('click', function() {
        const todoIndex = todos.findIndex(todo => todo.name === todosItemd.id);
        deleteTodo(todoIndex);
        todosList.removeChild(todosItemd);
    });

    todosList.appendChild(todosItemd);

});

const renderCurrentProject = document.getElementById('current-project');
renderCurrentProject.innerHTML = currentProject;

export { renderTodos, renderProjects };
