let personPrototype = {
  sayHi() {
    console.log('Hi, I am ' + this.name + ', and I am ' + this.age)
  },
  sayBye() {
    console.log('Bye!')
  }
}

function Person(name, age) {
  var name = name || 'John Doe'
  var age = age || 26

  function constructorFunction(name, age) {
    this.name = name
    this.age = age
  }

  constructorFunction.prototype = personPrototype

  let instance = new constructorFunction(name, age)
  return instance
}

const person1 = Person()
const person2 = Person('Jane Doe', 38)

person1.sayHi() // Hi, I am John Doe, and I am 26

person2.sayHi() // Hi, I am Jane Doe, and I am 38
