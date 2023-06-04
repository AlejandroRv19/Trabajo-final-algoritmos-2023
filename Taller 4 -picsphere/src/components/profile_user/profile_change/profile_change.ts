import { loadCss } from "../../../utils/main_styles";
import profilecstyle from "./profilecstyle.css"

export default class profile_change extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {

        loadCss(this, profilecstyle)


        const Main_box = this.ownerDocument.createElement('div');
        Main_box.classList.add("Main_box")
        this.shadowRoot?.appendChild(Main_box);


        const div_edit_change = this.ownerDocument.createElement('div');
        div_edit_change.classList.add("div_edit_change")
        Main_box.appendChild(div_edit_change);
        
        const button_post = this.ownerDocument.createElement('button');
        button_post.classList.add("button_post")
        button_post.textContent = "Post";
        div_edit_change.appendChild(button_post);


        // const div_edit_change_2 = this.ownerDocument.createElement('div');
        // div_edit_change_2.classList.add("div_edit_change")
        // Main_box.appendChild(div_edit_change_2);
        
        // const button_post2 = this.ownerDocument.createElement('button');
        // button_post2.classList.add("button_post2")
        // button_post2.textContent = "Save";
        // div_edit_change_2.appendChild(button_post2);
       

        
}
}
customElements.define('app-profile_change', profile_change)