import clearContent from "./index.js";

export default (() => {

    function load() {
        clearContent();
        displayMenuPage();
        window.scrollTo({
            top: 1,
            behavior: 'smooth',
        });
    }

    function displayMenuPage() {
        const content = document.getElementById("content");

        const menuPage = document.createElement("div");
        menuPage.id = "menu-page";
        menuPage.classList.add("page");

        const pageTitle = document.createElement("p");
        pageTitle.classList.add("page-title");
        pageTitle.textContent = "Menu";

        menuPage.append(pageTitle);

        content.append(menuPage);

    }

    return { load };

})();