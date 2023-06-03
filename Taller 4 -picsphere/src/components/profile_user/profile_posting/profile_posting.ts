import { loadCss } from "../../../utils/main_styles";
import profilepstyle from "./profilepstyle.css";

export default class profile_posting extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {

        loadCss(this, profilepstyle)

        const something = this.ownerDocument.createElement('div');
        this.shadowRoot?.appendChild(something);
    }
}

customElements.define('app-profile_posting', profile_posting)