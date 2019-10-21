const Bcrypt = require("bcryptjs");

const pass = Bcrypt.hashSync("1234", 10)
console.log(pass)


const pass1 = Bcrypt.compareSync("1234", pass)
console.log(pass1)