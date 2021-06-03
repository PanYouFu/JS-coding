Function.prototype.myApply = function(obj) {
  // 当前this为调用函数

  // 执行上下文没有传入时，为window
  const context = obj || window
  
  // 在执行上下文上设置fn
  const fn = Symbol()
  context[fn] = this

  // 获取参数
  const args = arguments[1]
  console.log('args', args)
  
  // 执行函数, 并获取返回值
  let res
  if (args == undefined) { //没有传入参数直接执行
    res = context[fn]()
  } else {
    res = context[fn](...args) // 结构参数
  }
  delete context.fn // 从上下文中删除函数引用
  return res
}

function fn(param1, param2) {
  console.log('~~~~~~', param1, param2)
  console.log('fn bei zhixing le ---')
  console.log(this)
  let res = this.name + this.age + param1 + param2
  console.log('res--', res)
  return res
}


const obj = {
  name: 'qqqq',
  age: 'aaaa'
}

// console.log(fn.apply(obj, ['111', '2222']))

const result = fn.myApply(obj, ['---', '~~~~'])
console.log('result', result)
// fn.apply(obj, arguments) 第二个参数为类数组格式