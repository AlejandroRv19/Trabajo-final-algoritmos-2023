import { loadCss } from "../../../utils/main_styles";
import profilebstyle from "./profilebstyle.css"

export default class profile_buttons extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {

        loadCss(this, profilebstyle)

        const Main_box = this.ownerDocument.createElement('div');
        Main_box.classList.add("Main_box")
        this.shadowRoot?.appendChild(Main_box);


        const div_editprofile = this.ownerDocument.createElement('div');
        div_editprofile.classList.add("div_editprofile")
        Main_box.appendChild(div_editprofile);
        
        const button_editprofile = this.ownerDocument.createElement('button');
        button_editprofile.classList.add("button_editprofile")
        button_editprofile.textContent = "Edit profile";
        div_editprofile.appendChild(button_editprofile);


        const div_share_profile = this.ownerDocument.createElement('div');
        div_share_profile.classList.add("div_share_profile")
        Main_box.appendChild(div_share_profile);
        
        const button_share_profile = this.ownerDocument.createElement('button');
        button_share_profile.classList.add("button_share_profile")
        button_share_profile.textContent = "Share profile";
        div_share_profile.appendChild(button_share_profile);



       
    }
}

customElements.define('app-profile_buttons', profile_buttons)