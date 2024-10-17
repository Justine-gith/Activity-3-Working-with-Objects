let car = {
  type: " Sportscar",
  model: "Lamborghini",
  color: "Red"
};

console.log(car) // the output is: { type: ' Sportscar', model: 'Labotu', color: 'Red' }
console.log(typeof car); // the output is: Object


car.type = "Honda";
console.log(`Updated car object:`, car); // the output is: Updated car object: { type: 'Honda', model: 'Labotu', color: 'Red' }

car.wheels = 4;
console.log(`New property:`, car); // the output is: Updated car object: { type: 'Honda', model: 'Labotu', color: 'Red', wheels: 4 }