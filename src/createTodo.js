const toDoFactory = (title, description, dueDate, priority) => {
    return { title, description, dueDate, priority };
};

const addToDo = (title, description, dueDate, priority) => {

  const todo = toDoFactory(title, description, dueDate, priority);

  const todosItem = document.createElement('li');
  todosItem.classList.add('todo-item');
  todosItem.innerHTML = todo.description;
  return todosItem;
}

export { toDoFactory, addToDo }
