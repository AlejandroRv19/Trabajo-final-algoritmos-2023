import { loadCss } from "../../../utils/main_styles";
import profileSstyle from "./profileSstyle.css"

export default class profile_status extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {

         loadCss(this, profileSstyle)

        const Main_box = this.ownerDocument.createElement('div');
        Main_box.classList.add("Main_box")
        this.shadowRoot?.appendChild(Main_box);


        const divNumeros = this.ownerDocument.createElement('div');
        divNumeros.classList.add("divNumeros")
        Main_box.appendChild(divNumeros);
        
        const h1Numeros = this.ownerDocument.createElement('h3');
        h1Numeros.textContent = "333";
        divNumeros.appendChild(h1Numeros);



       const divStatusWrite = this.ownerDocument.createElement('div');
       divStatusWrite.classList.add("divStatusWrite")
       Main_box.appendChild(divStatusWrite);

       const h1StatusWrite = this.ownerDocument.createElement('p');
       h1StatusWrite.classList.add("h1StatusWrite")
       h1StatusWrite.textContent = "I like to take photos and drink coffee";
       divStatusWrite.appendChild(h1StatusWrite);



      const divLinkFacebook = this.ownerDocument.createElement('div');
      divLinkFacebook.classList.add("divLinkFacebook")
      Main_box.appendChild(divLinkFacebook);

      const h1LinkFacebook = this.ownerDocument.createElement('p');
      h1LinkFacebook.classList.add("h1LinkFacebook")
      h1LinkFacebook.textContent = "Facebook.laitana.com";
      divLinkFacebook.appendChild(h1LinkFacebook);

    }
}

customElements.define('app-profile_status', profile_status)