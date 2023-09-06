const menuBtn = document.querySelector('.menu-container');
const menuBtnText = document.querySelector('#menu-btn-text');

const headerText = document.querySelector("#header-text-div");
const headerBox = document.querySelector("#header-container");

let exitBtnMove = document.createElement("h1");

menuBtn.addEventListener("click", () => {
    let menuItems = ["Home", "Services", "Projects", "Contact"]
    let menuList = document.createElement("ul")//create ul out of array

    menuItems.forEach(itemText => {
        const menuItem = document.createElement("li");
        
        const anchor = document.createElement("a");
        anchor.textContent = itemText;
        anchor.classList.add("menu-text-style")
        anchor.href = itemText.toLowerCase() + ".html";
        if (itemText == "Home") {
            anchor.href = "index.html"
        }
        anchor.addEventListener("click", (event) => {
            event.stopPropagation();
        })
        console.log(anchor.href)
        menuItem.textContent = "";
        menuItem.appendChild(anchor);
        menuList.appendChild(menuItem);


    })//build list items and append

    menuBtn.innerHTML = "";
    menuBtn.appendChild(menuList);
    //append the list, and remove original text

    menuList.classList.add("ul-menu");
    menuBtn.classList.add("menu-open");


    if (menuBtn.classList.contains("menu-move") && menuBtn.classList.contains("menu-open")) {
        
        exitBtnMove.innerText = "X";
        exitBtnMove.classList.add("exit-btn-open")
        menuBtn.insertAdjacentElement("afterend", exitBtnMove);
        console.log("open and moved")
        exitBtnMove.addEventListener("click", () => {
            menuBtn.classList.remove("menu-open");
            menuList.remove()
            menuBtn.appendChild(menuBtnText)
            document.querySelector(".full-header").innerText = "Chris Moulton Dev"
            document.querySelector(".small-header").innerText = "CM Dev"
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
        
        menuList.remove()
        if (document.contains(exitBtnMove)){
        exitBtnMove.remove()}
        menuBtn.appendChild(menuBtnText)
        document.querySelector(".full-header").innerText = "Chris Moulton Dev"
        document.querySelector(".small-header").innerText = "CM Dev"
        document.querySelector(".full-header").classList.remove("exit-btn")
        document.querySelector(".small-header").classList.remove("exit-btn")
    })//menu exiting behaviour, remove added classes and replace menu text
    })
});

const options = {
    root: null, // The viewport
    rootMargin: '0px', // Margin around the root
    threshold: .6, // When 99% of the element is visible
  };
  
const observer = new IntersectionObserver(callback, options);

function callback(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            menuBtn.classList.remove("menu-move");
            headerText.classList.remove("hide-text");
            // if (menuBtn.classList.contains("menu-open")){
            //     menuBtn.classList.remove("menu-open");
            //     menuBtn.appendChild(menuBtnText)
            // }
        
        } else {
            menuBtn.classList.add("menu-move");
            headerText.classList.add("hide-text");
        //     if (menuBtn.classList.contains("menu-open")){
            
        // }
    }
})};



observer.observe(headerBox);

