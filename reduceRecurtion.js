// Реализация reduce с помощью рекурсии
function reducing(arr, start, func) {

   if (arr.length === 0) {
       return start;
   }
   
   return reducing(arr.slice(1), func(start, arr[0]), func);
}

const arr = [1, 2, 3, 4];
const start = 0;
const func = (a, b) => a + b;

console.log(reducing(arr, start, func));
