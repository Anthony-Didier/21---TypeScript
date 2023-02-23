function gift(age: number, sum: (arg: number) => void) {
  const memberAge = age + 3;
  sum(memberAge); // number
}

gift(30, (num) => {
  console.log(typeof num);
  console.log(num); // de type void
}); // 33

function gift2(age: number, sum: (arg: string) => void) {
  const memberAge = age + 3;
  sum(memberAge.toString()); // string
}

gift2(30, (num) => {
  console.log(typeof num);
  console.log(num); // de type void
}); // 33
