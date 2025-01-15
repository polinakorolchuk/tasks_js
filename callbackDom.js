//Реализуйте функцию, которая исполнит callback для всех элементов определенной ветви DOM-дерева.

function forEachDom(html_elem, func) {
    if (typeof func !== 'function') return;

    if (html_elem.nodeType === Node.ELEMENT_NODE && html_elem.textContent.trim() !== '') {
        func(html_elem);
    }

    Array.from(html_elem.children).forEach(child => forEachDom(child, func));
}

var fn = function(elem) {

    let number = parseFloat(elem.textContent.trim());
    if (!isNaN(number)) {
        elem.textContent = (number ** 2).toString();
    }
};

document.querySelectorAll('.elem').forEach(fn);



