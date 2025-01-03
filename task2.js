//reduce с помощью рекурсии

function reducing(arr,start,func) {
    if (arr.length == 0) {
       return start;
    }
    else if (arr.length == 1) {
       return arr[0];
    }
    else {
      return func(start, arr[arr.length-1]) + reducing(arr.slice(0, arr.length -1),start,func);
   }
  }