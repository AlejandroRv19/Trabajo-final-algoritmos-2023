import { loadCss } from "../../utils/main_styles";
import weeknotifac from "./weeknotifac.css"

export default class weeknotification extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot) this.shadowRoot.innerHTML = "";
        loadCss(this, weeknotifac)

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
        picture.src = "https://i.pinimg.com/564x/a8/d8/28/a8d8283e680a2848d6a1537c03344a43.jpg"
        picture.classList.add("picture");
        divpicture.appendChild(picture);

        const divtext = this.ownerDocument.createElement('div');
        divtext.classList.add("divtext")
        divnotification.appendChild(divtext);

        const text = this.ownerDocument.createElement('p');
        text.textContent = "A carla liked your post. 2min"
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
        picture2.src = "https://i.pinimg.com/564x/8e/ab/b1/8eabb1035dba8313105c9ee88993ce56.jpg"
        picture2.classList.add("picture");
        divpicture2.appendChild(picture2);

        const divtext2 = this.ownerDocument.createElement('div');
        divtext2.classList.add("divtext")
        divnotification2.appendChild(divtext2);

        const text2 = this.ownerDocument.createElement('p');
        text2.textContent = "A miukudi liked your post. 2min"
        text2.classList.add("text");
        divtext2.appendChild(text2);

        const divpost2 = this.ownerDocument.createElement('div');
        divpost2.classList.add("divpost")
        divnotification2.appendChild(divpost2);

        const post2 = this.ownerDocument.createElement('img');
        post2.src = "https://i.pinimg.com/564x/07/c9/48/07c948dba12b9f992ce9874b2f356422.jpg"
        post2.classList.add("post");
        divpost2.appendChild(post2);



        const divnotification3 = this.ownerDocument.createElement('div');
        divnotification3.classList.add("divnotification")
        Main_box.appendChild(divnotification3);

        const divpicture3 = this.ownerDocument.createElement('div');
        divpicture3.classList.add("divpicture")
        divnotification3.appendChild(divpicture3);

        const picture3 = this.ownerDocument.createElement('img');
        picture3.src = "https://i.pinimg.com/564x/4c/ef/00/4cef001314b62e92fee84c2e6a57da79.jpg"
        picture3.classList.add("picture");
        divpicture3.appendChild(picture3);

        const divtext3 = this.ownerDocument.createElement('div');
        divtext3.classList.add("divtext")
        divnotification3.appendChild(divtext3);

        const text3 = this.ownerDocument.createElement('p');
        text3.textContent = "A  sofia_23 your post. 3min"
        text3.classList.add("text");
        divtext3.appendChild(text3);

        const divpost3 = this.ownerDocument.createElement('div');
        divpost3.classList.add("divpost")
        divnotification3.appendChild(divpost3);

        const post3 = this.ownerDocument.createElement('img');
        post3.src = "https://i.pinimg.com/564x/07/c9/48/07c948dba12b9f992ce9874b2f356422.jpg"
        post3.classList.add("post");
        divpost3.appendChild(post3);




        const divnotification4 = this.ownerDocument.createElement('div');
        divnotification4.classList.add("divnotification")
        Main_box.appendChild(divnotification4);

        const divpicture4 = this.ownerDocument.createElement('div');
        divpicture4.classList.add("divpicture")
        divnotification4.appendChild(divpicture4);

        const picture4 = this.ownerDocument.createElement('img');
        picture4.src = "https://i.pinimg.com/564x/0f/85/41/0f8541c0f86691c01064ea4cdef4545c.jpg"
        picture4.classList.add("picture");
        divpicture4.appendChild(picture4);

        const divtext4 = this.ownerDocument.createElement('div');
        divtext4.classList.add("divtext")
        divnotification4.appendChild(divtext4);

        const text4 = this.ownerDocument.createElement('p');
        text4.textContent = "A juanpa27 liked your post. 4min"
        text4.classList.add("text");
        divtext4.appendChild(text4);

        const divpost4 = this.ownerDocument.createElement('div');
        divpost4.classList.add("divpost")
        divnotification4.appendChild(divpost4);

        const post4 = this.ownerDocument.createElement('img');
        post4.src = "https://i.pinimg.com/564x/8d/6f/cb/8d6fcb0b52495390d7de7e00a642bb22.jpg"
        post4.classList.add("post");
        divpost4.appendChild(post4);

    }
}

customElements.define('app-weeknotification', weeknotification)