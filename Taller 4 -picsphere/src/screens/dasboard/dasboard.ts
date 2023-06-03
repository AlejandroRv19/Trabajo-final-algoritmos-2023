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

        const main_box = this.ownerDocument.createElement('section');
        main_box.classList.add ("main_box")
        this.shadowRoot?.appendChild(main_box);





        const div_poster = this.ownerDocument.createElement('div');
        div_poster.classList.add ("div_poster")
        main_box.appendChild(div_poster);

        const poster = this.ownerDocument.createElement('app-poster');
        poster.classList.add ("poster")
        div_poster.appendChild(poster);

        const div_navcell = this.ownerDocument.createElement('div');
        div_navcell.classList.add ("div_navcell")
        main_box.appendChild(div_navcell);

        const navcell = this.ownerDocument.createElement('app-navcellphone');
        navcell.classList.add ("navcell")
        div_navcell.appendChild(navcell);

        



        
    }
}

customElements.define('app-dasboard', dasboard)