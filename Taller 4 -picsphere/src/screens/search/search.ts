import { loadCss } from "../../utils/main_styles";
import searchsstyle from "./searchsstyle.css"

export default class search extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot) this.shadowRoot.innerHTML = "";
        loadCss(this, searchsstyle)

        const Main_wrapper = this.ownerDocument.createElement('section');
        Main_wrapper.classList.add("Main_wrapper")
        this.shadowRoot?.appendChild(Main_wrapper);

        const searchc = this.ownerDocument.createElement('app-searchc');
        searchc.classList.add("searchc")
        Main_wrapper.appendChild(searchc);

        const divtitle = this.ownerDocument.createElement('div');
        divtitle.classList.add("divtitle")
        Main_wrapper.appendChild(divtitle);

        const title = this.ownerDocument.createElement('h1');
        title.textContent = "Explore your word"
        title.classList.add("title")
        divtitle.appendChild(title);

        const picture = this.ownerDocument.createElement('app-pictures');
        picture.classList.add("picture")
        Main_wrapper.appendChild(picture);
    }
}

customElements.define('app-search', search)