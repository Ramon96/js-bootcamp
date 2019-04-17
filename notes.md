# Notes

*You can write notes for each chapter here*.

## Chapter 1
For example, we can express the number 13 in bits. It works the same way as a decimal number, but instead of 10 different digits, you have only 2, and the weight of each increases by a factor of 2 from right to left. Here are the bits that make up the number 13, with the weights of the digits shown below them:

   0   0   0   0   1   1   0   1
 128  64  32  16   8   4   2   1
So that’s the binary number 00001101. Its non-zero digits stand for 8, 4, and 1, and add up to 13.

To be able to work with such quantities of bits without getting lost, we must separate them into chunks that represent pieces of information. In a JavaScript environment, those chunks are called values.

The way strings are ordered is roughly alphabetic but not really what you’d expect to see in a dictionary: uppercase letters are always “less” than lowercase ones, so "Z" < "a", and nonalphabetic characters (!, -, and so on) are also included in the ordering. When comparing strings, JavaScript goes over the characters from left to right, comparing the Unicode codes one by one.

There is only one value in JavaScript that is not equal to itself, and that is NaN (“not a number”).

There are two special values, written null and undefined, that are used to denote the absence of a meaningful value. They are themselves values, but they carry no information.

Many operations in the language that don’t produce a meaningful value (you’ll see some later) yield undefined simply because they have to yield some value.

The difference in meaning between undefined and null is an accident of JavaScript’s design, and it doesn’t matter most of the time. In cases where you actually have to concern yourself with these values, I recommend treating them as mostly interchangeable.

When an operator is applied to the “wrong” type of value, JavaScript will quietly convert that value to the type it needs, using a set of rules that often aren’t what you want or expect. This is called type coercion. The null in the first expression becomes 0, and the "5" in the second expression becomes 5 (from string to number). Yet in the third expression, + tries string concatenation before numeric addition, so the 1 is converted to "1" (from number to string).

console.log(null == undefined);
// → true

The || operator, for example, will return the value to its left when that can be converted to true and will return the value on its right otherwise. This has the expected effect when the values are Boolean and does something analogous for values of other types.

console.log(null || "user")
// → user
console.log("Agnes" || "user")
// → Agnes



## Chapter 2
A fragment of code that produces a value is called an expression.

The simplest kind of statement is an expression with a semicolon after it. This is a program:

1;
!false;

To catch and hold values, JavaScript provides a thing called a binding, or variable

The word const stands for constant. It defines a constant binding, which points at the same value for as long as it lives. This is useful for bindings that give a name to a value so that you can easily refer to it later.

The collection of bindings and their values that exist at a given time is called the environment.

A do loop is a control structure similar to a while loop. It differs only on one point: a do loop always executes its body at least once, and it starts testing whether it should stop only after that first execution. To reflect this, the test appears after the body of the loop.

The role of this indentation inside blocks is to make the structure of the code stand out. In code where new blocks are opened inside other blocks, it can become hard to see where one block ends and another begins.

if (false != true) {
  console.log("That makes sense.");
  if (1 < 2) {
    console.log("No surprise there.");
  }
}

JavaScript and similar languages provide a slightly shorter and more comprehensive form, the for loop.

for (let number = 0; number <= 12; number = number + 2) {
  console.log(number);

Having the looping condition produce false is not the only way a loop can finish. There is a special statement called break that has the effect of immediately jumping out of the enclosing loop.

The continue keyword is similar to break, in that it influences the progress of a loop. When continue is encountered in a loop body, control jumps out of the body and continues with the loop’s next iteration.

## Chapter 3
A function is created with an expression that starts with the keyword function. Functions have a set of parameters (in this case, only x) and a body, which contains the statements that are to be executed when the function is called. The function body of a function created this way must always be wrapped in braces, even when it consists of only a single statement.

A return keyword without an expression after it will cause the function to return undefined. Functions that don’t have a return statement at all, such as makeNoise, similarly return undefined.

Parameters to a function behave like regular bindings, but their initial values are given by the caller of the function, not the code in the function itself.

Each binding has a scope, which is the part of the program in which the binding is visible. For bindings defined outside of any function or block, the scope is the whole program—you can refer to such bindings wherever you want. These are called global.

Bindings declared with let and const are in fact local to the block that they are declared in, so if you create one of those inside of a loop, the code before and after the loop cannot “see” it. In pre-2015 JavaScript, only functions created new scopes, so old-style bindings, created with the var keyword, are visible throughout the whole function that they appear in—or throughout the global scope, if they are not in a function.

JavaScript distinguishes not just global and local bindings. Blocks and functions can be created inside other blocks and functions, producing multiple degrees of locality.

function square(x) {
  return x * x;
}

This is a function declaration. The statement defines the binding square and points it at the given function. It is slightly easier to write and doesn’t require a semicolon after the function.

There’s a third notation for functions, which looks very different from the others. Instead of the function keyword, it uses an arrow (=>) made up of an equal sign and a greater-than character (not to be confused with the greater-than-or-equal operator, which is written >=).

const power = (base, exponent) => {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};

When there is only one parameter name, you can omit the parentheses around the parameter list. If the body is a single expression, rather than a block in braces, that expression will be returned from the function. So, these two definitions of square do the same thing:

const square1 = (x) => { return x * x; };
const square2 = x => x * x;
When an arrow function has no parameters at all, its parameter list is just an empty set of parentheses.

const horn = () => {
  console.log("Toot");
};

There’s no deep reason to have both arrow functions and function expressions in the language. Apart from a minor detail, which we’ll discuss in Chapter 6, they do the same thing.

We want to write a program that prints two numbers: the numbers of cows and chickens on a farm, with the words Cows and Chickens after them and zeros padded before both numbers so that they are always three digits long.

007 Cows
011 Chickens
This asks for a function of two arguments—the number of cows and the number of chickens. Let’s get coding.

function printFarmInventory(cows, chickens) {
  let cowString = String(cows);
  while (cowString.length < 3) {
    cowString = "0" + cowString;
  }
  console.log(`${cowString} Cows`);
  let chickenString = String(chickens);
  while (chickenString.length < 3) {
    chickenString = "0" + chickenString;
  }
  console.log(`${chickenString} Chickens`);
}
printFarmInventory(7, 11);
Writing .length after a string expression will give us the length of that string. Thus, the while loops keep adding zeros in front of the number strings until they are at least three characters long.

Mission accomplished! But just as we are about to send the farmer the code (along with a hefty invoice), she calls and tells us she’s also started keeping pigs, and couldn’t we please extend the software to also print pigs?

We sure can. But just as we’re in the process of copying and pasting those four lines one more time, we stop and reconsider. There has to be a better way. Here’s a first attempt:

function printZeroPaddedWithLabel(number, label) {
  let numberString = String(number);
  while (numberString.length < 3) {
    numberString = "0" + numberString;
  }
  console.log(`${numberString} ${label}`);
}

function printFarmInventory(cows, chickens, pigs) {
  printZeroPaddedWithLabel(cows, "Cows");
  printZeroPaddedWithLabel(chickens, "Chickens");
  printZeroPaddedWithLabel(pigs, "Pigs");
}

printFarmInventory(7, 11, 3);
It works! But that name, printZeroPaddedWithLabel, is a little awkward. It conflates three things—printing, zero-padding, and adding a label—into a single function.

Instead of lifting out the repeated part of our program wholesale, let’s try to pick out a single concept.

function zeroPad(number, width) {
  let string = String(number);
  while (string.length < width) {
    string = "0" + string;
  }
  return string;
}

function printFarmInventory(cows, chickens, pigs) {
  console.log(`${zeroPad(cows, 3)} Cows`);
  console.log(`${zeroPad(chickens, 3)} Chickens`);
  console.log(`${zeroPad(pigs, 3)} Pigs`);
}

printFarmInventory(7, 16, 3);
A function with a nice, obvious name like zeroPad makes it easier for someone who reads the code to figure out what it does.

## Chapter 4

let doh = "Doh";
console.log(typeof doh.toUpperCase);
// → function
console.log(doh.toUpperCase());
// → DOH

let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
// → [1, 2, 3, 4, 5]
console.log(sequence.pop());
// → 5
console.log(sequence);
// → [1, 2, 3, 4]


let day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running"]
};
console.log(day1.squirrel);
// → false
console.log(day1.wolf);
// → undefined
day1.wolf = false;
console.log(day1.wolf);
// → false

This means that braces have two meanings in JavaScript. At the start of a statement, they start a block of statements. In any other position, they describe an object. Fortunately, it is rarely useful to start a statement with an object in braces, so the ambiguity between these two is not much of a problem.

Reading a property that doesn’t exist will give you the value undefined.

It is possible to assign a value to a property expression with the = operator. This will replace the property’s value if it already existed or create a new property on the object if it didn’t.

The delete operator cuts off a tentacle from such an octopus. It is a unary operator that, when applied to an object property, will remove the named property from the object. This is not a common thing to do, but it is possible.

The binary in operator, when applied to a string and an object, tells you whether that object has a property with that name. The difference between setting a property to undefined and actually deleting it is that, in the first case, the object still has the property (it just doesn’t have a very interesting value), whereas in the second case the property is no longer present and in will return false.

To find out what properties an object has, you can use the Object.keys function. You give it an object, and it returns an array of strings—the object’s property names.

There’s an Object.assign function that copies all properties from one object into another.

let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4});
console.log(objectA);
// → {a: 1, b: 3, c: 4}

Arrays, then, are just a kind of object specialized for storing sequences of things. If you evaluate typeof [], it produces "object". You can see them as long, flat octopuses with all their tentacles in a neat row, labeled with numbers.

let journal = [
  {events: ["work", "touched tree", "pizza",
            "running", "television"],
   squirrel: false},
  {events: ["work", "ice cream", "cauliflower",
            "lasagna", "touched tree", "brushed teeth"],
   squirrel: false},
  {events: ["weekend", "cycling", "break", "peanuts",
            "beer"],
   squirrel: true},
  /* and so on... */
];

When we have two numbers, 120 and 120, we can consider them precisely the same number, whether or not they refer to the same physical bits. With objects, there is a difference between having two references to the same object and having two different objects that contain the same properties. Consider the following code:

let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};

console.log(object1 == object2);
// → true
console.log(object1 == object3);
// → false

object1.value = 15;
console.log(object2.value);
// → 15
console.log(object3.value);
// → 10
The object1 and object2 bindings grasp the same object, which is why changing object1 also changes the value of object2. They are said to have the same identity. The binding object3 points to a different object, which initially contains the same properties as object1 but lives a separate life.

const score = {visitors: 0, home: 0};
// This is okay
score.visitors = 1;
// This isn't allowed
score = {visitors: 1, home: 1};

When you compare objects with JavaScript’s == operator, it compares by identity: it will produce true only if both objects are precisely the same value. Comparing different objects will return false, even if they have identical properties.

There is a simpler way to write such loops in modern JavaScript.

for (let entry of JOURNAL) {
  console.log(`${entry.events.length} events.`);
}

//WOAHHHH thats pretty cool

We saw push and pop, which add and remove elements at the end of an array, earlier in this chapter. The corresponding methods for adding and removing things at the start of an array are called unshift and shift.

Another fundamental array method is slice, which takes start and end indices and returns an array that has only the elements between them. The start index is inclusive, the end index exclusive.

When the end index is not given, slice will take all of the elements after the start index. You can also omit the start index to copy the entire array.

The concat method can be used to glue arrays together to create a new array, similar to what the + operator does for strings.

function remove(array, index) {
  return array.slice(0, index)
    .concat(array.slice(index + 1));
}
console.log(remove(["a", "b", "c", "d", "e"], 2));
// → ["a", "b", "d", "e"]

The trim method removes whitespace (spaces, newlines, tabs, and similar characters) from the start and end of a string.

The zeroPad function from the previous chapter also exists as a method. It is called padStart and takes the desired length and padding character as arguments.

You can split a string on every occurrence of another string with split and join it again with join.


A string can be repeated with the repeat method, which creates a new string containing multiple copies of the original string, glued together.

It can be useful for a function to accept any number of arguments. For example, Math.max computes the maximum of all the arguments it is given.

To write such a function, you put three dots before the function’s last parameter

let words = ["never", "fully"];
console.log(["will", ...words, "understand"]);
// → ["will", "never", "fully", "understand"]
## Chapter 5

The ranges property contains an array of Unicode character ranges, each of which is a two-element array containing a lower bound and an upper bound. Any character codes within these ranges are assigned to the script. The lower bound is inclusive (code 994 is a Coptic character), and the upper bound is non-inclusive (code 1008 isn’t).

JavaScript’s charCodeAt method gives you a code unit, not a full character code. The codePointAt method, added later, does give a full Unicode character. So we could use that to get characters from a string. But the argument passed to codePointAt is still an index into the sequence of code units. So to run over all characters in a string, we’d still need to deal with the question of whether a character takes up one or two code units.

he countBy function expects a collection (anything that we can loop over with for/of) and a function that computes a group name for a given element. It returns an array of objects, each of which names a group and tells you the number of elements that were found in that group.

## Chapter 6

The core idea in object-oriented programming is to divide programs into smaller pieces and make each piece responsible for managing its own state.

Someone working on the rest of the program does not have to remember or even be aware of that knowledge. Whenever these local details change, only the code directly around it needs to be updated.

Different pieces of such a program interact with each other through interfaces, limited sets of functions or bindings that provide useful functionality at a more abstract level, hiding their precise implementation.

Properties that are part of the interface are called public. The others, which outside code should not be touching, are called private.

 It is also common to put an underscore (_) character at the start of property names to indicate that those properties are private.

 Methods are nothing more than properties that hold function values. This is a simple method:

let rabbit = {};
rabbit.speak = function(line) {
  console.log(`The rabbit says '${line}'`);
};

rabbit.speak("I'm alive.");
// → The rabbit says 'I'm alive.'
let rabbit = {};
rabbit.speak = function(line) {
  console.log(`The rabbit says '${line}'`);
};

rabbit.speak("I'm alive.");
// → The rabbit says 'I'm alive.'

Usually a method needs to do something with the object it was called on. When a function is called as a method—looked up as a property and immediately called, as in object.method()—the binding called this in its body automatically points at the object that it was called on.

function speak(line) {
  console.log(`The ${this.type} rabbit says '${line}'`);
}
let whiteRabbit = {type: "white", speak};
let hungryRabbit = {type: "hungry", speak};

whiteRabbit.speak("Oh my ears and whiskers, " +
                  "how late it's getting!");
// → The white rabbit says 'Oh my ears and whiskers, how
//   late it's getting!'
hungryRabbit.speak("I could use a carrot right now.");
// → The hungry rabbit says 'I could use a carrot right now.'

Many objects don’t directly have Object.prototype as their prototype but instead have another object that provides a different set of default properties. Functions derive from Function.prototype, and arrays derive from Array.prototype.

You can use Object.create to create an object with a specific prototype.

JavaScript’s prototype system can be interpreted as a somewhat informal take on an object-oriented concept called classes. A class defines the shape of a type of object—what methods and properties it has. Such an object is called an instance of the class.

JavaScript provides a way to make defining this type of function easier. If you put the keyword new in front of a function call, the function is treated as a constructor. This means that an object with the right prototype is automatically created, bound to this in the function, and returned at the end of the function.

The prototype object used when constructing objects is found by taking the prototype property of the constructor function.

function Rabbit(type) {
  this.type = type;
}
Rabbit.prototype.speak = function(line) {
  console.log(`The ${this.type} rabbit says '${line}'`);
};

let weirdRabbit = new Rabbit("weird");



class Rabbit {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}

let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");

A map (noun) is a data structure that associates values (the keys) with other values. For example, you might want to map names to ages. It is possible to use objects for this.

let ages = {
  Boris: 39,
  Liang: 22,
  Júlia: 62
};

console.log(`Júlia is ${ages["Júlia"]}`);
// → Júlia is 62
console.log("Is Jack's age known?", "Jack" in ages);
// → Is Jack's age known? false
console.log("Is toString's age known?", "toString" in ages);
// → Is toString's age known? true

Fortunately, JavaScript comes with a class called Map that is written for this exact purpose. It stores a mapping and allows any type of keys.

let ages = new Map();
ages.set("Boris", 39);
ages.set("Liang", 22);
ages.set("Júlia", 62);

console.log(`Júlia is ${ages.get("Júlia")}`);
// → Júlia is 62
console.log("Is Jack's age known?", ages.has("Jack"));
// → Is Jack's age known? false
console.log(ages.has("toString"));
// → false

The methods set, get, and has are part of the interface of the Map object. 

console.log({x: 1}.hasOwnProperty("x"));
// → true
console.log({x: 1}.hasOwnProperty("toString"));
// → false

We can directly use this interface ourselves.

let okIterator = "OK"[Symbol.iterator]();
console.log(okIterator.next());
// → {value: "O", done: false}
console.log(okIterator.next());
// → {value: "K", done: false}
console.log(okIterator.next());
// → {value: undefined, done: true}

It is not even necessary for such an object to compute and store such a property directly in the instance. Even properties that are accessed directly may hide a method call. Such methods are called getters, and they are defined by writing get in front of the method name in an object expression or class declaration.

Whenever someone reads from this object’s size property, the associated method is called. You can do a similar thing when a property is written to, using a setter.

JavaScript’s prototype system makes it possible to create a new class, much like the old class, but with new definitions for some of its properties. The prototype for the new class derives from the old prototype but adds a new definition for, say, the set method.

In object-oriented programming terms, this is called inheritance. The new class inherits properties and behavior from the old class.

The use of the word extends indicates that this class shouldn’t be directly based on the default Object prototype but on some other class. This is called the superclass. The derived class is the subclass.

## Chapter 8

## Chapter 9

## Chapter 10

## Chapter 11