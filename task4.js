//Напишите функцию Sleep (ms), останавливающую выполнение async-функции на заданный промежуток времени.

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function delayedGreeting() {
    console.log("Hello");
    await sleep(2000);
    console.log("World");
  }
  
  delayedGreeting();
  console.log("Bye");