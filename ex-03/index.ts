let person1 = "Moona";
console.log("hello!!", person.toLowerCase(), "welcome to javascript");
console.log("hello!!", person.toUpperCase(), "welcome to javascript");
function titleCase(person) {
  return person
    .toLowerCase()
    .split(" ")
    .map((title) => {
      return title.replace(title[0], title[0].toUpperCase());
    })
    .join(" ");
}
console.log("hello", titleCase(person), "welcome to javascript");
