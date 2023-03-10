/*
Le Generic Utility Type "Parameters" permet de construire un nouveau type sous forme
de TUPLE à partir des types utilisés dans les paramètres function Type.
*/
function fetchUser(id, username) {
    console.log("Fetch user id ".concat(id, " | username ").concat(username));
}
fetchUser(2, "Mario");
function fetchLoggedUser() {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
    fetchUser.apply(void 0, params);
}
fetchLoggedUser(3, "Mario"); // OK
