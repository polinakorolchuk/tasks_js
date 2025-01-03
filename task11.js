//Реализуйте функцию/класс для генерации HTML.
const HTMLConstruct = new Proxy({}, {
    get(target, tag) {
        
      return function (...args) {

        const content = args.map(arg => arg).join('');
        return `<${tag}>${content}</${tag}>`;

      };
    }
  });
  
  console.log(HTMLConstruct.span('Текст')); 
  console.log(HTMLConstruct.div(HTMLConstruct.span('Текст3'))); 
  console.log(HTMLConstruct.div(HTMLConstruct.p(HTMLConstruct.span('Текст1')), HTMLConstruct.div(HTMLConstruct.span('Текст2')))); 
  