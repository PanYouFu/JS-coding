// 首先需要一个构造函数
// options 给一个初始值
function Mvvm(options = {}) {
  // vm.$options Vue上是将所有属性挂载到上面
  // 所以我们也同样实现,将所有属性挂载到了$options
  this.$options = options
  
  // data 也要从options中拿出来，方便后面获取 this.data
  this._data = options.data

  // 数据劫持
  let data = this._data
  observe(data)
}
// 为什么要数据劫持：方便在获取值，和设置值时对数据进行操作
// 1、观察对象，给对象增加Object.defineProperty
// 2、vue特点是不能新增不存在的属性 不存在的属性没有get和set
// 3、深度响应 因为每次赋予一个新对象时会给这个新对象增加defineProperty(数据劫持)

function observe(data) {
  // 判断是否为对象，否，则return出
  if (!data || typeof data !== 'object') return 
  new Observe(data)
}

// 数据劫持主要逻辑
function Observe(data) {
  // 数据劫持就是给对象增加 get  set
  for (const key in data) {
    let val = data[key]
    // 取值后进行递归，应对对象深层嵌套的情况
    observe(val)
    
    // 拿到非对象（非引用类型）的值，添加set，get
    // 可枚举属性默认为 true
    // writable 与 get、set不可同时设置
    Object.defineProperty(data, key, {
      enumerable: true,
      get: function () {
        return val
      },
      set: function (newVal) {
        // if (val === newVal) return
        val = newVal  // 如果以后再获取值(get)的时候，将刚才设置的值再返回去
        observe(newVal) // 当设置为新值后，也需要把新值再去定义成属性，此步骤是为了考虑newVal为引用类型时，为了给newVal的属性也增加get,set
      }
    })
  }
}