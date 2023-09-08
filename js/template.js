const head = document.querySelector("#header-templater");
const foot = document.querySelector("#footer-templater");


const urlHtmlArray = (window.location.href).split("/");
const urlHtml = urlHtmlArray[urlHtmlArray.length - 1];
let fullHead;
let smallHead;
let spacePic = Math.floor(Math.random()* 5);// n of pics in images folder; no backend lol
console.log(spacePic)

switch(urlHtml) {
    case "home.html":
        fullHead = "Chris Moulton Dev";
        smallHead = "CM Dev";
        break;
    case "contact.html":
        fullHead = "Contact Me";
        smallHead = "Contact";
        break;
    case "projects.html":
        fullHead = "Projects";
        smallHead = "Projects";
        break;
    case "services.html":
        fullHead = "Services";
        smallHead = "Services";
        break;
}

head.innerHTML = `
<div id="header-container">
        <div id="header-text-div">
          <h1 class="full-header head">${fullHead}</h1>
          <h1 class="small-header head">${smallHead}</h1>
        </div>
        <div class="menu-container">
          <h3 id="menu-btn-text">More</h3>
        </div>
      </div>
      <div id="top-img-box">
      <img id="space-img" src="images/deep-field-${spacePic}.png">
    </div>
      `

foot.innerHTML = `
    <div id="footer-container">
        <p>Chris Moulton 2023</p>
    </div>
    `
