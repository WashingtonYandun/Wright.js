const homePage = () => {
    return div(
        h1("Homepage"),
        p(
            "Welcome to my SPA. Please use the navbar to navigate."
        )
    );
}

const aboutPage = () => {
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

const notFoundPage = () => {
    return div(h1("404"), p("Page not found."));
}

export { homePage, aboutPage, notFoundPage }