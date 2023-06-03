import { loadCss } from "../../../utils/main_styles";
import profilefstyle from "./profilefstyle.css"

export default class profile_feautured extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {

        loadCss(this,profilefstyle)
        
        const something = this.ownerDocument.createElement('div');
        this.shadowRoot?.appendChild(something);
    }
}

customElements.define('app-profile_feautured', profile_feautured)