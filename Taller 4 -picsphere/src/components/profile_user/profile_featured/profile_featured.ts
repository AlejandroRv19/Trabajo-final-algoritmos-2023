import { loadCss } from "../../../utils/main_styles";
import profilefstyle from "./profilefstyle.css"

export default class profilefeautured extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {

        loadCss(this,profilefstyle)

        const Main_box = this.ownerDocument.createElement('section');
       Main_box.classList.add("Main_box");
       this.shadowRoot?.appendChild(Main_box);


       const div_profile_name = this.ownerDocument.createElement('div');
       div_profile_name.classList.add("div_profile_name");
       Main_box.appendChild(div_profile_name);


       const div_image = this.ownerDocument.createElement('div');
       div_image.classList.add("div_image");
       div_profile_name.appendChild(div_image);

       const image1 = this.ownerDocument.createElement('img');
       image1.classList.add("profile_img")
       image1.src = "https://i.pinimg.com/564x/44/af/0c/44af0c0409eca1de069959ec0afef435.jpg";
       div_image.appendChild(image1);


       const div_text1 = this.ownerDocument.createElement('div');
       div_text1.classList.add ("div_text1") ; 
       div_profile_name.appendChild(div_text1);

       const text1 = this.ownerDocument.createElement('h4');
       text1.classList.add("text1")
       text1.textContent = "Tips"; 
       div_text1.appendChild(text1);



       
       const div_profile_name_2 = this.ownerDocument.createElement('div');
       div_profile_name_2.classList.add("div_profile_name_2");
       Main_box.appendChild(div_profile_name_2);


       const div_image_2 = this.ownerDocument.createElement('div');
       div_image_2.classList.add("div_image");
       div_profile_name_2.appendChild(div_image_2);

       const image_1 = this.ownerDocument.createElement('img');
       image_1.classList.add("profile_img")
       image_1.src = "https://i.pinimg.com/736x/c0/ef/95/c0ef956c646e5ee87ad6d1a01780c980.jpg";
       div_image_2.appendChild(image_1);


       const div_text3 = this.ownerDocument.createElement('div');
       div_text3.classList.add ("div_text1") ; 
       div_profile_name_2.appendChild(div_text3);

       const text3 = this.ownerDocument.createElement('h4');
       text3.classList.add("text1")
       text3.textContent = "Outfits"; 
       div_text3.appendChild(text3);


       const div_profile_name_3 = this.ownerDocument.createElement('div');
       div_profile_name_3.classList.add("div_profile_name_2");
       Main_box.appendChild(div_profile_name_3);


       const div_image_3 = this.ownerDocument.createElement('div');
       div_image_3.classList.add("div_image");
       div_profile_name_3.appendChild(div_image_3);

       const image_3 = this.ownerDocument.createElement('img');
       image_3.classList.add("profile_img")
       image_3.src = "https://i.pinimg.com/564x/62/8c/fc/628cfc348723f2be59e42b0b1a0d596e.jpg";
       div_image_3.appendChild(image_3);


       const div_text_3 = this.ownerDocument.createElement('div');
       div_text_3.classList.add ("div_text1") ; 
       div_profile_name_3.appendChild(div_text_3);

       const text_3 = this.ownerDocument.createElement('h4');
       text_3.classList.add("text1")
       text_3.textContent = "Music"; 
       div_text_3.appendChild(text_3);



       const div_profile_name_4 = this.ownerDocument.createElement('div');
       div_profile_name_4.classList.add("div_profile_name_2");
       Main_box.appendChild(div_profile_name_4);


       const div_image_4 = this.ownerDocument.createElement('div');
       div_image_4.classList.add("div_image");
       div_profile_name_4.appendChild(div_image_4);

       const image_4 = this.ownerDocument.createElement('img');
       image_4.classList.add("profile_img")
       image_4.src = "https://i.pinimg.com/564x/69/1a/e5/691ae5bb9290b32dac4f41d5e4e30315.jpg";
       div_image_4.appendChild(image_4);


       const div_text_4 = this.ownerDocument.createElement('div');
       div_text_4.classList.add ("div_text1") ; 
       div_profile_name_4.appendChild(div_text_4);

       const text_4 = this.ownerDocument.createElement('h4');
       text_4.classList.add("text1")
       text_4.textContent = "Music"; 
       div_text_4.appendChild(text_4);
        
        
    }
}

customElements.define('app-profilefeautured', profilefeautured)


