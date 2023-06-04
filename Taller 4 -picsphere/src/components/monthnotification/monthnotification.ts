import { loadCss } from "../../utils/main_styles";
import monthnotification from "./monthotificastyle.css"

export default class monthotification extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot) this.shadowRoot.innerHTML = "";
        loadCss(this, monthnotification)

        const Main_box = this.ownerDocument.createElement('section');
        Main_box.classList.add("Main_box")
        this.shadowRoot?.appendChild(Main_box);

        const divnotification = this.ownerDocument.createElement('div');
        divnotification.classList.add("divnotification")
        Main_box.appendChild(divnotification);

        const divpicture = this.ownerDocument.createElement('div');
        divpicture.classList.add("divpicture")
        divnotification.appendChild(divpicture);

        const picture = this.ownerDocument.createElement('img');
        picture.src = "https://i.pinimg.com/736x/08/2a/16/082a163c0a7b6ab4a27eea77735d39f0.jpg"
        picture.classList.add("picture");
        divpicture.appendChild(picture);

        const divtext = this.ownerDocument.createElement('div');
        divtext.classList.add("divtext")
        divnotification.appendChild(divtext);

        const text = this.ownerDocument.createElement('p');
        text.textContent = "A Sarah liked your post. 2min"
        text.classList.add("text");
        divtext.appendChild(text);

        const divpost = this.ownerDocument.createElement('div');
        divpost.classList.add("divpost")
        divnotification.appendChild(divpost);

        const post = this.ownerDocument.createElement('img');
        post.src = "https://i.pinimg.com/564x/5d/c3/c9/5dc3c936156c0e51ea340a29c5c98868.jpg"
        post.classList.add("post");
        divpost.appendChild(post);

    }
}

customElements.define('app-monthotification', monthotification)