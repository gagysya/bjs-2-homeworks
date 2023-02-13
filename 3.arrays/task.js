// Task 1

function compareArrays(arr1, arr2) {
  return ((arr1.length === arr2.length) && arr1.every((element, index) => element === arr2[index]));
}
console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4]))
console.log(compareArrays([8, 1, 2], [8, 1, 2]))
console.log(compareArrays([8, 9], [6]))
console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]))
console.log(compareArrays([1, 2, 3], [2, 3, 1]))

// Task 2

function getUsersNamesInAgeRange(users, gender) {
    return users.filter(user => user.gender === gender).map(ages => ages.age).reduce((averageAge, item, index, array) => {return averageAge += item/array.length}, 0);
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