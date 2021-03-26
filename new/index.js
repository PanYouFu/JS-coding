// new 操作符
// 创建了一个全新的对象。
// 这个对象会被执行[[Prototype]]（也就是__proto__）链接
// 通过new创建的每个对象将最终被[[Prototype]]链接到这个函数的prototype对象上
// 如果函数没有返回对象类型Object(包含Functoin, Array, Date, RegExg, Error)，那么new表达式中的函数调用会自动返回这个新的对象

