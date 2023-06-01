import { dispatch } from "../../store";
import { navigate } from "../../store/actions";
import { Screens } from "../../types/store";
import { loadCss } from "../../utils/main_styles";
import loginstyle from "./loginstyle.css"







export default class login extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {

        if (this.shadowRoot)
        this.shadowRoot.innerHTML = "  "

        loadCss(this, loginstyle)

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


        const forgotPasswordBox = this.ownerDocument.createElement('div');
        forgotPasswordBox.classList.add("forgot_password_box");
        Main_box.appendChild(forgotPasswordBox);

        const forgotPasswordText = this.ownerDocument.createElement('p');
        forgotPasswordText.classList.add("text_password");
        forgotPasswordText.innerText = "Forgot Password?";
        forgotPasswordBox.appendChild(forgotPasswordText);



        const div_btn = this.ownerDocument.createElement('div');
        div_btn.classList.add("div_btn")
        Main_box.appendChild(div_btn);

        const button = this.ownerDocument.createElement('button');
        button.classList.add("button")
        button.innerText = "Login";
        button.addEventListener, () => {
            dispatch(navigate(Screens.DASBOARD));
        }
        div_btn.appendChild(button);


        const div_navcell = this.ownerDocument.createElement('div');
        div_navcell.classList.add("div_navcell")
        Main_box.appendChild(div_navcell);

        const navcell = this.ownerDocument.createElement('app-navcellphone');
        navcell.classList.add ("navcell")
        div_navcell.appendChild(navcell);

       
    }
}

customElements.define('app-login', login)