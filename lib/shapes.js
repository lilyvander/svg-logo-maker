class Shape {
    constructor() {
      // common properties
    }
  
    setColor(color) {
      // set shape color
    }
  
    render() {
      // render method for SVG
    }
  }
  
  class Triangle extends Shape {
    // Triangle specific properties and methods
  }
  
  class Circle extends Shape {
    // Circle specific properties and methods
  }
  
  class Square extends Shape {
    // Square specific properties and methods
  }
  
  module.exports = { Triangle, Circle, Square };