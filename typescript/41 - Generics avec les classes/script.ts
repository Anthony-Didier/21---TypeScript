// Mission : Enregistrer type string
class Database<T extends string | number> {
  data: Array<T> = [];

  saveData(val: T) {
    this.data.push(val);
  }

  getAllDatas() {
    return [...this.data];
  }
}

const stringData = new Database<string>(); // (Database)
stringData.saveData("Marge");
stringData.saveData("Homer");
const result = stringData.getAllDatas();
console.log(result);

const numberOrStringData = new Database<number | string>();
numberOrStringData.saveData("hello");
console.log(numberOrStringData.getAllDatas());

// La class Database<T extends string | number> n'accepte que les valeur en string et number
// Les objects ne sont donc pas acceptés
// const objData = new Database<object>();
// objData.saveData({ userName: "Mario", age: 28 }); // OK
// console.log(objData.getAllDatas());
