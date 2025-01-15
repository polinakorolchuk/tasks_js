//Реализуйте функцию поиска пересечения двух массивов.

function intersection(a, b) {
    return a.filter(item => b.includes(item));
  }
  
  const first = [1, 2, 3, 4];
  const second = [3, 4, 5, 6];
  
  console.log(intersection(first, second));
  
