import {elt} from './domelementbuilder';
import {buildPage} from './index.js';

import featureimg from './images/featureimg.jpg'


// const myIcon = new Icon();

let menuitemsarr = [
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

let reviewitemsarr=[
    {author:"FOOD MAGAZINE",
    description:   `"From the sawdust on the ground to the mounted taxidermy on the walls, Hunter is where modern Texans go to relive the turn of the 19th century. Their dishes are simple, hearty, fresh, and all-around delicious.”`},
    {author:"FOOD MAGAZINE",
    description:   `"From the sawdust on the ground to the mounted taxidermy on the walls, Hunter is where modern Texans go to relive the turn of the 19th century. Their dishes are simple, hearty, fresh, and all-around delicious.”`},
    {author:"FOOD MAGAZINE",
    description:   `"From the sawdust on the ground to the mounted taxidermy on the walls, Hunter is where modern Texans go to relive the turn of the 19th century. Their dishes are simple, hearty, fresh, and all-around delicious.”`},
    {author:"FOOD MAGAZINE",
    description:   `"From the sawdust on the ground to the mounted taxidermy on the walls, Hunter is where modern Texans go to relive the turn of the 19th century. Their dishes are simple, hearty, fresh, and all-around delicious.”`},
    
];


// let content = document.getElementById('content');

function buildHomePage(content){
    // content.appendChild(buildHeader());
    content.appendChild(buildFeatureImage());
    content.appendChild(buildFeatureQuote());
    content.appendChild(buildMenuSection(content));
    content.appendChild(buildReviewSection());
    // content.appendChild(buildFooter());
    console.log(document.getElementsByTagName('img'));


    // content.appendChild(elt("div", {className: "game"}, 
    // elt("button",
    //             {type:"button",
    //             onclick() {
    //                 alert();
    //               }
    //             },"click me")))

    // return elt("div", {class: "game"}, 
    // elt("button",
    //             {type:"button",
    //             onclick() {
    //                 alert();
    //               }
    //             },"click me"))

}



function buildFeatureImage(){
    
return elt("figure",{className: "featurefigure"},
                elt("img",{className:"featureimg", src:featureimg,alt:"food image"}))
}
function buildFeatureQuote(){
    
    return elt("section",{className: "featurequotesection"},
                    elt("div",{className: "featurequotediv"},
                    elt("p",{className:"featurequote"},"A collaboration between chef Dinah Blackburn and interior designer Lee Rainwater, Hunter is where East Austin returns to the Old West. Styled like the saloons of yore, here you can sip cactus wine and enjoy the robust taste of farm-to-table American fare without the frills.")))
}
function buildMenuSection(context){
    return elt("section",{className:"foodmenusection"},
                    elt("div",{className:"taglinediv"},
                            elt("h2",{className:"Menutagline"},"Some of Our Favorites —"),
                    elt ("div",{className:"foodmenuitemsdiv"},
                                    ...buildMenuItems(),
                                    elt("a",{onclick(){buildPage("menu",context)},className:"fullmenu", href:"#"},"View Our Full Menu —"))))
}
function buildMenuItems(){
return menuitemsarr.map((element)=>{
   return elt("div",{className:"foodmenuitemdiv"},
            elt("h3",{className:"foodmenuitemtitle"},element.title),
            elt("p",{className:"foodmenuitemdesc"},element.description));
            
})

}

function buildReviewSection(){
    return elt("section",{className:"reviewsection"},...buildReviewItem());
}
function buildReviewItem(){
    return reviewitemsarr.map((element)=>{
        return elt("div",{className:"reviewitemidv"},
                        elt("p",{className:"reviewdescription"},`${element.description}`),
                        elt("p",{className:"reviewauthor"},`- ${element.author}`));
    })
}

export {buildHomePage,elt}

