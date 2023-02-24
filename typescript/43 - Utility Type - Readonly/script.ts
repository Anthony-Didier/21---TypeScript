interface Todo {
  title: string;
  description: string;
}

const myTodo: Readonly<Todo> = {
  title: "Sport",
  description: "Faire un footing"
};
console.log(myTodo.title); // Sport
// myTodo.title = "Coding" // Error // myTodo est de type Readonly<Todo> (= lecture seule)

let colors = ["Blue", "Green", "Yellow"];
colors.push("Orange");
console.log(colors);

let colors2: Readonly<string[]> = ["Blue", "Green", "Yellow"];
// colors2.push("Orange"); // Error // colors2 est de type Readonly<string[]>
