const projects = [];

//define project
const project = (name) => {
    const getName = () => name;
    return { getName };
};

//create project
const createProject = (name) => {
    const newProject = project(name);
    projects.push(newProject);
};

const todos = [];

//define todo
const todo = (title, description, dueDate, priority) => {
    const getTitle = () => title;
    const getDescription = () => description;
    const getDueDate = () => dueDate;
    const getPriority = () => priority;
    return { getTitle, getDescription, getDueDate, getPriority };
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
const updateTodo = () => {

};

export { todos, projects }
