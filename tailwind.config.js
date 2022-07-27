/** @type {import('tailwindcss').Config} */ 
module.exports = {
    darkMode: "",
    content: [
        "./storage/framework/views/*.php",
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
    ],
    theme: {
        extend: {
            fontFamily: {
                montserrat: ["Montserrat"],
            },
            colors: {
                "primary-color": "#16a085",
                "secondary-color": "#1abc9c",
                "footer-color": "#576574",
                "subfooter-color": "#222f3e",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
