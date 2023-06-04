import { loadCss } from "../../utils/main_styles";
import newnotificstyle from "./newnotificstyle.css"

export default class newnotification extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot) this.shadowRoot.innerHTML = "";
        loadCss(this, newnotificstyle)

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
        picture.src = "https://i.pinimg.com/564x/ec/b2/5c/ecb25cbca25e14adeee84d33bdcc59aa.jpg"
        picture.classList.add("picture");
        divpicture.appendChild(picture);

        const divtext = this.ownerDocument.createElement('div');
        divtext.classList.add("divtext")
        divnotification.appendChild(divtext);

        const text = this.ownerDocument.createElement('p');
        text.textContent = "A sebas liked your post. 2min"
        text.classList.add("text");
        divtext.appendChild(text);

        const divpost = this.ownerDocument.createElement('div');
        divpost.classList.add("divpost")
        divnotification.appendChild(divpost);

        const post = this.ownerDocument.createElement('img');
        post.src = "https://i.pinimg.com/564x/5d/c3/c9/5dc3c936156c0e51ea340a29c5c98868.jpg"
        post.classList.add("post");
        divpost.appendChild(post);



        const divnotification2 = this.ownerDocument.createElement('div');
        divnotification2.classList.add("divnotification")
        Main_box.appendChild(divnotification2);

        const divpicture2 = this.ownerDocument.createElement('div');
        divpicture2.classList.add("divpicture")
        divnotification2.appendChild(divpicture2);

        const picture2 = this.ownerDocument.createElement('img');
        picture2.src = "https://i.pinimg.com/564x/2f/6c/4e/2f6c4e815c290f0f49d48dc4a2a1076a.jpg"
        picture2.classList.add("picture");
        divpicture2.appendChild(picture2);

        const divtext2 = this.ownerDocument.createElement('div');
        divtext2.classList.add("divtext")
        divnotification2.appendChild(divtext2);

        const text2 = this.ownerDocument.createElement('p');
        text2.textContent = "A isa liked your post. 2min"
        text2.classList.add("text");
        divtext2.appendChild(text2);

        const divpost2 = this.ownerDocument.createElement('div');
        divpost2.classList.add("divpost")
        divnotification2.appendChild(divpost2);

        const post2 = this.ownerDocument.createElement('img');
        post2.src = "https://i.pinimg.com/564x/8d/6f/cb/8d6fcb0b52495390d7de7e00a642bb22.jpg"
        post2.classList.add("post");
        divpost2.appendChild(post2);

    }
}

customElements.define('app-newnotification', newnotification)