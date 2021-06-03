//  all
function test (str, time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(str)
    }, time)
  })
}

// test('qqqq', 1000).then((res) => {
//   console.log('res ----  ', res)
// })
// test('wwww', 2000).then((res) => {
//   console.log('res ----  ', res)
// })
// test('eeee', 3000).then((res) => {
//   console.log('res ----  ', res)
// })

// Promise.all([test('qqqq', 1000), test('wwww', 2000), test('eeee', 3000)]).then(res => {
//   console.log(res)
// })

Promise.prototype.myAll = function (promisesArr) {
  return new Promise((resolve, reject) => {
    let result = []
    promisesArr.forEach(item => {
      // Promise.resolve(item)将参数强制转换成promise
      Promise.resolve(item).then(res => {
        result.push(res)
        if (result.length === promisesArr.length) {
          return resolve(result)
        }
      })
    })
  }, reject => {
    return reject(err)
  })
}

Promise.prototype.myAll([test('qqqq', 1000), test('wwww', 2000), test('eeee', 3000)]).then(res => {
  console.log(res)
})