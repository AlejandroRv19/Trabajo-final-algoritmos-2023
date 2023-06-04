import { loadCss } from "../../utils/main_styles";
import picturestyle from "./picturestyle.css"

export default class pictures extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" })
        // addObserver(this);
    }

    connectedCallback() {
        this.render()
    }

    render() {

        loadCss(this, picturestyle)

        const Main_box = this.ownerDocument.createElement('section');
        Main_box.classList.add("Main_box");
        this.shadowRoot?.appendChild(Main_box);

        const divPictures = this.ownerDocument.createElement('div');
        divPictures.classList.add("divPictures");
        Main_box.appendChild(divPictures);

        const picture = this.ownerDocument.createElement('img');
        picture.src = "https://pm1.aminoapps.com/7119/b0abdf491cffde4bdf95850956c1b15a5591a4b5r1-712-707v2_uhq.jpg"
        picture.classList.add("picture");
        divPictures.appendChild(picture);

        // const divPictures2 = this.ownerDocument.createElement('div');
        // divPictures2.classList.add("divPictures");
        // Main_box.appendChild(divPictures2);

        // const picture2 = this.ownerDocument.createElement('img');
        // picture2.src = "https://pm1.aminoapps.com/7119/b0abdf491cffde4bdf95850956c1b15a5591a4b5r1-712-707v2_uhq.jpg"
        // picture2.classList.add("picture");
        // divPictures2.appendChild(picture2);

        // const divPictures3 = this.ownerDocument.createElement('div');
        // divPictures3.classList.add("divPictures");
        // Main_box.appendChild(divPictures3);

        // const picture3 = this.ownerDocument.createElement('img');
        // picture3.src = "https://pm1.aminoapps.com/7119/b0abdf491cffde4bdf95850956c1b15a5591a4b5r1-712-707v2_uhq.jpg"
        // picture3.classList.add("picture");
        // divPictures3.appendChild(picture3);

        // const divPictures4 = this.ownerDocument.createElement('div');
        // divPictures4.classList.add("divPictures");
        // Main_box.appendChild(divPictures4);

        // const picture4 = this.ownerDocument.createElement('img');
        // picture4.src = "https://pm1.aminoapps.com/7119/b0abdf491cffde4bdf95850956c1b15a5591a4b5r1-712-707v2_uhq.jpg"
        // picture4.classList.add("picture");
        // divPictures4.appendChild(picture4);

        // const divPictures5 = this.ownerDocument.createElement('div');
        // divPictures5.classList.add("divPictures");
        // Main_box.appendChild(divPictures5);

        // const picture5 = this.ownerDocument.createElement('img');
        // picture5.src = "https://pm1.aminoapps.com/7119/b0abdf491cffde4bdf95850956c1b15a5591a4b5r1-712-707v2_uhq.jpg"
        // picture5.classList.add("picture");
        // divPictures5.appendChild(picture5);

        // const divPictures6 = this.ownerDocument.createElement('div');
        // divPictures6.classList.add("divPictures");
        // Main_box.appendChild(divPictures6);

        // const picture6 = this.ownerDocument.createElement('img');
        // picture6.src = "https://pm1.aminoapps.com/7119/b0abdf491cffde4bdf95850956c1b15a5591a4b5r1-712-707v2_uhq.jpg"
        // picture6.classList.add("picture");
        // divPictures6.appendChild(picture6);

    }
}

customElements.define('app-pictures', pictures)