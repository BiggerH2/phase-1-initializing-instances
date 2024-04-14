// Define the Breakfast class
class Breakfast {
  constructor(food, drink) {
    this.food = food;
    this.drink = drink;
  }
}

// Define the Lunch class
class Lunch {
  constructor(salad, soup, drink) {
    this.salad = salad;
    this.soup = soup;
    this.drink = drink;
  }
}

// Define the Dinner class
class Dinner {
  constructor(salad, soup, entree, dessert) {
    this.salad = salad;
    this.soup = soup;
    this.entree = entree;
    // Declare dessert as a private property
    this.#dessert = dessert;
  }
}

// Export the classes
module.exports = {
  Breakfast,
  Lunch,
  Dinner
};
