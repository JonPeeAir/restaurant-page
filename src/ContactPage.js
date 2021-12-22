import clearContent from "./index.js";

export default (() => {

    function load() {
        clearContent();
        displayContactPage();
        window.scrollTo({
            top: 1,
            behavior: 'smooth',
        });
    }

    function displayContactPage() {
        const content = document.getElementById("content");

        const contactPage = document.createElement("div");
        contactPage.id = "contact-page";
        contactPage.classList.add("page");

        const pageTitle = document.createElement("p");
        pageTitle.classList.add("page-title");
        pageTitle.textContent = "Contact";

        contactPage.append(pageTitle);

        content.append(contactPage);

    }

    return { load };

})();