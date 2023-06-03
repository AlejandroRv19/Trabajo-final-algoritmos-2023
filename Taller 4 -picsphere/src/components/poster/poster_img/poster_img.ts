import { loadCss } from "../../../utils/main_styles";
import posterM from "./posterM.css"

export default class poster_img extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {

        loadCss(this, posterM)
        const Main_box = this.ownerDocument.createElement('section');
        Main_box.classList.add("Main_box")
        this.shadowRoot?.appendChild(Main_box);

        const imageDiv = this.ownerDocument.createElement('div');
        imageDiv.classList.add("image_div");
        Main_box.appendChild(imageDiv);
        
         const postImage = this.ownerDocument.createElement('img');
         postImage.src = "../src/utils/img/Poster_img.png";
         imageDiv.appendChild(postImage);
    }
}

customElements.define('app-poster_img', poster_img)