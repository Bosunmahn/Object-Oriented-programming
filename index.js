
/*==========  Object Literals  ==========*/

// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1,
//     },
//     draw: function() {
//         console.log('draw');
//     }
// };
// circle.draw();



/*========== Factories ==========*/

// function createCircle(radius) {
//     return {
//         radius: radius,
//         draw: function() {
//             console.log('draw');
//         }
//     };
// }
// const circle = createCircle(1);
// circle.draw();




/*========== Constructors ==========*/

// function Circle(radius) {
//     this.radius = radius,
//     this.draw = function() {
//         console.log('draw');
//     }
// }

// const another =new Circle(1);
// another.draw();




/*========== Primitive/value types ==========*/

// example of primitive types

// let x = 10;
// let y = x;

// x = 20;

// X and Y are two independent variable why?

// values are stored inside the variable..so when we assign x to y ...  it just copies the value stored in x

// Primitive types are independent

// let number = 10;

// function increase(number) {
//     number++;
// }

// increase(number);
// console.log(number);


/*========== Reference/Object types ==========*/

//example of Object/reference types

// let x = {value: 10};
// let y = x;

// x.value = 20;

// Objects are not stored in a variable but in the memory, just the address to that memory is stored in that variable

// let obj = {value: 10};

// function increase(obj) {
//     obj.value++;
// }

// increase(obj);
// console.log(obj);



/*========== Adding/Removing Properties ==========*/

// function Circle(radius) {
//     this.radius = radius,
//     this.draw = function() {
//         console.log('draw');
//     }
// }

// const circle = new Circle(10);

// // To Add a property to the object we do this below

// //dot notation
// circle.location = {x: 1};

// //bracket notation if property name is known and you want to access it
// circle['location'] = {x: 1};

// ////bracket notation if property name is not known and you want to access it
// const propertyName = "location";
// circle[propertyName] = {x: 1};


// To Delete a property from the object we do this below

// //dot notation
// delete circle.location;

// //bracket notation
// delete circle["location"];


/*========== Enumerating Properties ==========*/

// function Circle(radius) {
//     this.radius = radius,
//     this.draw = function() {
//         console.log('draw');
//     }
// }

// const circle = new Circle(10);

// to get all the properties and methods in an object 

// for(let key in circle) {
//     console.log(key);
// }

// to get values of properties and methods in an object 

// for(let key in circle) {
//     console.log(key, circle[key]);
// }

//to get only properties 
// for(let key in circle) {
//     if (typeof circle[key] !== 'function') {
//         console.log(key, circle[key]);
//     }
    
// }

//Another way to get all the keys and their value in an object

// const keys = Object.keys(circle);
// console.log(keys);

//If you want to know if an object has a given property

// if ('draw' in circle) {
//     console.log('Circle has a function');
// }

/**========== Abstraction ========== */

// hide the details/complexity
// show the essentials 


/**========== Private Properties and Methods */

// function Circle(radius) {

//     this.radius = radius;

//     let defaultLocation = {x:1, y:1};

//     let computeOptimumLocation = function(factor) {
//         //...
//     }

//     this.draw = function() {

//         computeOptimumLocation(0.1);
//         //defaultLocation
//         // this.radus
        
//         console.log('draw');
//     };
// }

// const circle = new Circle(10);
// circle.draw();

/**========== Getters & Setters ========== */


//we want to be able to read default location i.e define

// function Circle(radius) {

//     this.radius = radius;

//     let defaultLocation = { x: 0, y: 0 };

 
//     this.draw = function() {  
//         console.log('draw');
//     };

//     Object.defineProperty(this, 'defaultLocation', {
//         get: function() {
//             return defaultLocation;
//         }
//     });
// }

// const circle = new Circle(10);

// circle.draw();




/** If we want to modify what we defined */

// function Circle(radius) {

//     this.radius = radius;

//     let defaultLocation = { x: 0, y: 0 };

 
//     this.draw = function() {  
//         console.log('draw');
//     };

//     Object.defineProperty(this, 'defaultLocation', {
//         get: function() {
//             return defaultLocation;
//         },
//         set: function(value) {
//             if (!value.x || !value.y)
//                 throw new Error('Invalid location.');

//                 defaultLocation = value;
//         }
//     });
// }

// const circle = new Circle(10);
// circle.defaultLocation = ;

// circle.draw();


/** Excercise */

function Stopwatch() {

    let startTime, endTime, running, duration = 0;

    this.start = function() { 
        if (running) 
            throw new Error('stopwatch has already started')

        running = true;
        startTime = new Date();
    };

    this.stop = function() {
        if (!running) 
        throw new Error('stopwatch is not started')

        running = false;
        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    };

    this.reset = function() {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };

    Object.defineProperty(this, 'duration', {
        get: function() {return duration;}
    });

}

const sw = new Stopwatch()


