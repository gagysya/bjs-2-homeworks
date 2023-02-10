// Task 1

function compareArrays(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false
  }
  return arr1.every((item, index) => {
    if (arr2[index]) {
      return arr2[index] == item;
    } else {
      return false;
    }
  })
}
console.log (compareArrays([9, 2, 4, 8, 2], [9, 2, 4]))
console.log (compareArrays([8, 1, 2], [8, 1, 2]))
console.log ( )

// Task 2

function getUsersNamesInAgeRange(users, gender) {
  if (users.length === 0 || (gender != "�������" && gender != "�������")) {
    return 0
  }
  
  let result = users.filter(user => user.gender === gender).map(user => user = user.age); 
  let sum = result.reduce((a,b) => a+b);
  return sum / result.length  
}
const people = [
  {firstName: "���������", secondName: "������", age: 17, gender: "�������"},
  {firstName: "����", secondName: "�������", age: 21, gender: "�������"},
  {firstName: "�������", secondName: "�������", age: 40, gender: "�������"},
  {firstName: "�������", secondName: "���������", age: 37, gender: "�������"},
  {firstName: "�����", secondName: "�����������", age: 18, gender: "�������"},
  {firstName: "�������", secondName: "������", age: 17, gender: "�������"},
  {firstName: "Ը���", secondName: "��������", age: 50, gender: "�������"},
  {firstName: "�������", secondName: "������", age: 35, gender: "�������"},
  {firstName: "������", secondName: "�������", age: 49, gender: "�������"},
  {firstName: "�����", secondName: "���������", age: 25, gender: "�������"},
  {firstName: "������", secondName: "�����", age: 22, gender: "�������"},
  {firstName: "���������", secondName: "�������", age: 40, gender: "�������"},
  {firstName: "����", secondName: "�������", age: 35, gender: "�������"},
  {firstName: "�������", secondName: "�������", age: 19, gender: "�������"},
]
console.log(getUsersNamesInAgeRange(people, "�������"));
console.log(getUsersNamesInAgeRange(people, "�������"));
console.log(getUsersNamesInAgeRange([], "�������"));
console.log(getUsersNamesInAgeRange(people, "�������������"));