var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Mission : Enregistrer type string
var Database = /** @class */ (function () {
    function Database() {
        this.data = [];
    }
    Database.prototype.saveData = function (val) {
        this.data.push(val);
    };
    Database.prototype.getAllDatas = function () {
        return __spreadArray([], this.data, true);
    };
    return Database;
}());
var stringData = new Database(); // (Database)
stringData.saveData("Marge");
stringData.saveData("Homer");
var result = stringData.getAllDatas();
console.log(result);
var numberOrStringData = new Database();
numberOrStringData.saveData("hello");
console.log(numberOrStringData.getAllDatas());
// La class Database<T extends string | number> n'accepte que les valeur en string et number
// Les objects ne sont donc pas acceptés
// const objData = new Database<object>();
// objData.saveData({ userName: "Mario", age: 28 }); // OK
// console.log(objData.getAllDatas());
