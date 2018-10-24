const projects = [];

let currentProject = 'All Todos';

//define project
const project = (name) => {
    return { name };
};

//create project
const createProject = (name) => {
    const newProject = project(name);
    projects.push(newProject);
};

//delete project
const deleteProject = (i) => {
    projects.splice(i, 1);
};

//update project
const updateProjectName = (i, newProjectName) => {
    projects[i].name = newProjectName;
};

const todos = [];

//define todo
const todo = (title, description, dueDate, priority) => {
    return { title, description, dueDate, priority };
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

createProject('All Todos');

export { todos, project, projects, currentProject, setCurrentProject, createProject, deleteProject, createTodo, deleteTodo }
