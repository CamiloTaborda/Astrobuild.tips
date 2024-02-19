module.exports = {
    semi: true,
    sigleQuote: false,
    tabWidth: 2,
    useTabs: [
        require("prettier-plugin-astro")
    ],
    overrides: [
        {
            files:  "**/*astro",
            options: {
                parser: "astro",
            },
        },
    ],
};