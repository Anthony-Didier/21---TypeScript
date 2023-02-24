interface User<T> {
  id: number;
  data: T;
}

const userData: User<string[]> = {
  id: 24,
  data: ["Mario", "Moderator"]
};

const userData2: User<object> = {
  id: 24,
  data: { name: "Mario", role: "Moderator" }
};

// Autre méthode pour userData2
const userData3: User<{ name: string; role: string }> = {
  id: 24,
  data: { name: "Mario", role: "Moderator" }
};

console.log(userData);
console.log(userData2);
console.log(userData3);
