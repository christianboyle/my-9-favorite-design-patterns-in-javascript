function Person(name, age, isDeveloper) {
  this.name = name
  this.age = age
  this.isDeveloper = isDeveloper || false
}

Person.prototype.writesCode = function () {
  console.log(
    this.isDeveloper
      ? 'this person writes code'
      : 'this person does not write code'
  )
}

let person1 = new Person('Lizzy', 39, false)
let person2 = new Person('Christian', 39, true)

person1.writesCode() // this person does not write code
person2.writesCode() // this person writes code
