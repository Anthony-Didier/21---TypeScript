/*
Le Generic Utility Type "Omit" est le contraire de Pick. Il permet de construire un nouveau
Type en sélectionnant les propriétés Keys dans le Type utilisé (Interface) et en retirant
certaines autres clés.
*/
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

let todo1: Todo = {
  title: "Sport",
  description: "Footing",
  completed: true
};

type TodoPreview = Omit<Todo, "title" | "completed">;

// En utilisant le type TodoPreview, on ne doit pas renseigner les propriétés "title" et "completed"
let todo2: TodoPreview = {
  description: "Regarder une video sur le pastel sec"
};
