import { addObserver } from "../../store";
import { loadCss } from "../../utils/main_styles";
import dasboardstyle from "./dasboardstyle.css"

export default class dasboard extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
        addObserver(this);
    }

    connectedCallback() {
        this.render()
    }

    render() {

        loadCss(this, dasboardstyle)

        const btn = this.ownerDocument.createElement('button');
        btn.classList.add ("hola")
        this.shadowRoot?.appendChild(btn);
    }
}

customElements.define('app-dasboard', dasboard)