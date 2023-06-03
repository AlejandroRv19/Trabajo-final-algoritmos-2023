import { loadCss } from "../Search/search.css";
import posterbstyle from "./posterbstyle.css"



export default class Search extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
              
        loadCss(this, posterbstyle)
        
        const Main_box = this.ownerDocument.createElement('section');
        Main_box.classList.add("Main_box")
        this.shadowRoot?.appendChild(Main_box);
        
        const contentDiv = this.ownerDocument.createElement('div');
        contentDiv.classList.add("contentDiv");
        Main_box.appendChild(contentDiv);

        const Search_input= this.ownerDocument.createElement('input');
        Search_input.classList.add("Search_input");
        Search_input.innerHTML = '<img src=".././src/utils/img/Search.png" alt="Search" />'
        contentDiv.appendChild(Search_input);

        

        
    }
}

customElements.define('app-poster_Search', Search)