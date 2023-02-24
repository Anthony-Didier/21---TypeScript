function addTodo(title, description) {
    // L'utility type Partial rend les propriétés "title" et "description" facultatives
    var myTodo = {};
    myTodo.title = title;
    myTodo.description = description;
    // As (1ère méthode)
    return myTodo;
    // Angle-Bracket (2ème méthode)
    // return <Todo>myTodo;
}
var todo = addTodo("Sport", "Faire un footing");
console.log(todo);
