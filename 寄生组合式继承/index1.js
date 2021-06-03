function inherits (Child, Parent) {
    // 更改原型对象，构造函数，_proto_ 指向
    Child.prototype = Object.create(Parent.prototype)
    Child.prototype.constructor = Child
    Child._proto_ = Parent
  }
  
  function Person(age) {
    this.age = age
  }
  Person.prototype.parentFn = function() {
    console.log('parentFn-', this.age)
    return this.age
  }
  function Chinese(name, age) {
    Person.call(this, age)
    this.name = name
  }
  inherits(Chinese, Person)
  
  // 继承之后 再 定义子类构造函数的原型对象上的方法
  Chinese.prototype.childFn = function() {
    console.log('childFn --', this.name)
    return this.name
  }
  
  const pkx = new Chinese('pankx', '22')
  console.log(pkx)
  pkx.parentFn()
  pkx.childFn()
  
  
  // Object.create() 约等于如下函数
  function create(proto) {
    function fn () {}
    fn.prototype = proto
    return new fn()
  }