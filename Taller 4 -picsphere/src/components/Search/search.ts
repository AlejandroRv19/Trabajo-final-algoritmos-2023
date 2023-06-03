import { loadCss } from "../../utils/main_styles";
import searchstyle from "./searchstyle.css"

export default class searchc extends HTMLElement {
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
        
        const input_div_image = this.ownerDocument.createElement('div');
        input_div_image.classList.add("input_div_image");
        Main_box.appendChild(input_div_image);
        
        const search_img_logo = this.ownerDocument.createElement('img');
        search_img_logo.classList.add("search_img_logo");
        search_img_logo.src = ".././src/utils/img/Logo_picsphere.png";
        input_div_image.appendChild(search_img_logo);
        
        const input_div_search = this.ownerDocument.createElement('div');
        input_div_search.classList.add("input_div_search");
        Main_box.appendChild(input_div_search);
        
        const search = this.ownerDocument.createElement('input');
        search.classList.add("search");
        search.placeholder = " 🜙 what you looking for?";
        input_div_search.appendChild(search);
        

        
        
    }
}

customElements.define('app-searchc', searchc)