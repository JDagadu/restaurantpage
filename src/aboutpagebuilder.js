import {elt} from './domelementbuilder.js'

// let locationarr = []

function buildAboutPage(content){
    content.appendChild(elt("section",{className:"aboutsecion"},
    buildLocationItems("location"),
    buildTimeItems("hours"),
    buildContactItems("contacts")));
}

function buildLocationItems(classn){
    return elt("div",{className:classn},
        elt("h3",{className:"title"},"Location"),
        elt("p",{className:"desc"},"1st Tesano Crescent",elt("br"),"Accra, Ghana"))
    
}

function buildTimeItems(classn){
    return elt("div",{className:classn},
        elt("h3",{className:"title"},"Hours"),
        elt("p",{className:"desc"},"Tue – Thu, 8 am – 10 pm",elt("br"),"Fri – Sun, 8 am – 11 pm",elt("br"),"Closed Mondays"))
    
}

function buildContactItems(classn){
    return elt("div",{className:classn},
        elt("h3",{className:"title"},"Contact"),
        elt("p",{className:"desc"},"(233) 209 529 952",elt("br"),"jeffdagadu@gmail.com"))
    
}

export {buildAboutPage}