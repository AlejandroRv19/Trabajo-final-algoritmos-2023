import { loadCss } from "../../utils/main_styles";
import regsistyle from "./regsistyle.css"

export default class register extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {

        loadCss(this, regsistyle)

        const Main_box = this.ownerDocument.createElement('section');
        Main_box.id = "main_box";
        this.shadowRoot?.appendChild(Main_box);


        const imageBox = this.ownerDocument.createElement('div');
        imageBox.classList.add("imageBox")
        Main_box.appendChild(imageBox);

        const image = this.ownerDocument.createElement('img');
        image.src = ".././src/utils/img/Logo_picsphere.png"
        imageBox.appendChild(image);


        const div_form = this.ownerDocument.createElement('div');
        div_form.classList.add("div_form")
        Main_box.appendChild(div_form);

        const form_component = this.ownerDocument.createElement('app-form');
        div_form.appendChild(form_component);



        const div_input = this.ownerDocument.createElement('div');
        div_input.classList.add("div_input")
        Main_box.appendChild(div_input);

        const input2 = this.ownerDocument.createElement('input');
        input2.type = "password";
        input2.placeholder = "repeat password";
        div_input.appendChild(input2);

        
        const div_btn = this.ownerDocument.createElement('div');
        div_btn.classList.add("div_btn")
        Main_box.appendChild(div_btn);

        const button = this.ownerDocument.createElement('button');
        button.classList.add("button")
        button.innerText = "Register";
        div_btn.appendChild(button);
        
        const div_navcell = this.ownerDocument.createElement('div');
        div_navcell.classList.add("div_navcell")
        Main_box.appendChild(div_navcell);

        const navcell = this.ownerDocument.createElement('app-navcellphone');
        navcell.classList.add ("navcell")
        div_navcell.appendChild(navcell);



    }
}

customElements.define('app-register', register)