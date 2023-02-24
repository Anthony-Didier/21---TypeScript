/*
Le Generic Utility Type "ReturnType" permet de construire un nouveau type en fonction
du type retourné par une fonction.
*/
function fetchUser(id: number, username: string) {
  return {
    id,
    username
  };
}

type FetchUserParams = Parameters<typeof fetchUser>; // [id: number, username: string]

type fetchUserReturn = ReturnType<typeof fetchUser>;

function fetchLoggedUser(...params: FetchUserParams) {
  const memberData = fetchUser(...params);
  console.log(memberData);

  let user: fetchUserReturn = memberData;
}

fetchLoggedUser(3, "Mario"); // OK
