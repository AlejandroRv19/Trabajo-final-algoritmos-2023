import { loadCss } from "../../../utils/main_styles";
import posterC from "./posterC.css"

export default class poster_comments extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {

        loadCss(this, posterC)

        
        const Main_box = this.ownerDocument.createElement('section');
        this.shadowRoot?.appendChild(Main_box);

      
        const commentsDiv = this.ownerDocument.createElement('div');
        commentsDiv.classList.add("comments_div");
        Main_box.appendChild(commentsDiv);
        
       
        const commentsText = this.ownerDocument.createElement('p');
        commentsText.innerText = "Samathan_rex: that was cool"
        commentsDiv.appendChild(commentsText)
        
    }
}

customElements.define('app-poster_comments', poster_comments)