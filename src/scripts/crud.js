const projects = [];
let activeProject = 'All Todos';

//define project
const project = (name) => {
    return { name };
};

//create project
const createProject = (name) => {
    const newProject = project(name);
    projects.push(newProject);
    activeProject = name;
};

//delete project
const deleteProject = (i) => {
    projects.splice(i, 1);
    activeProject = 'All Todos';
};

//update project
const updateProjectName = (i, newProjectName) => {
    projects[i].name = newProjectName;
};

const todos = [];

//define todo
const todo = (title, description, dueDate, priority) => {
    let todoProj = activeProject;
    return { title, description, dueDate, priority, todoProj };
};

//createTodo
const createTodo = (title, description, dueDate, priority) => {
    const newTodo = todo(title, description, dueDate, priority);
    todos.push(newTodo);
};

//deleteTodo
const deleteTodo = (i) => {
    todos.splice(i, 1);
};

const updateActiveProject = (input) => {
    activeProject = input;
};

createTodo('Pay Bills','send check to water company','c','d');
createTodo('Exercise','30 min jog @ park','c','d');
createTodo('Groceries','pick up bread and milk','c','d');
createTodo('Lunch Meeting','discuss future of ABC123 Inc','c','d');
createTodo('Car Appointment','take vehicle in for maintenance','c','d');

export { todo, todos, project, projects, activeProject, updateActiveProject, createProject, deleteProject, createTodo, deleteTodo }
