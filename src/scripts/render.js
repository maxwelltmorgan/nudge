import { todos, project, projects, currentProject, setCurrentProject, createProject, deleteProject, createTodo, deleteTodo } from './crud';

const projectsList = document.getElementById('projects-list');

const projectButton = document.getElementById('projectButton');
projectButton.addEventListener('click', function() {
    const newProjectName = prompt("Enter project name");
    createProject(newProjectName);

    const projectItem = document.createElement('li');
    projectItem.textContent = newProjectName;
    projectItem.id = newProjectName;
    projectItem.classList.add("project-item");

    let removeButton = document.createElement("a")
    removeButton.classList.add("remove")
    removeButton.innerHTML = '<i class="material-icons">delete_outline</i>'

    projectItem.append(removeButton);

    projectItem.addEventListener('click', function() {
        renderCurrentProject.innerHTML = projectItem.id;
    });

    removeButton.addEventListener('click', function() {
        const projectIndex = projects.findIndex(project => project.name === projectItem.id);
        deleteProject(projectIndex);
        projectsList.removeChild(projectItem);
    });

    projectsList.appendChild(projectItem);

});

const todosList = document.getElementById('todos-list');

const todoButton = document.getElementById('todoButton');
todoButton.addEventListener('click', function() {
    const newTodoTitle = prompt("Enter todo");
    const newTodoDescription = prompt("Enter description");
    const newTodoDueDate = prompt("Enter Due Date");
    const newTodoPriority = prompt("Enter Priority");
    createTodo(newTodoTitle, newTodoDescription, newTodoDueDate, newTodoPriority);

    const todosItem = document.createElement('li');
    todosItem.classList.add('todos-item');
    const todosTitle = document.createElement('h3');
    todosTitle.textContent = newTodoTitle;
    const todosParagraph = document.createElement('p');
    todosParagraph.textContent = newTodoDescription;
    todosItem.appendChild(todosTitle);
    todosItem.appendChild(todosParagraph);
    todosItem.id = newTodoTitle;

    let removeButton = document.createElement("a")
    removeButton.classList.add("remove")
    removeButton.innerHTML = '<i class="material-icons todo-remove-button">delete_outline</i>'

    todosTitle.append(removeButton);

    removeButton.addEventListener('click', function() {
        const todoIndex = todos.findIndex(todo => todo.name === todosItem.id);
        deleteTodo(todoIndex);
        todosList.removeChild(todosItem);
    });

    todosList.appendChild(todosItem);

});

const renderCurrentProject = document.getElementById('current-project');
renderCurrentProject.innerHTML = currentProject;

export { renderTodos, renderProjects };
