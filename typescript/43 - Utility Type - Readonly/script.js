var myTodo = {
    title: "Sport",
    description: "Faire un footing"
};
console.log(myTodo.title); // Sport
// myTodo.title = "Coding" // Error // myTodo est de type Readonly<Todo> (= lecture seule)
var colors = ["Blue", "Green", "Yellow"];
colors.push("Orange");
console.log(colors);
var colors2 = ["Blue", "Green", "Yellow"];
// colors2.push("Orange"); // Error // colors2 est de type Readonly<string[]>
