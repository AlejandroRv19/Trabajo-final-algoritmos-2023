import { loadCss } from "../../../utils/main_styles";
import profilebstyle from "./profilebstyle.css"

export default class profile_buttons extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {

        loadCss(this, profilebstyle)

        const something = this.ownerDocument.createElement('div');
        this.shadowRoot?.appendChild(something);
    }
}

customElements.define('app-profile_buttons', profile_buttons)