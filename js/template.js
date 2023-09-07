const head = document.querySelector("#header-templater");
const foot = document.querySelector("#footer-templater");


const urlHtmlArray = (window.location.href).split("/");
const urlHtml = urlHtmlArray[urlHtmlArray.length - 1];
let fullHead;
let smallHead;

switch(urlHtml) {
    case "index.html":
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
      `

foot.innerHTML = `
    <div id="footer-container">
        <p>Here's my footer</p>
    </div>
    `
