"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    name;
    species;
    sound;
    constructor(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
    makeSound() {
        console.log(`${this.name} is sound ${this.sound}`);
    }
}
const dog = new Animal("hero dog", "dog", "ghew ghew");
const cat = new Animal("Hero cat", "cat", "Mew Mew");
dog.makeSound();
cat.makeSound();
//# sourceMappingURL=class.js.map