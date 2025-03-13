const car = {
    company: "Toyota",
    model: "Corolla",
    mileage: 150000,
    year: 2020,
    condition: "good",
  
    checkCondition: (condition) => console.log(`Car is in ${condition} condition.`)
  };

car.color = "red";
car.price = 20000;

delete car.mileage;