import { loadCss } from "../../../utils/main_styles";
import profiletstyle from "./profiletstyle.css"


export default class profile_top extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {

        loadCss(this, profiletstyle)

        const Main_box = this.ownerDocument.createElement('section');
        Main_box.classList.add("Main_box")
        this.shadowRoot?.appendChild(Main_box);

        const div_top = this.ownerDocument.createElement('div');
        div_top.classList.add("div_top")
        Main_box.appendChild(div_top);

        const arrow_button = this.ownerDocument.createElement('button');
        arrow_button.classList.add("arrow_button")
        arrow_button.innerHTML = '<img src=".././src/utils/img/arrow_back.png" alt="arrow_back" />'
        div_top.appendChild(arrow_button);


        const div_top2 = this.ownerDocument.createElement('div');
        div_top2.classList.add("div_top2")
        Main_box.appendChild(div_top2);

        const div_h1 = this.ownerDocument.createElement('h3');
        div_h1.classList.add("div_h1")
        div_h1.innerText = ("Latiana")
        div_top2.appendChild(div_h1);

        
    }
}

customElements.define('app-profile_top', profile_top)