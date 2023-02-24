/*
Le Generic Utility Type "Pick" permet de construire un nouveau Type en sélectionnant les
propriétés Keys (clés) dans le Type utilisé (Interface).
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

type TodoPreview = Pick<Todo, "title" | "completed">;

// En utilisant le type TodoPreview, on ne doit pas renseigner la propriété "description"
let todo2: TodoPreview = {
  title: "Faire les courses",
  completed: false
};
