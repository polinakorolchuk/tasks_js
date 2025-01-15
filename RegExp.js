//Напишите функцию с RegExp для нахождения всех HTML-ссылок в строке.

function find(inputString) {

    const regex = /<a\s+(?:[^>]*?\s+)?href=["'](https?:\/\/(?:www\.)?[^"']+)["']/g;
    const links = [];
    let match;
  
    while ((match = regex.exec(inputString)) !== null) {
      links.push(match[1]); 
    }
  
    return links;
  }
  
  const htmlString = `
    <p>Ссылки с текстом:</p>
    <a href="https://firstlink.com">Первая</a>
    <a href="http://second-link.com">Вторая</a>
    <a href="https://www.thirdlink.com">Третья</a>
    <a href="http://www.last-link.com">Четвертая</a> 
  `;
  
  const links = find(htmlString);
  console.log(links); 