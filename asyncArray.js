//aсинхронный filter для array, где работает await

const isEven = async (num) => {
	return new Promise((resolve) => {
	  setTimeout(() => {
		resolve(num % 2 === 0);
	  }, 1000);
	});
  };

  const asyncFilter = async (arr, predicate) => {
	const results = await Promise.all(arr.map(predicate));
	return arr.filter((_v, index) => results[index]);
  };

  const numbers = [11, 87, 35, 12, 555, 60, 42];

  (async () => {
	const filteredNumbers = await asyncFilter(numbers, isEven);
	console.log(filteredNumbers); 
  })();
  