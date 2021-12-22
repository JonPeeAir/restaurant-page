// import Javascript files/modules
import HomePage from "./HomePage.js";
import MenuPage from "./MenuPage.js";
import AboutPage from "./AboutPage.js"; 
import ContactPage from "./ContactPage.js";

// import CSS stylesheets
import "./styles.css";

function setupNavButtons() {
    const logo = document.getElementById("logo");
    const navToMenuBtn = document.getElementById("nav-menu");
    const navToAboutBtn = document.getElementById("nav-about");
    const navToContactBtn = document.getElementById("nav-contact");

    logo.onclick = HomePage.load;
    navToMenuBtn.onclick = MenuPage.load;
    navToAboutBtn.onclick = AboutPage.load;
    navToContactBtn.onclick = ContactPage.load;
}


HomePage.load();
setupNavButtons();


export default function clearContent() {
    const contentDiv = document.getElementById("content");
    while(contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.firstChild);
    }
}