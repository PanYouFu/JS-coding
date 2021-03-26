var arr = [3, 1, 4, 6, 5, 7, 2];

function quickSort(arr) {
	if(arr.length == 0) {
		return []; // 返回空数组
	}
	var cIndex = Math.floor(arr.length / 2);
	var c = arr.splice(cIndex, 1);
	var l = [];
	var r = [];
	for (var i = 0; i < arr.length; i++) {
		if(arr[i] < c) {
			l.push(arr[i]);
		} else {
			r.push(arr[i]);
		}
	}
	return quickSort(l).concat(c, quickSort(r));
}

console.log(quickSort(arr));

var arr = [5, 6, 3, 1, 8, 7, 2, 4];

function bubbleSort(arr) {
	for (var i = 0; i < arr.length - 1; i++) {
		for(var j = 0; j < arr.length - i - 1; j++) {
			if(arr[j + 1] < arr[j]) {
				var temp;
				temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
	return arr;
}

console.log(bubbleSort(arr));

function recursionFlat(ary = []) {
    const res = []
    ary.forEach(item => {
      if (Array.isArray(item)) {
        res.push(...recursionFlat(item))
      } else {
        res.push(item)
      }
    })
    return res
  }