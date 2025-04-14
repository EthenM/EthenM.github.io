import './navbar.js'

class PortfolioHeader extends HTMLElement {
    constructor() {
        super()

        //attach a shadow, so effects like styling in the component won't affect
        //the rest of the tree
        this.shadow = this.attachShadow({ mode: 'closed' })
    }
    
    connectedCallback() {

        //link the navbar.css stylesheet into the shadowroot
        const stylesheet = document.createElement("link")
        stylesheet.rel = "stylesheet"
        stylesheet.href = "../styles/header.css"
        this.shadow.appendChild(stylesheet)

        //create a header item
        const header = document.createElement("header")

        //two elements are needed here: a title, and a nav bar

        const pageTitle = document.createElement("div")
        pageTitle.id = "page-title"
        
        //add my logo to the page
        const logo = document.createElement("img")
        logo.id = "logo"
        logo.src = "../resources/images/EMLogo.png"
        pageTitle.appendChild(logo)

        const title = document.createElement("h1")
        title.textContent = "Ethen Mitterhuber - Software Developer"
        pageTitle.appendChild(title)

        //build the nav bar
        const navBar = document.createElement("pf-navbar")
        
        //the navBar will be a list of elements, that direct the user to the various pages
        navBar.pages = ["home", "about", "projects", "resume"]

        header.appendChild(pageTitle)
        header.appendChild(navBar)
        this.shadow.appendChild(header)
    }
}

customElements.define('pf-header', PortfolioHeader)
