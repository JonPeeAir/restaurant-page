import clearContent from "./index.js";

export default (() => {

    function load() {
        clearContent();
        displayAboutPage();
        window.scrollTo({
            top: 1,
            behavior: 'smooth',
        });
    }

    function displayAboutPage() {
        const content = document.getElementById("content");

        const aboutPage = document.createElement("div");
        aboutPage.id = "about-page";
        aboutPage.classList.add("page");

        const pageTitle = document.createElement("p");
        pageTitle.classList.add("page-title");
        pageTitle.textContent = "About";

        aboutPage.append(pageTitle);

        content.append(aboutPage);

    }

    return { load };

})();