//WARNING: the messiest part, it has all of the menu and menu animation logic

const menuBtn = document.querySelector('.menu-container');
const menuBtnText = document.querySelector('#menu-btn-text');
const headerText = document.querySelector("#header-text-div");
const headerBox = document.querySelector("#header-container");
let exitBtnMove = document.createElement("h1");

const fullHeadText = document.querySelector(".full-header").innerText;
const smallHeadText = document.querySelector(".small-header").innerText;
//menu and heading interaction variables---------------------<

const textItems = document.querySelectorAll(".text");
console.log(textItems)
//main text animation variables

// This code adds an event listener to menuBtn, which, when clicked, dynamically 
// a navigation menu with items from the "menuItems" array and appends it to the button, 
// effectively replacing its original content, while also adding classes for styling to 
// the button and the generated menu.------------------------------------>
menuBtn.addEventListener("click", () => {
    let menuItems = ["Home", "Services", "Projects", "Contact"]
    let menuList = document.createElement("ul")//create ul out of array

    menuItems.forEach(itemText => {
        const menuItem = document.createElement("li");
        
        const anchor = document.createElement("a");
        anchor.textContent = itemText;
        anchor.classList.add("menu-text-style")
        anchor.href = itemText.toLowerCase() + ".html";
        
        anchor.addEventListener("click", (event) => {
            event.stopPropagation();
        })
        
        menuItem.textContent = "";
        menuItem.appendChild(anchor);
        menuList.appendChild(menuItem);


    })//build list items and append

    menuBtn.innerHTML = "";
    menuBtn.appendChild(menuList);
    //append the list, and remove original text

    menuList.classList.add("ul-menu");
    menuBtn.classList.add("menu-open");


//----------This code handles the behavior of a mobile menu button and exit buttons 
// in a web page's header. When the menuBtn has both the "menu-move" and "menu-open" classes, 
// it adds an "X" exit button and defines its click behavior. Additionally, it updates the content and classes 
// of various elements to accommodate the menu opening. When any element with the "exit-btn" class is clicked, 
// it reverts the header and menu to their initial states.--------------------------------------------->
    if (menuBtn.classList.contains("menu-move") && menuBtn.classList.contains("menu-open")) {
        
        exitBtnMove.innerText = "X";
        exitBtnMove.classList.add("exit-btn-open")
        menuBtn.insertAdjacentElement("afterend", exitBtnMove);
        exitBtnMove.addEventListener("click", () => {
            menuBtn.classList.remove("menu-open");
            menuList.remove()
            menuBtn.appendChild(menuBtnText)
            document.querySelector(".full-header").innerText = fullHeadText
            document.querySelector(".small-header").innerText = smallHeadText
            document.querySelector(".full-header").classList.remove("exit-btn")
            document.querySelector(".small-header").classList.remove("exit-btn")
            exitBtnMove.remove()
        });
    };


    document.querySelectorAll('.head').forEach((item) => {
        item.innerHTML = "X";
        item.classList.add("exit-btn");
    }) 
    //class changes to accomodate menu opening and heading removal
    
    document.querySelectorAll(".exit-btn").forEach((item) => {
        item.addEventListener("click", () => {
        
        menuBtn.classList.remove("menu-open");
        
        menuList.remove();
        if (document.contains(exitBtnMove)){
        exitBtnMove.remove()};
        menuBtn.appendChild(menuBtnText);
        document.querySelector(".full-header").innerText = fullHead;
        document.querySelector(".small-header").innerText = smallHead;
        document.querySelector(".full-header").classList.remove("exit-btn");
        document.querySelector(".small-header").classList.remove("exit-btn");
    })//menu exiting behaviour, remove added classes and replace menu text
    })
});

// observer for all animations, COMMENT WHEN DONE!!

const options = {
    root: null, // The viewport
    rootMargin: '0px', // Margin around the root
    threshold: .6, // When 99% of the element is visible
  };
  
const menuObserver = new IntersectionObserver(menuCallback, options);
function menuCallback(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            menuBtn.classList.remove("menu-move");
            headerText.classList.remove("hide-text");
            exitBtnMove.remove();
        
        } else {
            menuBtn.classList.add("menu-move");
            headerText.classList.add("hide-text");
    }

})};

const textObserver = new IntersectionObserver(textCallback, options);
function textCallback(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("text-animate")
        
        } else {
            
    }

})};

menuObserver.observe(headerBox);
textItems.forEach(item=>{
    textObserver.observe(item); 
})
const scrollFadeImg = document.querySelector("#space-img");
window.addEventListener("scroll", () => {
    let scrollPos = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *100
    scrollFadeImg.style = `opacity: ${1 - scrollPos*.01}`;
});
const overlay = document.querySelector(".text-overlay");
const headFrame = document.querySelector("#header-templater");
let overlayHeight = overlay.clientHeight;
let headFrameHeight = headFrame.clientHeight;
console.log(overlayHeight, headFrameHeight);

let footAdjuster = 800 + overlayHeight - 200;
console.log(footAdjuster)
headFrame.style.height = `${footAdjuster}px`