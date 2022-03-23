const menu = {
    course: {
        appetizers: [],
        mains: [],
        desserts: [],
    },
    // This methods adds the dish object to courses with name and price of dish
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice
        };
        this.course[courseName].push(dish);
    },
    // Generate random dish from course with courseName as parameter
    getRandomDishFromCourse(courseName) {
        const dishes = this.course[courseName]
        const randomIndex = Math.floor(Math.random() * dishes.length)
        return dishes[randomIndex]
    },
    // Generates random meal based on course type and returns total price with meals selected
    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers')
        const main = this.getRandomDishFromCourse('mains')
        const dessert = this.getRandomDishFromCourse('desserts')
        const totalPrice = appetizer.price + main.price + dessert.price;

        return `The total bill for the three course meal of ${appetizer.name}, ${main.name} and ${dessert.name} comes upto $${totalPrice}`;
    },
};



//Creating a menu object by adding some dishes
menu.addDishToCourse('appetizers', 'Tomato Soup', 7.50);
menu.addDishToCourse('appetizers', 'Manchow Soup', 8.00);
menu.addDishToCourse('appetizers', 'Chips', 6.50);
menu.addDishToCourse('mains', 'Baigan Bartha', 16.50);
menu.addDishToCourse('mains', 'Daal Fry', 15.50);
menu.addDishToCourse('mains', 'Palak Paneer', 18.00);
menu.addDishToCourse('desserts', 'Gulab Jamun', 6.00);
menu.addDishToCourse('desserts', 'Jelebi', 8.25);
menu.addDishToCourse('desserts', 'Burfi', 5.00);

//Now generate random meal
const meal = menu.generateRandomMeal();
//Print out the meal
console.log(meal);