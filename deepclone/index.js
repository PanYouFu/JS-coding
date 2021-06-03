function deepClone(obj) {
    // 简单类型直接返回
    if (!obj instanceof Object) return obj

    if (obj instanceof Function) {
      return function () {
        return obj.apply(this, arguments)
      }
    }

    // 支持日期
    if (obj instanceof Date) return new Date(obj)
    // 支持正则对象
    if (obj instanceof RegExp) return new RegExp(obj.source, obj.flags)
    
    const res = obj instanceof Array ? [] : {}
    Object.keys(obj).forEach(key => {
      if(obj[key] instanceof Object) {
        // 引用类型递归
        res[key] = deepClone(obj[key])
      } else {
        res[key] = obj[key]
      }
    })
    return res
  }
  
  var a = {
    q: '112',
    w: 123,
    e: [1, 'wqe', '555', [1, 2, 3], {z: '--', u: '++'}],
    f: {
      c: 'wqwq',
      v: 'qew',
      ss: [6, 7, 8],
      ddd: {
        cc: 'ccc',
        vv: '000'
      }
    }
  }
  
var b = deepClone(a)

console.log('b----', b)

// 终极判断类型
// Object.prototype.toString.call(x)

function deepcopy(obj) {
  // 不是引用类型直接返回
  if (!obj instanceof Object) return obj

  // 函数类型
  if (obj instanceof Function) {
    return function() {
      return obj.apply(this, arguments)
    }
  }

  // date 类型
  if (obj instanceof Date) {
    return new Date(obj)
  }

  // RegExp
  if (obj instanceof RegExp) {
    return new RegExp(obj.source, obj.flags)
  }

  // 数组与对象
  const res = Array.isArray(obj) ? [] : {}
  Object.keys(obj).forEach(key => {
    if (obj instanceof Object) {
      res[key] = deepcopy(obj[key]) // 递归调用
    } else {
      res[key] = obj[key]
    }
  })
}

var c = deepClone(a)

console.log('c----', c)