import { loadCss } from "../../../utils/main_styles";
import posterbstyle from "./posterbstyle.css"


export default class poster_button extends HTMLElement {
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
        
        const buttonLikesDiv = this.ownerDocument.createElement('div');
        buttonLikesDiv.classList.add("button_div_Likes");
        Main_box.appendChild(buttonLikesDiv);

        const buttonLikes = this.ownerDocument.createElement('button');
        buttonLikes.classList.add("buttonComments");
        buttonLikes.innerHTML = '<img src=".././src/utils/img/like_img.png" alt="likes" />'
        buttonLikesDiv.appendChild(buttonLikes);

        
        const buttonCommentsDiv = this.ownerDocument.createElement('div');
        buttonCommentsDiv.classList.add("button_div_Comments");
        Main_box.appendChild(buttonCommentsDiv);

        const buttonComments = this.ownerDocument.createElement('button');
        buttonComments.classList.add("buttonComments");
        buttonComments.innerHTML = '<img src=".././src/utils/img/message_button.png" alt="comments" />'
        buttonCommentsDiv.appendChild(buttonComments);


        const buttonShareDiv = this.ownerDocument.createElement('div');
        buttonShareDiv.classList.add("button_div_Share");
        Main_box.appendChild(buttonShareDiv);

        const buttonShare = this.ownerDocument.createElement('button');
        buttonShare.classList.add("buttonShare");
        buttonShare.innerHTML = '<img src=".././src/utils/img/share_img.png" alt="Share" />'
        buttonShareDiv.appendChild(buttonShare);

        
        const buttonSaveDiv = this.ownerDocument.createElement('div');
        buttonSaveDiv.classList.add("button_div_Save");
        Main_box.appendChild(buttonSaveDiv);
        
        const buttonSave = this.ownerDocument.createElement('button');
        buttonSave.classList.add("buttonSave");
        buttonSave.innerHTML = '<img src="../src/utils/img/save_img.png" alt="save" />'
        buttonSaveDiv.appendChild(buttonSave);
        
    
        
        
        
        
       
        
        
        
    }
}

customElements.define('app-poster_button', poster_button)