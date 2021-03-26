const limit = 6
const taskList = Array.from(new Array(15), () => Promise.resolve(1))
const cb = () => { console.log('all cbs completed') }

const queue = []

function updateQueue(idx) {
  queue.forEach((item, index) => {
    if (idx === item.idx) {
      queue.pop(index)
      queue.push(limit ++)
    }
  })
}

function runTask(tasks, limit, callback) {
  
  for (let index = 0; index < limit + 1; index++) {
    queue.push({
      idx: index,
      task: tasks[index].then((val) => {
        console.log('val---', val)
        updateQueue(index)
      })
    })
  }
}


runTask(taskList, limit, cb)