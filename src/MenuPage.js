import clearContent from "./index.js";

export default (() => {

    function load() {
        clearContent();
    }

    return { load };

})();