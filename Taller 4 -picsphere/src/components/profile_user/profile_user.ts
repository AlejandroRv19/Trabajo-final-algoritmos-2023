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
        

        const div_profile_numbers = this.ownerDocument.createElement('div');
        div_profile_numbers.classList.add("div_profile_numbers")
        Main_box.appendChild(div_profile_numbers);

        const profile_numbers = this.ownerDocument.createElement('app-profilenumbers');
        profile_numbers.classList.add("profile_numbers")
        div_profile_numbers.appendChild(profile_numbers);


        const div_profile_status = this.ownerDocument.createElement('div');
        div_profile_status.classList.add("div_profile_status")
        Main_box.appendChild(div_profile_status);

        const profile_status = this.ownerDocument.createElement('app-profile_status');
        profile_status.classList.add("profile_status")
        div_profile_status.appendChild(profile_status);


        const div_profile_buttons = this.ownerDocument.createElement('div');
        div_profile_buttons.classList.add("div_profile_buttons")
        Main_box.appendChild(div_profile_buttons);

        const profile_buttons = this.ownerDocument.createElement('app-profile_buttons');
        profile_buttons.classList.add("profile_buttons")
        div_profile_buttons.appendChild(profile_buttons);


        const div_profile_featured = this.ownerDocument.createElement('div');
        div_profile_featured.classList.add("div_profile_featured")
        Main_box.appendChild(div_profile_featured);

        const profile_featured = this.ownerDocument.createElement('app-profile_featured');
        profile_featured.classList.add("profile_featured")
        div_profile_featured.appendChild(profile_featured);


        const div_profile_change = this.ownerDocument.createElement('div');
        div_profile_change.classList.add("div_profile_change")
        Main_box.appendChild(div_profile_change);

        const profile_change = this.ownerDocument.createElement('app-profile_change');
        profile_change.classList.add("profile_change")
        div_profile_change.appendChild(profile_change);
    }
}

customElements.define('app-profileuser', profileuser)