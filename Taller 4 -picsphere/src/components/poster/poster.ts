import { loadCss } from "../../utils/main_styles";
import posterstyle from "./posterstyle.css"

export default class poster extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {

        loadCss (this, posterstyle)

        const Main_box = this.ownerDocument.createElement('section');
        Main_box.classList.add("Main_box");
        this.shadowRoot?.appendChild(Main_box);


        const div = this.ownerDocument.createElement('app-posterprofile')
        div.classList.add("poster_profile")
        Main_box.appendChild(div)

       

        const div2 = this.ownerDocument.createElement('app-poster_img')
        div2.classList.add("poster_img")
        Main_box.appendChild(div2)


        const div3 = this.ownerDocument.createElement('app-poster_button')
        div3.classList.add("poster_button")
        Main_box.appendChild(div3)
        
        
        
      
        
        
       
        
        
        
        
       

       
    }
}

customElements.define('app-poster', poster)