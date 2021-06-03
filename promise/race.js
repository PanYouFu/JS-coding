function test(str, time) {
  return new Promise(resolve =>{
    setTimeout(() => {
      resolve(str)
    }, time)
  })
}
let p1 = test("p1", 5000)
let p2 = test("p2", 2000)
let p3 = test("p3", 3000)
let pArr = [p1, p2, p3]

// Promise.race(pArr).then(res => {
//   console.log('race-res--', res)
// })

Promise.prototype.myRace = function(promisesArr) {
  return new Promise((resolve) => {
    let result = null
    promisesArr.forEach(p => {
      Promise.resolve(p).then(res => {
        if (result) return
        result = res
        resolve(result)
      })
    })
  }, (reject) => {
    return reject(err)
  })
}

Promise.prototype.myRace(pArr).then(res => {
  console.log('race-res--', res)
})