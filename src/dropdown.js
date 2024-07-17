const { default: createToggle } = require("./toggle");
const { default: createDropdown } = require("./create-dropdown");

document.addEventListener("DOMContentLoaded", () => {
    createDropdown();
    createToggle();
});
