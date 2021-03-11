// 鼠标移动时，监听事件若实时触发影响性能，故需要节流，一定时间后才触发
// 例：鼠标移动，每500ms后 再执行监听事件
function throttle(fn) {
  let canRun = true // 首次可以执行
  return function() {
    if (!canRun) return // 不能执行时，直接返回
    canRun = false // 若处于能执行时间，则将状态改为不可执行
    setTimeout(() => { // 等待500ms后，开始执行业务方法
      fn.apply(this, arguments) // 业务方法执行后，将canRun改为true
      canRun = true
    }, 500)
  }
}

function change(param) {
  console.log(`it has been ${param}`)
}
const box = document.getElementById('testBlock')
box.addEventListener('mousemove', throttle(change).bind(this, 'changed')) // 使用bind方法传出参数，bind方法返回的是一个新的函数，若需要立即执行，需要在后面加上括号