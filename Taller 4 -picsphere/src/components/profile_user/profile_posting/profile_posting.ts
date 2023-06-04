import { loadCss } from "../../../utils/main_styles";
import profilepstyle from "./profilepstyle.css";

export default class profile_posting extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {

        loadCss(this, profilepstyle)

       const Main_box = this.ownerDocument.createElement('section');
       Main_box.classList.add("Main_box");
       this.shadowRoot?.appendChild(Main_box);

      const div_post = this.ownerDocument.createElement('div');
      div_post.classList.add("div_post");
      Main_box.appendChild(div_post);

      const post_image1 = this.ownerDocument.createElement('img');
      post_image1.classList.add("post_image")
      post_image1.src = "https://i.pinimg.com/564x/07/c9/48/07c948dba12b9f992ce9874b2f356422.jpg";
      div_post.appendChild(post_image1);

      const div_post2 = this.ownerDocument.createElement('div');
      div_post2.classList.add("div_post");
      Main_box.appendChild(div_post2);

      const post_image2 = this.ownerDocument.createElement('img');
      post_image2.classList.add("post_image")
      post_image2.src = "https://i.pinimg.com/564x/8d/6f/cb/8d6fcb0b52495390d7de7e00a642bb22.jpg";
      div_post2.appendChild(post_image2);


      const div_post3 = this.ownerDocument.createElement('div');
      div_post3.classList.add("div_post");
      Main_box.appendChild(div_post3);

      const post_image3 = this.ownerDocument.createElement('img');
      post_image3.classList.add("post_image")
      post_image3.src = "https://i.pinimg.com/564x/5d/c3/c9/5dc3c936156c0e51ea340a29c5c98868.jpg";
      div_post3.appendChild(post_image3);
    }
    }


customElements.define('app-profile_posting', profile_posting)

