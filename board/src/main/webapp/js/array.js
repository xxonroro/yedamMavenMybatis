document.querySelector("#show").innerHTML = "";

const fruits = ["사과"];

fruits.push("수박");
fruits.push("복숭아");

console.log(fruits);

fruits.pop();
fruits.unshift("포도");
fruits.shift();

fruits.splice(1, 0, "참외");
fruits.splice(1, 1);

console.log(fruits);

const member = [{ name: "홍길동", age: 20 }];
member.push({ name: "김길동", age: 21 });
member.push({ name: "박길동", age: 22 });

member.forEach((element) => {
  console.log(element);
});

let result = members.filter((element) => {
  element.age > 20;
});

result = members.map((element) => {
  let obj = {};
  obj.fullName = element.name;
  obj.age = element.age;
  obj.point = 100;

  return obj;
});
console.clear();

result = [10, 20, 30, 40, 23, 19].reduce((acc, element, index, array) => {
  console.log(acc, element, index, array);

  if (index == array.length - 1) {
    return (acc + element) / array.length;
  } else {
    return acc + element;
  }
}, 0);

console.log(result);

let ul = document.createElement("ul");
document.querySelector("#show").appendChild(ul);

member.reduce((accumulator, element) => {
  let li = document.createElement("li");
  li.innerHTML = "이름: " + element.name + ", 나이: " + element.age;
  accumulator.appendChild(li);
  return accumulator;
}, ul);
console.clear();
