export default class user_profile extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {


        const Main_box = this.ownerDocument.createElement('section');
        Main_box.classList.add("Main_box")
        this.shadowRoot?.appendChild(Main_box);

        
        const div_profile_user = this.ownerDocument.createElement('div');
        div_profile_user.classList.add("div_profile_user")
        Main_box.appendChild(div_profile_user);

        const profile_user = this.ownerDocument.createElement('app-profileuser');
        profile_user.classList.add("profile_user")
        div_profile_user.appendChild(profile_user);
    }
}

customElements.define('app-user_profile', user_profile)