// 实现promise.all

function test(text = "666", time = 1000) {
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve(text)
    }, time)
  })
}

let p1 = test("p1", 300)
let p2 = test("p2", 100)
let p3 = test("p3", 200)
let pArr = [p1, p2, p3]

Promise.prototype.myAll = function(arr = []) {
  const res = []
  return new Promise(resolve => {
    arr.forEach((promise) => {
      promise.then(val => {
        console.log('--vvv---', val)
        res.push(val)
        if (res.length === arr.length) {
          console.log('11')
          return resolve(res)
        }
      })
    })
  }, reject => {
    return reject(err)
  })
}

Promise.prototype.myAll(pArr).then(res => {
  console.log('-----')
  console.log(res)
})





