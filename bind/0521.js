var person = {
  job: 'H5'
}

function getInfo(name, age) {
  console.log(this.job, name, age)
}

var getInfo1 = getInfo.myBind(person, 'pkx2')
getInfo1('27+')

Function.prototype.myBind = function(context) {
  if (typeof this !== 'Function') {
    throw new TypeError('type error')
  }
  const fn = this
  let args = [...arguments].slice(1) // 获取余下的参数
  function bind() {
    const argNow = [...arguments] // 获取新生成函数的参数
    const finalArgs = args.concat(argNow) // 合并参数
    
    if (this instanceof myBind) {
      // 使用new调用
      fn.apply(this, finalArgs)
    } else {
      fn.apply(context, finalArgs) // 执行函数
    }
    bind.prototype = Object.create(fn.prototype) // 通过new调用
  }

  return bind
}
