class Animal {
  constructor(breed, positionInShelter) {
    this.breed = breed;
    this.positionInShelter = positionInShelter;
  }

  toString() {
    return (
      "Hi! I'm a " +
      this.breed.toLowerCase() +
      ". I was originally in positon " +
      this.positionInShelter
    );
  }
}

class Cat extends Animal {
  constructor(positionInShelter) {
    super("Cat", positionInShelter);
  }
}

class Dog extends Animal {
  constructor(positionInShelter) {
    super("Dog", positionInShelter);
  }
}

class AnimalShelter {
  constructor() {
    this.queueArray = [];
    this.headIdx = 0;
  }

  queue(animal) {
    this.queueArray = [...this.queueArray, animal];
  }

  dequeueAny() {
    return this.dequeue("Any");
  }

  dequeueCat() {
    return this.dequeue("Cat");
  }

  dequeueDog() {
    return this.dequeue("Dog");
  }

  dequeue(breed) {
    switch (breed) {
      case "Any": {
        const toReturn = this.queueArray[this.headIdx];
        this.queueArray = this.queueArray.slice(this.headIdx + 1, this.size());
        return toReturn || "no more animals...all adopted :)";
      }
      case "Dog":
      case "Cat": {
        for (let i = 0; i < this.size(); i++) {
          const animal = this.queueArray[i];
          if (animal.breed === breed) {
            this.queueArray = [
              ...this.queueArray.slice(0, i),
              ...this.queueArray.slice(i + 1, this.size())
            ];
            return animal.toString();
          }
        }
        return "no " + breed.toLowerCase() + " in queue..all adopted :)";
      }
    }
  }

  queueCat() {
    this.queue(new Cat(this.size()));
  }

  queueDog() {
    this.queue(new Dog(this.size()));
  }

  size() {
    return this.queueArray.length;
  }

  printShelter() {
    return this.queueArray.reduce((acc, curr) => {
      acc += curr.toString().concat(" |\n");
      return acc;
    }, "");
  }
}

const animalShelter = new AnimalShelter();
animalShelter.queueCat();
animalShelter.queueCat();
animalShelter.queueDog();
animalShelter.queueCat();
animalShelter.queueDog();
animalShelter.queueDog();
animalShelter.queueCat();
animalShelter.queueDog();
animalShelter.queueCat();
animalShelter.queueCat();
animalShelter.queueCat();
animalShelter.queueDog();
animalShelter.queueCat();
animalShelter.queueDog();
animalShelter.queueDog();
animalShelter.queueCat();
animalShelter.queueDog();
animalShelter.queueCat();
console.log("you adopted a...: " + animalShelter.dequeueAny());
console.log("you adopted a cat: " + animalShelter.dequeueCat());
console.log("you adopted a dog: " + animalShelter.dequeueDog());
console.log("you adopted a...: " + animalShelter.dequeueAny());
console.log("you adopted a cat: " + animalShelter.dequeueCat());
console.log("you adopted a dog: " + animalShelter.dequeueDog());
console.log("you adopted a...: " + animalShelter.dequeueAny());
console.log("you adopted a cat: " + animalShelter.dequeueCat());
console.log("you adopted a dog: " + animalShelter.dequeueDog());
console.log("you adopted a cat: " + animalShelter.dequeueCat());
console.log("you adopted a dog: " + animalShelter.dequeueDog());
console.log("you adopted a...: " + animalShelter.dequeueAny());
console.log("you adopted a...: " + animalShelter.dequeueAny());
console.log("you adopted a...: " + animalShelter.dequeueAny());
console.log("you adopted a...: " + animalShelter.dequeueAny());
console.log("you adopted a...: " + animalShelter.dequeueAny());
console.log("Remaining animals: \n" + animalShelter.printShelter());
