Function.prototype.myCall = function(obj) {
  const context = obj || window
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