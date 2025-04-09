class PortfolioNavBar extends HTMLElement {
    /**@type {string[]} */
    #pages = []

    constructor() {
        super()

        this.shadow = this.attachShadow({ mode: "closed" })
    }

    set pages(newPages) {
        this.#pages = [...newPages]
        this.#render()
    }

    #render() {

        //link the navbar.css stylesheet into the shadowroot
        const stylesheet = document.createElement("link")
        stylesheet.rel = "stylesheet"
        stylesheet.href = "../styles/navbar.css"
        this.shadow.appendChild(stylesheet)

        //define the root node
        const navBar = document.createElement("nav")

        const navList = document.createElement("ul")

        //for each of the pages, create an element in the list
        this.#pages.forEach(page => {
            const listElement = document.createElement("li")
            const pageLink = document.createElement("a")

            //the page "/" and "home mean the same thing"
            if (["/", "home"].includes(page.toLowerCase())) {
                pageLink.href = "/"
                pageLink.textContent = "Home"
            } else {
                pageLink.href = "/" + page

                //ensure the page displays the actual page name, and not the path, if it is a path
                pageLink.textContent = page.substring((page.lastIndexOf("/") ?? 0)).replaceAll("_", " ")
            }

            listElement.appendChild(pageLink)
            navList.appendChild(listElement)
        })

        //append the navList element to the navBar
        navBar.appendChild(navList)
        this.shadow.appendChild(navBar)
    }
}

//define the navbar as a custom element
customElements.define("pf-navbar", PortfolioNavBar)
