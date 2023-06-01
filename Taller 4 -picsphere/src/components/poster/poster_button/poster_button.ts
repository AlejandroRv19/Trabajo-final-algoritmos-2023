export default class poster_button extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const Main_box = this.ownerDocument.createElement('section');
        Main_box.classList.add("Main_box")
        this.shadowRoot?.appendChild(Main_box);


        const buttonsDiv = this.ownerDocument.createElement('div');
        buttonsDiv.classList.add("buttons_div");
        Main_box.appendChild(buttonsDiv);
        
        const buttonLikesDiv = this.ownerDocument.createElement('div');
        buttonLikesDiv.classList.add("button_div");
        buttonsDiv.appendChild(buttonLikesDiv);

        const buttonLikes = this.ownerDocument.createElement('button');
        buttonLikes.innerText = "Likes";
        buttonLikesDiv.appendChild(buttonLikes);

        
        const buttonCommentsDiv = this.ownerDocument.createElement('div');
        buttonCommentsDiv.classList.add("button_div");
        buttonsDiv.appendChild(buttonCommentsDiv);

        const buttonComments = this.ownerDocument.createElement('button');
        buttonComments.innerText = "Comments";
        buttonCommentsDiv.appendChild(buttonComments);


        
        const buttonShareDiv = this.ownerDocument.createElement('div');
        buttonShareDiv.classList.add("button_div");
        buttonsDiv.appendChild(buttonShareDiv);

        const buttonShare = this.ownerDocument.createElement('button');
        buttonShare.innerText = "Share";
        buttonShareDiv.appendChild(buttonShare);

        
        const buttonSaveDiv = this.ownerDocument.createElement('div');
        buttonSaveDiv.classList.add("button_div");
        buttonsDiv.appendChild(buttonSaveDiv);
        
        const buttonSave = this.ownerDocument.createElement('button');
        buttonSave.innerText = "Save";
        buttonSaveDiv.appendChild(buttonSave);
        
    
        
        
        
        
       
        
        
        
    }
}

customElements.define('app-poster_button', poster_button)