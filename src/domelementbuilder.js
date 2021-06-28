function elt(name,attrs,...children){
    let element;
    element = document.createElement(name);
    if(attrs) Object.assign(element,attrs)

    for(let child of children){
        if (typeof child !="string")
        element.appendChild(child);
        else element.appendChild(document.createTextNode(child));
    }

    return element;
}

export {elt};