module.exports = {
    darkMode: false,
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
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
