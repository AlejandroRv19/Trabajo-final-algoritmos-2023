import { loadCss } from "../../utils/main_styles";
import notificaStyle from "./notificastyle.css"

export default class notification extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot) this.shadowRoot.innerHTML = "";
        loadCss(this, notificaStyle)

        const Main_wrapper = this.ownerDocument.createElement('section');
        Main_wrapper.classList.add("Main_wrapper")
        this.shadowRoot?.appendChild(Main_wrapper);

        const searchc = this.ownerDocument.createElement('app-searchc');
        searchc.classList.add("searchc")
        Main_wrapper.appendChild(searchc);

        const divnotificaction = this.ownerDocument.createElement('div');
        divnotificaction.classList.add("divnotificaction")
        Main_wrapper.appendChild(divnotificaction);

        const divtitle = this.ownerDocument.createElement('div');
        divtitle.classList.add("divtitle")
        divnotificaction.appendChild(divtitle);

        const title = this.ownerDocument.createElement('h1');
        title.textContent = "News"
        title.classList.add("title")
        divtitle.appendChild(title);

        const newnotification = this.ownerDocument.createElement('app-newnotification');
        newnotification.classList.add("newnotification")
        divnotificaction.appendChild(newnotification);

        const divtitle2 = this.ownerDocument.createElement('div');
        divtitle2.classList.add("divtitle")
        divnotificaction.appendChild(divtitle2);

        const title2 = this.ownerDocument.createElement('h1');
        title2.textContent = "This week"
        title2.classList.add("title2")
        divtitle2.appendChild(title2);

        const weeknotification = this.ownerDocument.createElement('app-weeknotification');
        weeknotification.classList.add("weeknotification")
        divnotificaction.appendChild(weeknotification);

        const divtitle3 = this.ownerDocument.createElement('div');
        divtitle3.classList.add("divtitle")
        divnotificaction.appendChild(divtitle3);

        const title3 = this.ownerDocument.createElement('h1');
        title3.textContent = "This moth"
        title3.classList.add("title3")
        divtitle3.appendChild(title3);

        const monthnotification = this.ownerDocument.createElement('app-monthotification');
        monthnotification.classList.add("weeknotification")
        divnotificaction.appendChild(monthnotification);

    }
}

customElements.define('app-notification', notification)
