// 设计一个函数，确保在所有任务结束后，执行cb。同时只能 limit 个任务同步执行

const limit = 6
const taskList = Array.from(new Array(15), () => Promise.resolve(1))
const cb = () => { console.log('all cbs completed') }

const queue = []
let length = limit

function runTask(tasks, limit, callback) {
  for (let index = 0; index < limit; index++) {
    queue.splice(index, 1, tasks[index].then(val => {
      console.log(val, index)
      myThen(tasks, index, callback)
    }))
  }
}
function myThen(tasks, index, callback) {
  let item
  if (tasks.length > 6) {
    item = tasks.pop()
    queue.splice(index, 1, item.then(val => {
      console.log(val, index)
      myThen(tasks, index, callback)
    }))
  } else {
    length--
    // console.log(length)
    if (length === 0) {
      callback()
    }
  }
}


runTask(taskList, limit, cb)