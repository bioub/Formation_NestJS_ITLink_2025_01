function hello(name) {
  return `Hello ${name.toUpperCase()}`;
}

const prenoms = ["Romain", "Jean", "Eric"];

for (const prenom of prenoms) {
  console.log(hello(prenom));
}
