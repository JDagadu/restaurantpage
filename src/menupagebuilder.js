import {elt} from './domelementbuilder.js'

let menuitemsbreakfast = [
    {title:"Buttermilk Flapjacks",
    description:"Two flapjacks served with molasses and our signature sassafras-infused whipped cream. Fresh fruit additional $4."},
    {title:"Buttermilk Flapjacks",
    description:"Two flapjacks served with molasses and our signature sassafras-infused whipped cream. Fresh fruit additional $4."},
    {title:"Buttermilk Flapjacks",
    description:"Two flapjacks served with molasses and our signature sassafras-infused whipped cream. Fresh fruit additional $4."},
    {title:"Buttermilk Flapjacks",
    description:"Two flapjacks served with molasses and our signature sassafras-infused whipped cream. Fresh fruit additional $4."},
    {title:"Buttermilk Flapjacks",
    description:"Two flapjacks served with molasses and our signature sassafras-infused whipped cream. Fresh fruit additional $4."},
    {title:"Buttermilk Flapjacks",
    description:"Two flapjacks served with molasses and our signature sassafras-infused whipped cream. Fresh fruit additional $4."},
    {title:"Buttermilk Flapjacks",
    description:"Two flapjacks served with molasses and our signature sassafras-infused whipped cream. Fresh fruit additional $4."}
]
let menuitemslunch = [
    {title:"Buttermilk Flapjacks",
    description:"Two flapjacks served with molasses and our signature sassafras-infused whipped cream. Fresh fruit additional $4."},
    {title:"Buttermilk Flapjacks",
    description:"Two flapjacks served with molasses and our signature sassafras-infused whipped cream. Fresh fruit additional $4."},
    {title:"Buttermilk Flapjacks",
    description:"Two flapjacks served with molasses and our signature sassafras-infused whipped cream. Fresh fruit additional $4."},
    {title:"Buttermilk Flapjacks",
    description:"Two flapjacks served with molasses and our signature sassafras-infused whipped cream. Fresh fruit additional $4."},
    {title:"Buttermilk Flapjacks",
    description:"Two flapjacks served with molasses and our signature sassafras-infused whipped cream. Fresh fruit additional $4."},
    {title:"Buttermilk Flapjacks",
    description:"Two flapjacks served with molasses and our signature sassafras-infused whipped cream. Fresh fruit additional $4."},
    {title:"Buttermilk Flapjacks",
    description:"Two flapjacks served with molasses and our signature sassafras-infused whipped cream. Fresh fruit additional $4."}
]
let menuitemsdinner = [
    {title:"Buttermilk Flapjacks",
    description:"Two flapjacks served with molasses and our signature sassafras-infused whipped cream. Fresh fruit additional $4."},
    {title:"Buttermilk Flapjacks",
    description:"Two flapjacks served with molasses and our signature sassafras-infused whipped cream. Fresh fruit additional $4."},
    {title:"Buttermilk Flapjacks",
    description:"Two flapjacks served with molasses and our signature sassafras-infused whipped cream. Fresh fruit additional $4."},
    {title:"Buttermilk Flapjacks",
    description:"Two flapjacks served with molasses and our signature sassafras-infused whipped cream. Fresh fruit additional $4."},
    {title:"Buttermilk Flapjacks",
    description:"Two flapjacks served with molasses and our signature sassafras-infused whipped cream. Fresh fruit additional $4."},
    {title:"Buttermilk Flapjacks",
    description:"Two flapjacks served with molasses and our signature sassafras-infused whipped cream. Fresh fruit additional $4."},
    {title:"Buttermilk Flapjacks",
    description:"Two flapjacks served with molasses and our signature sassafras-infused whipped cream. Fresh fruit additional $4."}
]
let menuitemsdrinks= [
    {title:"Buttermilk Flapjacks",
    description:"Two flapjacks served with molasses and our signature sassafras-infused whipped cream. Fresh fruit additional $4."},
    {title:"Buttermilk Flapjacks",
    description:"Two flapjacks served with molasses and our signature sassafras-infused whipped cream. Fresh fruit additional $4."},
    {title:"Buttermilk Flapjacks",
    description:"Two flapjacks served with molasses and our signature sassafras-infused whipped cream. Fresh fruit additional $4."},
    {title:"Buttermilk Flapjacks",
    description:"Two flapjacks served with molasses and our signature sassafras-infused whipped cream. Fresh fruit additional $4."},
    {title:"Buttermilk Flapjacks",
    description:"Two flapjacks served with molasses and our signature sassafras-infused whipped cream. Fresh fruit additional $4."},
    {title:"Buttermilk Flapjacks",
    description:"Two flapjacks served with molasses and our signature sassafras-infused whipped cream. Fresh fruit additional $4."},
    {title:"Buttermilk Flapjacks",
    description:"Two flapjacks served with molasses and our signature sassafras-infused whipped cream. Fresh fruit additional $4."}
]

function buildMenuPage(content){
    
    content.appendChild(buildMenuItem(menuitemsbreakfast,buildTimeOfDayMenuDiv,"breakfast","Breakfast — Served daily from 7 – 11 am."));
    content.appendChild(buildMenuItem(menuitemslunch,buildTimeOfDayMenuDiv,"lunch","Lunch — Served daily from 12 – 4 pm."));
    content.appendChild(buildMenuItem(menuitemsdinner,buildTimeOfDayMenuDiv,"dinner","Dinner — Served daily from 6 till close."));
    content.appendChild(buildMenuItem(menuitemsdrinks,buildTimeOfDayMenuDiv,"drinks","Drinks — Served all day."));
}

function buildTimeOfDayMenuDiv(classn,title,arrmenuitems){
    return elt("section",{className:`menublock ${classn}`},
            elt("div",{className:"titlediv"},
                    elt("h3",{className:"titleheading"},`${title}`),
                    elt("hr"),
                    elt("div",{className:"menulistdiv"},...arrmenuitems)))
}

function buildMenuItem(menuitemsarr,buildtimeofday,classn,title){
    return buildtimeofday(classn,title, menuitemsarr.map((element)=>{
        return elt("div",{className:"foodmenuitemdivmenu"},
                 elt("h3",{className:"foodmenuitemtitle"},element.title),
                 elt("p",{className:"foodmenuitemdesc"},element.description))
                 
     }))
    
}

export {buildMenuPage} 