Function.prototype.mycall = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('not funciton')
  }
  const fn = Symbol()
  context[fn] = this
  
  let args = []
  for (let i = 1, len = arguments.length; i < len; i++) {
    args.push(arguments[i]);
  }
  context[fn](...args)
  let res = context[fn](...args)
  delete context[fn]
  return res
}

const obj = {
  name: 'pkx'
}

function getInfo(age, job) {
  console.log(this.name, age, job)
}

getInfo.call(obj, '26', 'H5')
