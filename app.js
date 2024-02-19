import { homePage, aboutPage, notFoundPage } from "./components.js";

const app = () => {
    const routes = {
        "/": homePage,
        "/about": aboutPage,
        "/404": notFoundPage,
    };

    function navigate(routes) {
        function renderView() {
            const path =
                window.location.hash.replace("#", "") || "/";
            const viewFunction = routes[path] || routes["/404"];
            const root = document.getElementById("root");

            // Clear the root element
            root.innerHTML = "";
            root.appendChild(viewFunction());
        }

        // Render the initial view and listen for changes
        window.addEventListener("hashchange", renderView);
        renderView();

        return {
            refresh: renderView,
        };
    }

    navigate(routes);
    // Add the navbar to the page
    document.getElementById("root").prepend(createNavBar());

    function createNavBar() {
        const navBar = nav(
            a("Inicio").setAttr("href", "#/"),
            a("Acerca De").setAttr("href", "#/about")
        );

        function updateActiveLink() {
            const currentHash = window.location.hash || "#/";
            document.querySelectorAll("nav a").forEach((link) => {
                link.classList.toggle(
                    "active",
                    link.getAttribute("href") === currentHash
                );
            });
        }

        window.addEventListener("hashchange", updateActiveLink);
        // Set the active link when the page loads
        updateActiveLink();

        return navBar;
    }
}

export default app;