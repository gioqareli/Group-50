const user = {
    name: "John",
    age: 30,
    email: "john@example.com",
    role: "admin"
  };
  
  for (let key in user) {
    console.log(key, user[key]);
  }