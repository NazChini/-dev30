JS Topics practised / Learnt:

 - ES6 Array Helper Methods: 
     -  For all of these methods, it is possible to achieve the same end result without using these helper methods, but using them makes your code more readable and standardized for others to understand your code. In other words, these methods are all "syntactic sugar" meaning something that is just shorthand for a common programming task.
     - "Why are there so many methods around arrays?" As you have seen from most of the "programs" you've written, arrays often form the core of most data models. Since there were common things that most developers had to do over and over again, like good lazy programmers, they made helper methods.
 - Callback Functions
     - Callback Functions are functions that are invoked by other functions. They get "called back". Usually we do this because we care about the order of operations. In other words, we want to do something first, then call the function to do something next.
- arr.forEach(func(currentArrItem, i, arr) => //return something)
     - When to use: When you want to perform an operation on every element in an array.
     - forEach is a function that takes an anonymous callback function as an argument and invokes this function for each item in the array. The first parameter in that anonymous callback function with be the current item in the array. As demonstrated below, the callback also takes 2 additional, optional parameters - the 'index' and 'array'
 - const newArr = arr.map(function (currentValue, index, array) {
                         // iterator
                         });
     - When to use: When you want to create a new array that is based on the elements of another array and of equivalent size.
     - Much like forEach, map is a function that takes an "iterator function" as an argument. This is an anonymous function that will be invoked for each item in the array.
     - We use return to tell map which items we want returned into our newly minted newArr array.
- arr.find()
     - When to use: When you want to find a particular element in an array by interrogating every element in the array.
     - find works by taking in a function that returns a truthy/falsey value and returns back the first value in the array that returns true.
- every and some
     - When to use: When you want a yes/no answer to whether some or all of the elements in an array satisfy a condition.    - - Unlike our previous helper functions where we're returning a value or a list of values, with every and some, we'll be checking large data collections and determining some overall information about that data.
- const filteredArr = arr.filter()
     - When to use filter: When you want to create a new array that is a subset of the original array and can be created by interrogating each element in the array.
     - filter is exactly what it sounds like and is used to create a new array based on some qualifications. This helper function is commonly used on the front end for sorting lists. 
     - Like our other array helper methods, filter also takes an "iterator function" as an argument - an anonymous function that will be invoked for each item in the array. However this function must return a truthy or falsey value. Only the truthy values will be added to the array.
- const reducedValue = arr.reduce(function (accumulator,     currentValue, index) {// iterator });
     - When to use reduce: When you want a single value that is an accumulation of information in an array.
     - The definition for reduce given to us by MDN is, "The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value." The most common way we've seen something like this is to sum an array of integers. 
     - As you can see, reduce is a function that actually takes two arguments - the first is our iterator function (as usual), which itself keeps track of the sum and the current value that's being iterated over. But then the reduce function also takes a second argument, which is the initial value.



