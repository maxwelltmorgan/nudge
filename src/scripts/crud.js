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

//updateTodo
const updateTodo = (index, todoProp, todoVal) => {
    todos[index][todoProp] = todoVal;
};

const updateActiveProject = (input) => {
    activeProject = input;
};

createTodo('Silly','fill','c','d');
createTodo('Rabbit','your little','c','d');
createTodo('Tricks','children full of','c','d');
createTodo('Are For','healthy loads of','c','d');
createTodo('Kids','sugar','c','d');

export { todo, todos, project, projects, activeProject, updateActiveProject, createProject, deleteProject, createTodo, deleteTodo }
