export default class profileuser extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {

        const Main_box = this.ownerDocument.createElement('div');
        Main_box.classList.add("Main_box")
        this.shadowRoot?.appendChild(Main_box);

        const div_profile_top = this.ownerDocument.createElement('div');
        div_profile_top.classList.add("div_profile_top")
        Main_box.appendChild(div_profile_top);

        const profile_top = this.ownerDocument.createElement('app-profile_top');
        profile_top.classList.add("profile_top")
        Main_box.appendChild(profile_top);
    }
}

customElements.define('app-profileuser', profileuser)