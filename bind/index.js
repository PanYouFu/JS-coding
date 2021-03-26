// bind
// const bound = fn.bind(this, 'p1', 'p2')
// bind 方法，用于绑定this, 并返回函数。这个函数的

var person = {
  job: 'H5'
}

function getInfo(name, age) {
  console.log(this.job, name, age)
}

// 简单版本
Function.prototype.myBind = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('not funciton')
  }
  var fn = this
  // 获取bind入参
  var args = [].slice.call(arguments, 1) || Array.from(arguments).slice(1)
  var bound = function () {
    // 获取bound入参
    var boundArgs = [].slice.call(arguments) || Array.from(arguments).slice()
    console.log('args', args)
    var finalArgs = args.concat(boundArgs)
    console.log('boundArgs', boundArgs)
    // 合并入参
    fn.apply(context, finalArgs)
  }
  return bound
}

var getInfo1 = getInfo.bind(person, 'pkx')
getInfo1('26')
var getInfo2 = getInfo.myBind(person, 'pkx2')
getInfo2('26+')


// 简单版本 优化
Function.prototype.myBind1 = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  const fn = this
  let args = [...arguments].slice(1)

  const bound = function () {
    const boundArgs = [...arguments]
    const finalArgs = args.concat(boundArgs)

    // 通过 new 调用
    if (this instanceof bound) {
      fn.apply(this, finalArgs)
    } else {
      fn.apply(context, finalArgs)   
    }
    // 支持 new 调用方式
    bound.prototype = Object.create(fn.prototype)
  }
  return bound
}

var getInfo3 = getInfo.myBind1(person, 'pkx2')
getInfo2('27+')
