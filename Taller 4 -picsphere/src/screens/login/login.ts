export default class login extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {

        const Main_box = this.ownerDocument.createElement('section');
        Main_box.id = "main_box";
        this.shadowRoot?.appendChild(Main_box);


        const imageBox = this.ownerDocument.createElement('div');
        Main_box.appendChild(imageBox);

        const image = this.ownerDocument.createElement('img');
        image.src = "../utils/img/Logo_picsphere.png"
        imageBox.appendChild(image);


        const div_form = this.ownerDocument.createElement('div');
        Main_box.appendChild(div_form);

        const form_component = this.ownerDocument.createElement('app-form');
        div_form.appendChild(form_component);


        const div_btn = this.ownerDocument.createElement('div');
        Main_box.appendChild(div_btn);

        const button = this.ownerDocument.createElement('button');
        button.innerText = "Login";
        div_btn.appendChild(button);

       
    }
}

customElements.define('app-login', login)