// 若 n 秒内事件被触发，则重新计时
// 例：搜索框搜索
function debounce(fn) {
  let timeout = null
  return function() {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      fn.apply(this, arguments)
    }, 500)
  }
}

function search(name) {
  alert(`${name} is searching-- ${testIpt.value}`)
}
const ipt = document.getElementById('ipt')
const testIpt = document.getElementById('ipt')
testIpt.addEventListener('input', debounce(search).bind(this, 'pkx')) // 使用bind传参