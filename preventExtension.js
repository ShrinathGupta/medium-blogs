"use strict"
function Student(name,college){
    this.id = new Date().getTime(),
    this.name = name;
    this.college = college
}

let std = new Student("John","Harvard")

let _obj = Object.preventExtensions(std); // Object.preventExtensions returns the object being made non-extensible.


std.marks = 100 // Throw error in strict mode only. TypeError: Cannot define property marks, object is not extensible

try {
    Object.defineProperty(std, 'marks', {
      value: 80
    });
  } catch (e) {
    console.log(e);
    // Expected output: TypeError: Cannot define property marks, object is not extensible
  }
  
