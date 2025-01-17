class Animal {
    static remainingAnimals = 0; // Static property to track animals with energy
    #name;
    #species;
    #energy;

    constructor(name, species, energy = 100) {
        this.#name = name;
        this.#species = species;
        this.#energy = energy;
        Animal.remainingAnimals++; // Increment count when a new instance is created
    }

    // Getters and setters
    get name() {
        return this.#name;
    }

    set name(newName) {
        this.#name = newName;
    }

    get species() {
        return this.#species;
    }

    set species(newSpecies) {
        this.#species = newSpecies;
    }

    get energy() {
        return this.#energy;
    }

    set energy(newValue) {
        if (this.#energy > 0 && newValue <= 0) {
            // Reduce remainingAnimals only if energy goes from >0 to <=0
            Animal.remainingAnimals--;
        }
        if (newValue > 0) {
            this.#energy = newValue;
        } else {
            this.#energy = 0;
        }
    }

    // General methods
    attack(target) {
        if (this.energy <= 0) {
            console.log(`${this.name} has no energy left to attack.`);
            return;
        }

        if (target.energy <= 0) {
            console.log(`${this.name} Wins, ${target.name} loses.`);
            return;
        }

        console.log(`${this.name} energy: ${this.energy}`);
        
    }

    eat() {
        this.energy += 10;
        console.log(`${this.#name} eats and gains energy. Current energy: ${this.#energy}`);
    }
}

// Subclass Bird
class Bird extends Animal {
    #canFly;

    constructor(name, species, canFly = true) {
        super(name, species, 100); // Default energy for birds is 100
        this.#canFly = canFly;
    }

    get canFly() {
        return this.#canFly;
    }

    set canFly(value) {
        this.#canFly = value;
    }

    attack(target) {
        console.log(`${this.name} swoops in to attack ${target.name}!`);
        super.attack(target); // Call base class attack method
        this.energy -= 10; // Additional energy deduction for Bird
        target.energy -= 10;
    }

    eat() {
        this.energy += 10;
        console.log(`${this.name} eats and gains energy. Current energy: ${this.energy}`);
    }
}

// Subclass Mammal
class Mammal extends Animal {
    #furColor;

    constructor(name, species, furColor) {
        super(name, species, 200); // Default energy for mammals is 200
        this.#furColor = furColor;
    }

    get furColor() {
        return this.#furColor;
    }

    set furColor(color) {
        this.#furColor = color;
    }

    attack(target) {
        console.log(`${this.name} lunges to attack ${target.name}!`);
        super.attack(target);
        this.energy -= 50; // Additional energy deduction for Mammal
        target.energy -= 50;
    }

    eat() {
        this.energy += 20;
        console.log(`${this.name} eats and gains energy. Current energy: ${this.energy}`);
    }
}

// Subclass Reptile
class Reptile extends Animal {
    #coldBlooded;

    constructor(name, species, coldBlooded = true) {
        super(name, species, 100); // Default energy for reptiles is 100
        this.#coldBlooded = coldBlooded;
    }

    get coldBlooded() {
        return this.#coldBlooded;
    }

    set coldBlooded(value) {
        this.#coldBlooded = value;
    }

    attack(target) {
        console.log(`${this.name} strikes to attack ${target.name}!`);
        super.attack(target);
        this.energy -= 30; // Additional energy deduction for Reptile
        target.energy -= 30;
    }

    eat() {
        this.energy += 15;
        console.log(`${this.name} eats and gains energy. Current energy: ${this.energy}`);
    }
}

// DRIVER CODE: Create instances of the subclasses and use their properties and methods. You can modify this to add more attacks and eating actions.

const eagle = new Bird("Eagle", "Bird of Prey", true);
console.log(`Name: ${eagle.name}, Species: ${eagle.species}, Can Fly: ${eagle.canFly}`);

const lion = new Mammal("Lion", "Big Cat", "Golden");
console.log(`Name: ${lion.name}, Species: ${lion.species}, Fur Color: ${lion.furColor}`);

const snake = new Reptile("Snake", "Serpent", true);
console.log(`Name: ${snake.name}, Species: ${snake.species}, Cold-Blooded: ${snake.coldBlooded}`);

// Example attack
console.log("\n--- Attacks ---");
eagle.attack(lion);
lion.attack(snake);
lion.attack(snake);
lion.attack(snake);


// Display the remaining number of animals with energy
console.log(`Remaining animals with energy: ${Animal.remainingAnimals}`);

// Example eating
console.log("\n--- Eating ---");
eagle.eat();
lion.eat();
snake.eat();
