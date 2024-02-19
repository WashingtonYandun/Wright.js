/**
 * Generates the home page component.
 * @returns {HTMLElement} The home page component.
 */
export const homePage = () => {
    return div(
        h1("Homepage"),
        p(
            "Welcome to my SPA. Please use the navbar to navigate."
        ),
    );
}

/**
 * Generates the about page content.
 * 
 * @returns {HTMLElement} The about page content.
 */
export const aboutPage = () => {
    return div(
        h1("About Us"),
        p(
            "I am a web developer. I love to create software and learn new things."
        ),
        a("Go to my github").setAttr(
            "href",
            "https://github.com/WashingtonYandun"
        )
    );
}

/**
 * Renders the not found page.
 * @returns {HTMLElement} The rendered not found page.
 */
export const notFoundPage = () => {
    return div(h1("404"), p("Page not found."));
}

/**
 * Represents a navigation bar.
 * @type {HTMLElement}
 */
export const navBar = nav(
    a("Home").setAttr("href", "#/"),
    a("About us").setAttr("href", "#/about")
);