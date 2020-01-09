class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;        
    }

    getName() {
      return this.name
    }

}






















module.exports = Employee


// class Shape {
//     // Just like constructor functions, classes can accept arguments
//     constructor(area, perimeter) {
//       this.area = area;
//       this.perimeter = perimeter;
//     }
  
//     printInfo() {
//       console.log(`Area: ${this.area}`);
//       console.log(`Perimeter: ${this.perimeter}`);
//     }
//   }
  
//   const shape = new Shape(25, 25);
  
//   shape.printInfo();
  