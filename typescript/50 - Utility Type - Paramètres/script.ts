/*
Le Generic Utility Type "Parameters" permet de construire un nouveau type sous forme
de TUPLE à partir des types utilisés dans les paramètres function Type.
*/
function fetchUser(id: number, username: string) {
  console.log(`Fetch user id ${id} | username ${username}`);
}

fetchUser(2, "Mario");

type FetchUserParams = Parameters<typeof fetchUser>; // [id: number, username: string]

function fetchLoggedUser(...params: FetchUserParams) {
  fetchUser(...params);
}

fetchLoggedUser(3, "Mario"); // OK
