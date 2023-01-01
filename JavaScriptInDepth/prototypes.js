//JavaScript is a prototype based language rather than an object-oriented language. If there is one major difference between Python and JavaScript, this would be it.

//Adding a method to an object

/*We've seen what a JavaScript object is. What we haven't seen yet is that you can also add functions to an object. A function attached to an object is called a method just like functions attached to classes in Python. */

var person = {
    name : "Bob",
    age : 19,
    sayHi : function(){
        console.log("Hello! I'm Bob.")
    }
}

person.sayHi();