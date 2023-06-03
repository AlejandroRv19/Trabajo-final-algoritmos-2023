import { loadCss } from "../../../utils/main_styles";
import profilecstyle from "./profilecstyle.css"

export default class profile_change extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {

        loadCss(this, profilecstyle)
        const something = this.ownerDocument.createElement('div');
        this.shadowRoot?.appendChild(something);
    }
}

customElements.define('app-profile_change', profile_change)