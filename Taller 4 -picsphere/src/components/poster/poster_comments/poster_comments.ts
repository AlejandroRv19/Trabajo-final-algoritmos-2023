export default class poster_comments extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {

        
        const Main_box = this.ownerDocument.createElement('section');
        this.shadowRoot?.appendChild(Main_box);

      
        const commentsDiv = this.ownerDocument.createElement('div');
        commentsDiv.classList.add("comments_div");
        Main_box.appendChild(commentsDiv);
        
       
        const commentsText = this.ownerDocument.createElement('p');
        commentsText.innerText = "Samthatha that was cool"
        commentsDiv.appendChild(commentsText)
        
    }
}

customElements.define('app-poster_comments', poster_comments)