import { loadCss } from "../../../utils/main_styles";
import posterL from "./posterL.css"

export default class poster_likes extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {

        loadCss(this,posterL )
        
        const Main_box = this.ownerDocument.createElement('section');
        this.shadowRoot?.appendChild(Main_box);

        const likesDiv = this.ownerDocument.createElement('div');
        likesDiv.classList.add("likes_div");
         Main_box.appendChild(likesDiv);


       const likesText = this.ownerDocument.createElement('p');
       likesText.innerText = "598 likes";
       likesDiv.appendChild(likesText);



        
    }
}

customElements.define('app-poster_likes', poster_likes)