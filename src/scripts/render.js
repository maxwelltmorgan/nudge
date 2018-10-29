import { todo, todos, project, projects, activeProject, updateActiveProject, createProject, deleteProject, createTodo, deleteTodo } from './crud';

const projectsList = document.getElementById('projects-list');
const projectButton = document.getElementById('projectButton');
const todosList = document.getElementById('todos-list');
const currentProject = document.getElementById('current-project');
const defaultProject = document.createElement('li');

//set default project
createProject('All Todos');
defaultProject.textContent = 'All Todos';
defaultProject.id = 'All Todos';
currentProject.innerHTML = defaultProject.id;
defaultProject.classList.add("project-item");
defaultProject.addEventListener('click', function() {
    currentProject.innerHTML = defaultProject.id;
    updateActiveProject(defaultProject.id);
    listTodos();
});
projectsList.appendChild(defaultProject);

//add project button
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
        currentProject.textContent = projectItem.id;
        updateActiveProject(projectItem.id);
        listTodos();
    });
    removeButton.addEventListener('click', function() {
        const projectIndex = projects.findIndex(project => project.name === projectItem.id);
        deleteProject(projectIndex);
        projectsList.removeChild(projectItem);
        updateActiveProject(projectItem.id);
        projectItem.id = 'All Todos';
    });
    projectsList.appendChild(projectItem);
});

//add todo button
const todoButton = document.getElementById('todoButton');
todoButton.addEventListener('click', function() {
    const newTodoTitle = prompt("Enter todo");
    const newTodoDescription = prompt("Enter description");
    const newTodoDueDate = prompt("Enter Due Date");
    const newTodoPriority = prompt("Enter Priority");
    createTodo(newTodoTitle, newTodoDescription, newTodoDueDate, newTodoPriority);
    listTodos();
});

const listTodos = () => {

    while(todosList.firstChild) todosList.removeChild(todosList.firstChild);

    todos.forEach(function(todo){
        if(activeProject == 'All Todos'){
            const todosItem = document.createElement('li');
            todosItem.classList.add('todos-item');
            const todosTitle = document.createElement('h3');
            todosTitle.textContent = todo.title;
            const todosParagraph = document.createElement('p');
            todosParagraph.textContent = todo.description;
            todosItem.appendChild(todosTitle);
            todosItem.appendChild(todosParagraph);
            todosItem.id = todo.title;

            let removeButton = document.createElement("a");
            removeButton.classList.add("remove");
            removeButton.innerHTML = '<i class="material-icons todo-remove-button">delete_outline</i>';

            todosTitle.append(removeButton);

            removeButton.addEventListener('click', function() {
                const todoIndex = todos.findIndex(todo => todo.name === todosItem.id);
                deleteTodo(todoIndex);
                todosList.removeChild(todosItem);
            });
            todosList.appendChild(todosItem);
        }
        else if(todo.todoProj == activeProject){
            const todosItem = document.createElement('li');
            todosItem.classList.add('todos-item');
            const todosTitle = document.createElement('h3');
            todosTitle.textContent = todo.title;
            const todosParagraph = document.createElement('p');
            todosParagraph.textContent = todo.description;
            todosItem.appendChild(todosTitle);
            todosItem.appendChild(todosParagraph);
            todosItem.id = todo.title;

            let removeButton = document.createElement("a");
            removeButton.classList.add("remove");
            removeButton.innerHTML = '<i class="material-icons todo-remove-button">delete_outline</i>';

            todosTitle.append(removeButton);

            removeButton.addEventListener('click', function() {
                const todoIndex = todos.findIndex(todo => todo.name === todosItem.id);
                deleteTodo(todoIndex);
                todosList.removeChild(todosItem);
            });
            todosList.appendChild(todosItem);
        };
    });
};
listTodos();

export { renderTodos, renderProjects };
