/*
Le Generic Utility Type "ReturnType" permet de construire un nouveau type en fonction
du type retourné par une fonction.
*/
function fetchUser(id, username) {
    return {
        id: id,
        username: username
    };
}
function fetchLoggedUser() {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
    var memberData = fetchUser.apply(void 0, params);
    console.log(memberData);
    var user = memberData;
}
fetchLoggedUser(3, "Mario"); // OK
