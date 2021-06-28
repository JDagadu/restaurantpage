import {buildHomePage,elt} from './homepagebuilder';
import {buildMenuPage} from './menupagebuilder.js';
import {buildAboutPage} from './aboutpagebuilder.js';
import logo from './images/hunter.png';
import './css/homepage.css';
import './css/menupage.css';
import './css/aboutpage.css';

document.body.appendChild(elt('div',{id:'content'}));

// let socialsarr=[
//     {name:"Facebook",
//     url:"#"},
//     {name:"Instagram",
//     url:"#"},
//     {name:"Twitter",
//     url:"#"}
// ]

let content = document.getElementById('content');
buildPage("home",content);
function buildHeader(){
    return elt("header",{className:"topheader"},
         elt("div",{className:"menu-box"},
                 elt("ul",{className:"menu-list"},
                         elt("li",{className:"menu-list-item",id:"home-item"},
                                 elt("a",{onclick(){buildPage("home",content)},className:"menu-list-item-link",id:"home-link",href:"#"},"home")),
                         elt("li",{className:"menu-list-item",id:"foodmenu-item"},
                                 elt("a",{onclick(){buildPage("menu",content)},className:"menu-list-item-link",id:"menu-link",href:"#"},"menu")),
                         elt("li",{className:"menu-list-item",id:"about-item"},
                                 elt("a",{onclick(){buildPage("about",content)},className:"menu-list-item-link",id:"about-link",href:"#"},"about"))),
                 elt('img',{className:"restaurant-logo",src:logo})))
 
 }
 function buildFooter(){
    return elt("footer",{className:"footer"},
                    elt("div",{className:"socialsdiv"},
                            buildSocialItem("Facebook","#"),"|",buildSocialItem("Instagram","#"),"|",buildSocialItem("Twitter","#")));
}
function buildSocialItem(name,url){
    return elt("a",{className:"socialitem",href:url},name);
}

function buildPage(page,context){
    context.innerHTML='';
    context.appendChild(buildHeader());
    if(page == "home") buildHomePage(context);
    if(page == "menu") buildMenuPage(context);
    if(page == "about") buildAboutPage(context);
    context.appendChild(buildFooter());
}

export {buildPage}
// export {buildPage}
// function initializePage(){
//     content.appendChild(buildHeader());
//     buildHomePage(content);
    
// }




// function clickme(){
//     console.log('clicked')
// }


                                        // document.querySelector('input').onclick=function(){alert('hi')}

                                            // elt("label", {}, "Your name: ", elt("input", {
                                            //     type: "text",
                                            //     value: name,
                                            //     onchange(event) {
                                            //       dispatch({type: "setUser", user: event.target.value});
                                            //     }
                                            //   }));