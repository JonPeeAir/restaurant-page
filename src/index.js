import HomePage from "./HomePage.js";
import MenuPage from "./MenuPage.js";
import AboutPage from "./AboutPage.js"; 
import ContactPage from "./ContactPage.js";

const navBar = (() => {
    const navBar = document.createElement("div");
    navBar.id = "navbar";
    navBar.classList.add("navbar");

    // Creating the Logo
    const logo = document.createElement("div");
    logo.id = "logo";
    logo.onclick = HomePage.load;

    const logoImg = new Image();
    logoImg.src = "./assets/coffee-logo.png";
    logoImg.alt = "company logo";

    logo.appendChild(logoImg);
    logo.append("Kopee");


    // Creating the NavOptions
    const navOpts= document.createElement("div");
    navOpts.id = "nav-options";

    function createButtonTo(pageName, buttonOnClick) {
        const btn = document.createElement("button");
        btn.id = `${pageName}-navBtn`;
        btn.append(pageName[0].toUpperCase() + pageName.substring(1)); // capitalize first letter in the actual display
        btn.onclick = buttonOnClick;

        return btn;
    }

    const menuNavBtn = createButtonTo("menu", MenuPage.load);
    const aboutNavBtn = createButtonTo("about", AboutPage.load);
    const contactNavBtn = createButtonTo("contact", ContactPage.load);

    navOpts.append(menuNavBtn, aboutNavBtn, contactNavBtn);


    // Adding the logo and NavOptions to the NavBar
    navBar.append(logo, navOpts);

    return navBar;
})();

const contentDiv = (() => {
    const contentDiv = document.createElement("div");
    contentDiv.id = "content";

    return contentDiv;
})();

const footer = (() => {
    const footer = document.createElement("div");
    footer.id = "footer";

    // Creating the author label and link to The Odin Project
    const author = document.createElement("p");

    const linkToTOP = document.createElement("a");
    linkToTOP.href = "https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/restaurant-page";
    linkToTOP.target = "_blank";
    linkToTOP.append("TheOdinProject");

    author.append("JNPR @ ", linkToTOP);


    // Creating the link to github profile
    const githubContainer= document.createElement("div");
    githubContainer.id = "github-container";

    const githubProfileLink = document.createElement("a");
    githubProfileLink.href = "https://github.com/JonPeeAir";
    githubProfileLink.target = "_blank";

    const githubLogo = new Image();
    githubLogo.src = "./assets/github-logo.svg";
    githubLogo.alt = "github logo";

    githubProfileLink.appendChild(githubLogo);
    githubContainer.appendChild(githubProfileLink);


    // Creating credits to flaticon.com for the icons
    const credits = document.createElement("div");
    credits.classList.add("credits");

    const linkToFreepik = document.createElement("a");
    linkToFreepik.href = "https://www.freepik.com";
    linkToFreepik.title = "Freepik";
    linkToFreepik.append("Freepik");

    const linkToFlaticon = document.createElement("a");
    linkToFlaticon.href = "https://www.flaticon.com/";
    linkToFlaticon.title = "Flaticon";
    linkToFlaticon.append("www.flaticon.com");

    credits.append("Icons made by ", linkToFreepik, " from ", linkToFlaticon);


    // Putting it all together
    footer.append(author, githubContainer, credits);

    return footer;
})();


const body = document.querySelector("body");
body.append(navBar);
body.append(contentDiv);
body.append(footer);

HomePage.load();


export default function clearContent() {
    while(contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.firstChild);
    }
}