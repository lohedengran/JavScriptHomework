// 1. Create a “groceries list” array. Each element of the array is an object that
// contains the name of a product, an amount needed and a property saying whether it
// is bought or not. Write a few functions for working with this array:
// 1) Function for displaying the entire list;
// 2) Function for adding a purchase to the list. Note that if a product already
// exists in the array, the amount needs to be increased in the existing purchase,
// not in a new one;
// 3) Function for purchasing a product. The function accepts the name of a
// product and marks it as bought.

// 1.1
let groceriesList = [
  {
    name: "bananas",
    amount: 5,
    isBought: false,
  },
  {
    name: "milk",
    amount: 2,
    isBought: false,
  },
  {
    name: "coffee",
    amount: 3,
    isBought: false,
  },
  {
    name: "eggs",
    amount: 10,
    isBought: false,
  },
];

groceriesList.forEach(function (groceriesList) {
  console.log(`${groceriesList.name} ${groceriesList.amount}`);
});

// 1.2
function addItemToGroceriesList(item, quantity, status) {
  groceriesList.push({
    name: item,
    amount: quantity,
    isBought: status,
  });
}
addItemToGroceriesList("potatoes", 20, false);
// check if item exists
// find the index of the item
// update the item by adding to the existing amount

groceriesList.includes(groceriesList.name);

console.log(groceriesList);

// function addNewItem(name, amount, isBought) {
//   this.name = name;
//   this.amount = amount;
//   this.isBought = isBought;
//   this.displayFullList = function () {
//     console.log(`${this.name} ${this.amount}`);
//   };
// }

// let pineapple = new addNewItem("pineapple", "2", true);
// let potatoes = new addNewItem("potatoes", "20", true);
// pineapple.displayFullList();
// potatoes.displayFullList();

// // for (let i = 0; i < 1; i++) {
// //     groceriesList.push(new NewGroceries(''))
// // }

// let newList = [];
// for (let i = 0; i > groceriesList.amount; i++) {
//   newList.push("bananas", 5, true);
// }
// console.log(newList);

// 1.3

// // 2. Create an array of classrooms. A classroom object consists of a name, a number of
// seats (10 to 20) and the faculty it is meant for. Write a few functions for working with it:
// 1) Display all the classrooms;
// 2) Display all the classrooms for a given faculty;
// 3) Display only the classrooms that would fit a given group. A group object contains a name,
// the number of students, and the faculty name.

// let classroom = [
//   {
//     name: "2B",
//     seats: 10,
//     faculty: "Social",
//   },
//   {
//     name: "5B",
//     seats: 12,
//     faculty: "Social",
//   },
//   {
//     name: "2A",
//     seats: 15,
//     faculty: "Science",
//   },
//   {
//     name: "5A",
//     seats: 18,
//     faculty: "Science",
//   },
// ];

// // 1.1

// classroom.forEach(function (classroom) {
//   console.log(`${classroom.name} 'has'${classroom.seats} ${classroom.faculty}`);
// });
