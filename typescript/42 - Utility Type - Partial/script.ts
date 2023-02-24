interface Todo {
  title: string;
  description: string;
}

function addTodo(title: string, description: string): Todo {
  // L'utility type Partial rend les propriétés "title" et "description" facultatives
  let myTodo: Partial<Todo> = {};
  myTodo.title = title;
  myTodo.description = description;

  // As (1ère méthode)
  return myTodo as Todo;

  // Angle-Bracket (2ème méthode)
  // return <Todo>myTodo;
}

const todo = addTodo("Sport", "Faire un footing");
console.log(todo);
