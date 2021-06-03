function Parent(name) {
  this.name = name
}

Parent.prototype.getName = function() {
  console.log('this is my name - ', this.name)
  return this.name
}

function inherits(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype)
  Child.prototype.constructor = Child
  Child._proto_ = Parent
}

function Child(name, age) {
  Parent.call(this, name)
  this.age = age
}

Child.prototype.getAge = function() {
  console.log('this is my age -', this.age)
  return this.age
}

const a = new Child('oo', '19')

// console.log(a.getAge())
a.getName()
a.getAge()