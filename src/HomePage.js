// Import Javascript files/modules
import clearContent from "./index.js";
import MenuPage from "./MenuPage.js";

// Import assets used
import coffeeTable from "./assets/coffee-image.jpg";
import yodaImg from "./assets/yoda.png";
import akiraImg from "./assets/akira.jpg";
import dababyImg from "./assets/dababy.jpg";

export default (() => {

    function load() {
        clearContent();
        displayHomepage();
        window.scrollTo({
            top: 1,
            behavior: 'smooth',
        });
    }

    function displayHomepage() {
        const content = document.getElementById("content");

        // Creating the image
        const coffeeImg = new Image();
        coffeeImg.src = coffeeTable;
        coffeeImg.alt = "image of two coffee cups on a table";

        // Creating the slogan
        const slogan = document.createElement("div");
        slogan.id = "slogan";
        slogan.append("Koppee is good coffee, or whatever slogan a coffee shop has...");

        // Creating the testimonial section
        const testimonialSection = document.createElement("div");
        testimonialSection.id = "testimonial-section";

        const testimonialHeader = document.createElement("p");
        testimonialHeader.textContent = "Check out what our customers have to say";

        const testimonials = document.createElement("div");
        testimonials.id = "testimonials";

        function createTestimony(testimonyObj) {
            const testimony = document.createElement("div");
            testimony.classList.add("testimony");

            const image = new Image();
            image.src = testimonyObj.imgSrc;
            image.alt = testimonyObj.imgAlt;
            image.height = "75";

            const text = document.createElement("div");
            text.classList.add("text");

            const quote = document.createElement("p");
            quote.classList.add("quote");
            quote.textContent = testimonyObj.quote;

            const author = document.createElement("p");
            author.classList.add("person");
            author.textContent = testimonyObj.name;

            text.append(quote, author);

            testimony.append(image, text);

            return testimony;
        }

        const yodaInfo = {
            name: "Yoda probably...",
            quote: "Mmm, best coffee Kopee has...",
            imgSrc: yodaImg,
            imgAlt: "yoda",
        }
        const yodaTestimony = createTestimony(yodaInfo);

        const akiraInfo = {
            name: "My dog",
            quote: "Woof Woof!",
            imgSrc: akiraImg,
            imgAlt: "a siberian husky",
        }
        const akiraTestimony = createTestimony(akiraInfo);
        
        const dababyInfo = {
            name: "Dababy???",
            quote: "LEZ GOOOO",
            imgSrc: dababyImg,
            imgAlt: "Dababy",
        }
        const dababyTestimony = createTestimony(dababyInfo);

        testimonials.append(yodaTestimony, akiraTestimony, dababyTestimony);

        testimonialSection.append(testimonialHeader, testimonials);

        // Creating the "check our menu" button
        const menuBtn = document.createElement("button");
        menuBtn.id = "home-menu";
        menuBtn.textContent = "Check out our menu";
        menuBtn.onclick = MenuPage.load;

        // Putting it all together
        content.append(coffeeImg, slogan, testimonialSection, menuBtn);

    }

    return { load };

})();