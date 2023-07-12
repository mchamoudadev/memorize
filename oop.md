# Introduction to Object-Oriented Programming in JavaScript

Welcome to our tutorial on Object-Oriented Programming (OOP) in JavaScript! In this lesson, we will explore the fundamental principles of OOP and how they are implemented in JavaScript. We'll delve into key concepts such as the `this` keyword, object literals, constructor functions, and the four main principles of OOP: Encapsulation, Inheritance, Polymorphism, and Abstraction.

## What You'll Learn

- Understanding the `this` keyword in JavaScript
- Creating objects using object literals and constructor functions
- Implementing Object-Oriented Programming (OOP) in JavaScript
- Understanding the four main principles of OOP: Encapsulation, Inheritance, Polymorphism, and Abstraction
- Writing and using classes in JavaScript
- Implementing inheritance, polymorphism, and abstraction in JavaScript classes

## Outline

1. **Understanding the `this` Keyword**

   - What is `this`?
   - Why do we need `this`?

2. **Creating Objects in JavaScript**

   - Object Literals
   - Constructor Functions

3. **Introduction to OOP in JavaScript**

   - What is Object-Oriented Programming?
   - The four main principles of OOP: Encapsulation, Inheritance, Polymorphism, and Abstraction
   - Why use OOP in JavaScript?

4. **Implementing OOP in JavaScript**
   - Defining a class
   - Creating an instance of a class
   - Adding methods to a class
   - Implementing inheritance in JavaScript classes
   - Implementing polymorphism in JavaScript classes
   - Implementing abstraction in JavaScript classes

By the end of this lesson, you will have a solid understanding of OOP principles in JavaScript and be able to use these concepts to write cleaner, more efficient, and reusable code.

**this Keyword:**

The `this` keyword is a special keyword in JavaScript that refers to the context in which a function is called. Inside an object method, `this` refers to the object that the method belongs to.

- The `this` keyword refers to the context in which a function is executed or an object that owns the code being executed.
- In the global scope, `this` refers to the global object (e.g., `window` in a browser).
- When a function is called as a method of an object, `this` refers to the object itself.
- You can explicitly set the value of `this` using methods like `call()`, `apply()`, and `bind()`.
- Arrow functions have a lexical `this` context and do not bind their own `this` value.
- When a function is used as an event handler, `this` refers to the element on which the event was triggered.

Remember that understanding the value of `this` depends on how functions are called and the context in which they are executed.

```javascript
let car = {
	brand: "Tesla",
	model: "Model S",
	year: 2020,
	start: function () {
		console.log(this.brand + " " + this.model + " is starting."); // 'this' refers to the 'car' object
	},
};
```

**In the example above, `this.brand` and `this.model` inside the `start` function refer to the `brand` and `model` properties of the `car` object.**

## Why Do We Need `this`?

The `this` keyword is needed in JavaScript for a couple of reasons:

1. **Flexibility and Reusability**: With `this`, you can write a method once and then reuse it on different objects. The method will act on the object that it was called on, thanks to `this`.

2. **To Refer to the Current Object**: `this` allows you to access the properties and methods of the current object inside a method. This is especially useful in constructor functions where you can't know ahead of time what the properties of the objects will be.

**Object Literal:**

An object literal is the simplest way to create an object. It is just a list of key-value pairs enclosed in curly braces. Here is an example:

```javascript
let car = {
	brand: "Tesla",
	model: "Model S",
	year: 2020,
	start: function () {
		console.log(this.brand + " " + this.model + " is starting.");
	},
};
```

**Constructor Function:**

In JavaScript, when you create objects using constructors, you have the ability to define methods on the constructor's prototype. The prototype is an object that acts as a blueprint for all instances created with that constructor. Any methods defined on the prototype are shared among all instances of the constructor, reducing memory usage and promoting code efficiency.

A constructor function is a special type of function used to create an object. When a function is invoked with the `new` keyword, it becomes a constructor function. A constructor function allows you to create multiple instances of the same object.

```javascript
function Car(brand, model, year) {
	this.brand = brand;
	this.model = model;
	this.year = year;
	this.start = function () {
		console.log(this.brand + " " + this.model + " is starting.");
	};
}

let car1 = new Car("Tesla", "Model S", 2020);
let car2 = new Car("Ford", "Mustang", 2021);

car1.start();
car2.start();
```

Both `car1` and `car2` can access and invoke the `start` method defined on the prototype of the `Car` constructor. The `this.brand` within the method refers to the specific instance's `brand` property.

This way, you define the method once on the prototype, and all instances of the constructor can use it. It saves memory because the method is not duplicated for each instance.

On the other hand, with object literals, methods are defined directly within the object itself. Each object literal has its own set of properties and methods, but they are not shared among other object literals.

## Object-Oriented Programming (OOP) in JavaScript

Object-Oriented Programming (OOP) is a programming paradigm based on the concept of "objects", which can contain data and code. The data represents the state of the object and the code represents its behavior.

In JavaScript, OOP can be implemented using various mechanisms. Before ES6 (ECMAScript 6), JavaScript was a prototype-based language, but ES6 introduced the `class` keyword which makes OOP in JavaScript look more similar to other languages like Java or C++.

### Pillars of OOP in JavaScript

The four main principles (pillars) of OOP in JavaScript are:

1. **Encapsulation**: This principle is about bundling the data and the methods that operate on the data within one unit, i.e., an object. This helps to hide the internal state of one object from the others. It also improves code readability and reusability.

2. **Inheritance**: Inheritance allows a class to inherit properties and methods from another class. In JavaScript, inheritance is implemented using `extends` and `super` keywords.

3. **Polymorphism**: Polymorphism allows a subclass to override a method of its superclass. It enables the programmer to use methods of the same name across different objects.

4. **Abstraction**: Abstraction means to hide complex details and show only essentials. It simplifies complex systems by breaking them down into smaller, simpler parts.

### Why Use OOP in JavaScript

OOP makes the code more modular and easier to maintain, understand, and debug. It allows for better data structures that are more intuitive to think about. It also makes it easier to collaborate on large codebases since different sections can be worked on independently.

### OOP in JavaScript: Step-by-Step with Examples

#### Step 1: Defining a Class

A class is a blueprint for creating objects. In JavaScript, a class is defined using the `class` keyword.

```javascript
class Car {
	constructor(brand) {
		this.brand = brand; // "this" refers to the instance of the class
	}
}
```

In this example, `Car` is a class and `brand` is a property of this class. The constructor method is a special method for creating and initializing objects created with a class.

## Step 2: Creating an Instance of a Class

Once you have defined a class, you can create an instance (or object) of that class using the `new` keyword.

```javascript
let myCar = new Car("Toyota");
console.log(myCar.brand); // Outputs: Toyota
```

In this code, `myCar` is an instance of the `Car` class.

## Step 3: Adding Methods to a Class

Methods are functions defined inside a class. They represent the behaviors of the objects that are created from the class.

```javascript
class Car {
	constructor(brand) {
		this.brand = brand;
	}

	getBrand() {
		return this.brand;
	}
}

let myCar = new Car("Toyota");
console.log(myCar.getBrand()); // Outputs: Toyota
```

In this code, `getBrand` is a method that returns the brand of the `Car` instance.

## Step 4: Implementing Inheritance

Inheritance is implemented in JavaScript using the `extends` keyword. Inheritance allows one class to get the properties and methods of another class.

```javascript
class Car {
	constructor(brand) {
		this.brand = brand;
	}

	getBrand() {
		return this.brand;
	}
}

class Model extends Car {
	constructor(brand, mod) {
		super(brand);
		this.model = mod;
	}

	getModel() {
		return this.model;
	}
}

let myCar = new Model("Toyota", "Corolla");
console.log(myCar.getBrand()); // Outputs: Toyota
console.log(myCar.getModel()); // Outputs: Corolla
```

In this code, the `Model` class inherits from the `Car` class. The `Model` class has an additional property `model` and an additional method `getModel`. The `super` keyword is used to call the constructor of the superclass.

## Step 5: Implementing Polymorphism

Polymorphism allows methods in an object to act differently based on the objects that call them. In JavaScript, polymorphism is achieved through method overriding.

```javascript
class Car {
	constructor(brand) {
		this.brand = brand;
	}

	getBrand() {
		return this.brand;
	}

	printDetails() {
		return `Brand: ${this.brand}`;
	}
}

class Model extends Car {
	constructor(brand, mod) {
		super(brand);
		this.model = mod;
	}

	getModel() {
		return this.model;
	}

	printDetails() {
		return `Brand: ${this.brand}, Model: ${this.model}`;
	}
}

let myCar = new Model("Toyota", "Corolla");
console.log(myCar.printDetails()); // Outputs: Brand: Toyota, Model: Corolla
```

In this code, the `Model` class overrides the `printDetails` method of the `Car` class, thereby implementing polymorphism.

## Step 6: Implementing Abstraction

Abstraction is a principle in object-oriented programming that hides the details and shows only the essential features of an object. It helps to reduce complexity by splitting the code into many different units (objects) and each object handles its own data and functionality.

Here's how you could implement abstraction in JavaScript:

```javascript
class Car {
	constructor(brand, model, year) {
		this.brand = brand;
		this.model = model;
		this.year = year;
		this._mileage = 0; // "_" convention denotes a private variable, but it's not truly private.
	}

	getBrand() {
		return this.brand;
	}

	getModel() {
		return this.model;
	}

	getYear() {
		return this.year;
	}

	getMileage() {
		return this._mileage;
	}

	increaseMileage(amount) {
		if (amount < 0) throw new Error("Mileage cannot decrease");
		this._mileage += amount;
	}
}

let myCar = new Car("Toyota", "Corolla", 2020);
console.log(myCar.getBrand()); // Outputs: Toyota
console.log(myCar.getModel()); // Outputs: Corolla
console.log(myCar.getYear()); // Outputs: 2020
console.log(myCar.getMileage()); // Outputs: 0

myCar.increaseMileage(5000);
console.log(myCar.getMileage()); // Outputs: 5000
```

In this code, the `increaseMileage` method abstracts away the details of increasing the car's mileage. It provides a clear and simple interface to increase the mileage, and it also hides the complexity of the operation (i.e., the check to prevent decreasing mileage). Additionally, the `_mileage` variable is intended to be private (i.e., it's not meant to be accessed directly), thus implementing the encapsulation aspect of abstraction.
