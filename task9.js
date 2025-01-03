//Реализуйте функцию преобразования URL query строки в JSON.

function queryObjectify(queryString) {
    const result = {};

    queryString.split('&').forEach(param => {
        const [key, value] = param.split('=');
        const keys = key.split('.'); 

        let temp = result;

        keys.forEach((k, index) => {
            if (index === keys.length - 1) {
                temp[k] = decodeURIComponent(value); 
            } else {
                temp[k] = temp[k] || {};
                temp = temp[k]; 
            }
        });
    });

    return result;
}

const inData = "user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue";
console.log(queryObjectify(inData));

