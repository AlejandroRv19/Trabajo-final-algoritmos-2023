import { AttrStories } from "../../utils/interfaces";
import { loadCss } from "../../utils/main_styles";
import storiestyle from "./storiestyle.css"


export default class stories extends HTMLElement {

    // name: string = "";
    // image: string= "";


    // static get observedAttributes(){
    //     return["name", "image"];
    // }

    // attributeChangedCallback(AttrStories: keyof AttrStories, _:unknown, newValue:string){
    //     this[AttrStories] = newValue;
    //     this.render();
    // }


    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {


        if(this.shadowRoot) this.shadowRoot.innerHTML = ""

        loadCss(this, storiestyle)

        const Main_box = this.ownerDocument.createElement('section');
        Main_box.classList.add("Main_box")
        this.shadowRoot?.appendChild(Main_box);

        const Div_storie = this.ownerDocument.createElement('div');
        Div_storie.classList.add("Div_storie")
        Main_box.appendChild(Div_storie);

        const image = this.ownerDocument.createElement('img');
        image.classList.add("image")
        // image.src = this.image;
        image.alt = "Image of the story";
        Div_storie.appendChild(image);

        const Name_div = this.ownerDocument.createElement('div');
        Name_div.classList.add("Name_div");
        Div_storie.appendChild(Name_div);

        const Name_storie = this.ownerDocument.createElement('div');
        Name_storie.classList.add("Name_storie");
        // Name_storie.textContent = this.name,
        Name_div.appendChild(Name_storie);
    }
}

customElements.define('app-stories', stories)