const mix = require("laravel-mix");
const path = require("path");

mix.js("resources/js/app.js", "public/js")
    .alias({
        "@": path.join(__dirname, "resources/js"),
    })
    .vue()
    .postCss("resources/css/app.css", "public/css", [require("tailwindcss")]);
