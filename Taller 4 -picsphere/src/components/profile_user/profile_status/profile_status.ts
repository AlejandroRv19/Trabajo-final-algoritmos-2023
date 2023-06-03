import { loadCss } from "../../../utils/main_styles";
import profileSstyle from "./profileSstyle.css"

export default class profile_status extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {

         loadCss(this, profileSstyle)

        const something = this.ownerDocument.createElement('div');
        this.shadowRoot?.appendChild(something);
    }
}

customElements.define('app-profile_status', profile_status)