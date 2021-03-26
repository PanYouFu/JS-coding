// apply 是 Function 原型对象上的方法
Function.prototype.myApply = function (context) {
  // 此时 this 是getName方法
  // 在 context 上新增 fn 方法
  // 获取调用`myApply`的函数本身，用this获取，如果context不存在，则为window
  var context = context || window;
  var fn = Symbol();
  //获取传入的数组参数
  var args = arguments[1];

  if (args == undefined) { //没有传入参数直接执行
    // 执行这个函数
    context[fn]()
  } else {
    // 执行这个函数
    context[fn](...args);
  }
  // 从上下文中删除函数引用
  delete context.fn;
}


var obj ={
  name: "xb",
  getName: function(job, age){
    console.log(this.name);
  }
}

var me = {
  name: "axuebin"
}

obj.getName(); // xb 
obj.getName.myApply(me, ['H5', '25']); // axuebin