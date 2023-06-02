import { loadCss } from "../../utils/main_styles";
import searchstyle from "./searchstyle.css"

export default class search extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {

        loadCss(this, searchstyle);

        const Main_box = this.ownerDocument.createElement('section');
        Main_box.classList.add("Main_box");
        this.shadowRoot?.appendChild(Main_box);
        
        const input_div = this.ownerDocument.createElement('div');
        input_div.classList.add("input_div");
        Main_box.appendChild(input_div);
        
        const search_img = this.ownerDocument.createElement('img');
        search_img.src = "ruta_de_la_imagen";
        input_div.appendChild(search_img);
        
        const input_div2 = this.ownerDocument.createElement('div');
        input_div2.classList.add("input_div2");
        Main_box.appendChild(input_div2);
        
        const search = this.ownerDocument.createElement('input');
        search.classList.add("search");
        input_div2.appendChild(search);
        

        
        
    }
}

customElements.define('app-search', search)