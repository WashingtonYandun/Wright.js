/**
 * Creates a new DOM element with the specified type and optional child elements.
 * 
 * @param {string} type - The type of the element to create.
 * @param {...(string|Node)} elements - The child elements to append to the created element.
 * @returns {Node} The newly created DOM element.
 */
function createElement(type, ...elements) {
    // Create a new DOM element with the specified type
    let node = document.createElement(type);

    // Append each child element to the parent node
    elements.forEach(element => {
        let child = typeof element === 'string' ? document.createTextNode(element) : element;
        node.appendChild(child);
    });

    // Add a method to set attributes and event listeners
    node.setAttr = function (attrName, attrValue) {
        this.setAttribute(attrName, attrValue);

        // Allow chaining
        return this;
    };

    // Add a method to set event listeners
    node.whenClicked = function (handler) {
        this.addEventListener('click', handler);

        // Allow chaining
        return this;
    };

    return node;
}


// Create a new DOM element with the specified type and optional child elements
const COMMON_ELEMENTS = ["canvas", "header", "h1", "h2", "h3", "a", "div", "p", "span", "button", "input", "img", "ul", "li", "ol", "form", "label", "section", "article", "aside", "footer", "nav", "main"];


// Create a new DOM element with the specified type and optional child elements
COMMON_ELEMENTS.forEach(element => {
    window[element] = (...elements) => createElement(element, ...elements);
});


/**
 * Creates an image element with the specified source.
 * 
 * @param {string} source - The source URL of the image.
 * @returns {HTMLElement} The created image element.
 */
function createImage(source) {
    return createElement("img").setAttr("src", source);
}

/**
 * Creates an input element of the specified type.
 * 
 * @param {string} inputType - The type of input element to create.
 * @returns {HTMLElement} The created input element.
 */
function createInput(inputType) {
    return createElement("input").setAttr("type", inputType);
}

/**
 * Creates a navigation system for routing between different views.
 * @param {Object} routes - An object containing routes and their corresponding view functions.
 * @returns {HTMLElement} - The container element for the view.
 */
function navigate(routes) {
    // Use a generic container for the view
    let view = container();

    function updateView() {
        let currentHash = window.location.hash.slice(1) || '/';

        // Fallback to a 404 route if the current hash is not defined
        let route = routes[currentHash] ? currentHash : '/404';
        console.assert(routes[route], "404 route must be defined");

        view.replaceChildren(routes[route]());

        return view;
    }

    // Initialize the view
    updateView();

    // Listen for hash changes
    window.onhashchange = updateView;

    // Provide a method to manually refresh the view
    view.update = updateView;

    // Return the view container
    return view;
}
