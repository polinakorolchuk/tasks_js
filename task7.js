//Реализуйте функцию, которая исполнит callback для всех элементов определенной ветви DOM-дерева.

function forEachDom(html_elem, func) {
    if (typeof func !== 'function') return;

    func(html_elem);
    Array.from(html_elem.children).forEach(child => forEachDom(child, func)); 
}

var fn = function(elem) {
    if (elem.textContent) {
        elem.textContent = elem.textContent ** 2;
    }
};

forEachDom(document.body, fn);
