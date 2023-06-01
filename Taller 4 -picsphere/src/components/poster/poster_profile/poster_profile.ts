import { loadCss } from "../../../utils/main_styles";
import posterPstyle from "./posterPstyle.css"

export default class posterprofile extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {

        loadCss (this, posterPstyle)


        const Main_box = this.ownerDocument.createElement('section');
        Main_box.classList.add("Main_box");
        this.shadowRoot?.appendChild(Main_box);

        const profileDiv = this.ownerDocument.createElement('div');
        profileDiv.classList.add("profile_div");
        Main_box.appendChild(profileDiv);
  
        const profileImageDiv = this.ownerDocument.createElement('div');
        profileImageDiv.classList.add("profile_image_div");
        profileImageDiv.innerHTML = '<img src="../src/utils/img/user_profile_img.png" alt="home" />';
        profileDiv.appendChild(profileImageDiv);
  
        const profileImage = this.ownerDocument.createElement('img');
        profileImage.src = "../src/utils/img/user_profile_img.png";
        // profileImage.innerHTML = '<img src="../src/utils/img/user_profile_img.png" alt="home" />';
        profileImageDiv.appendChild(profileImage);
  
      
        const profileNameDiv = this.ownerDocument.createElement('div');
        profileNameDiv.classList.add("profile_name_div");
        profileDiv.appendChild(profileNameDiv);
  
    
        const profileName = this.ownerDocument.createElement('h1');
        profileName.innerText = "miukdi";
        profileNameDiv.appendChild(profileName);




    }
}

customElements.define('app-posterprofile', posterprofile)