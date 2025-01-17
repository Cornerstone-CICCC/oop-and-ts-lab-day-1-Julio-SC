
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
            if (newValue <= 0) {
                this.#energy = 0;
                Animal.remainingAnimals--; // Decrease count if energy hits 0
            } else {
                this.#energy = newValue;
            }
        }
    
        // General methods
        attack(target) {
            if (this.#energy <= 0) {
                console.log(`${this.#name} has no energy left to attack.`);
                return;
            }
            console.log(`${this.#name} attacks ${target.name}!`);
            this.energy -= 10;
            target.energy -= 10;
    
            if (target.energy === 0) {
                console.log(`${target.name} is out of energy. ${this.#name} wins!`);
            }
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
            if (this.energy <= 0) {
                console.log(`${this.name} has no energy left to attack.`);
                return;
            }
            console.log(`${this.name} swoops in to attack ${target.name}!`);
            this.energy -= 20;
            target.energy -= 20;
    
            if (target.energy === 0) {
                console.log(`${target.name} is out of energy. ${this.name} wins!`);
            }
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
    
        // Overriding methods
        attack(target) {
            if (this.energy <= 0) {
                console.log(`${this.name} has no energy left to attack.`);
                return;
            }
            console.log(`${this.name} lunges to attack ${target.name}!`);
            this.energy -= 50;
            target.energy -= 50;
    
            if (target.energy === 0) {
                console.log(`${target.name} is out of energy. ${this.name} wins!`);
            }
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
    
        // Overriding methods
        attack(target) {
            if (this.energy <= 0) {
                console.log(`${this.name} has no energy left to attack.`);
                return;
            }
            console.log(`${this.name} strikes to attack ${target.name}!`);
            this.energy -= 30;
            target.energy -= 30;
    
            if (target.energy === 0) {
                console.log(`${target.name} is out of energy. ${this.name} wins!`);
            }
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

// Display the remaining number of animals with energy
console.log(`Remaining animals with energy: ${Animal.remainingAnimals}`);

// Example eating
console.log("\n--- Eating ---");
eagle.eat();
lion.eat();
snake.eat();
