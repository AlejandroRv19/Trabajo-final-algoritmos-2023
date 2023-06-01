import { loadCss } from "../../utils/main_styles";
import formstyle from "./formstyle.css"
import {AttrLogin}from "../../utils/interfaces"

export default class form extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {

        loadCss(this, formstyle)

        const Main_box = this.ownerDocument.createElement('section');
        Main_box.id = "main_box";
        this.shadowRoot?.appendChild(Main_box);

        const second_box = this.ownerDocument.createElement('div');
        Main_box.classList.add("second_box")
        Main_box.appendChild(second_box);


        const div = this.ownerDocument.createElement('div');
        div.classList.add("div_content")
        second_box.appendChild(div);

        const input1 = this.ownerDocument.createElement('input');
        input1.type = "text";
        input1.placeholder = "Phone number, username, or email";
        // input1.addEventListener("change", (e: any) => {
            // AttrLogin.name = e.target.value

        // });
        div.appendChild(input1);

        const div2 = this.ownerDocument.createElement('div');
        div2.classList.add("div2_content")
        second_box.appendChild(div2);

        const input2 = this.ownerDocument.createElement('input');
        input2.type = "password";
        input2.placeholder = "password";
        // input2.addEventListener("change", (e: any) => {
            // AttrLogin.name = e.target.value

        // });
        div2.appendChild(input2);
    }
}

       customElements.define('app-form', form)