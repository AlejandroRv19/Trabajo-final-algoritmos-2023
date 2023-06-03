import { loadCss } from "../../../utils/main_styles";
import profilenstyle from "./profilenstyle.css"

export default class profilenumbers extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {

        loadCss(this, profilenstyle)

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
      image1.src = "https://i.pinimg.com/564x/df/71/28/df7128221ffd3379aaee33aaa37f8841.jpg";
      div_image.appendChild(image1);


      const div_text1 = this.ownerDocument.createElement('div');
      div_text1.classList.add ("div_text1") ; 
      div_profile_name.appendChild(div_text1);

      const text1 = this.ownerDocument.createElement('h4');
      text1.classList.add("text1")
      text1.textContent = "Samatha"; 
      div_text1.appendChild(text1);



      const div_number_post = this.ownerDocument.createElement('div');
      div_number_post.classList.add("div_number_post");
      Main_box.appendChild(div_number_post);


     const div_text2 = this.ownerDocument.createElement('div');
     div_text2.classList.add("div_text2");
     div_number_post.appendChild(div_text2);

     const text2 = this.ownerDocument.createElement('h3');
     text2.classList.add("text2")
     text2.textContent = "9";
     div_text2.appendChild(text2);

     const div_text2_1 = this.ownerDocument.createElement('div');
     div_text2_1.classList.add("div_text2_1");
     div_number_post.appendChild(div_text2_1);

     const text2_1 = this.ownerDocument.createElement('p');
     text2_1.textContent = "post";
     div_text2.appendChild(text2_1);





     const div_number_followers = this.ownerDocument.createElement('div');
     div_number_followers.classList.add("div_number_followers");
     Main_box.appendChild(div_number_followers);
      
      
     const div_text = this.ownerDocument.createElement('div');
     div_text.classList.add("div_text");
     div_number_followers.appendChild(div_text);

     const text3 = this.ownerDocument.createElement('h3');
     text3.textContent = "1,500";
     div_text.appendChild(text3);


     const div_text_2 = this.ownerDocument.createElement('div');
     div_text_2.classList.add("div_text_2");
     div_number_followers.appendChild(div_text_2);


     const text_4 = this.ownerDocument.createElement('p');
     text_4.textContent = "Followers";
     div_text_2.appendChild(text_4);





     const div_number_follow = this.ownerDocument.createElement('div');
     div_number_follow.classList.add("div_number_follow");
     Main_box.appendChild(div_number_follow);



    const div_text_1 = this.ownerDocument.createElement('div');
    div_text_1.classList.add("div_text_1");
    div_number_follow.appendChild(div_text_1);

    const div_text_5 = this.ownerDocument.createElement('h3');
    div_text_5.textContent = "900";
    div_text_1.appendChild(div_text_5);

    const div_textf = this.ownerDocument.createElement('div');
    div_textf.classList.add("div_textf");
    div_number_follow.appendChild(div_textf);

    const textf = this.ownerDocument.createElement('p');
    textf.textContent = "following";
    div_textf.appendChild(textf);

        
    }
}

customElements.define('app-profilenumbers', profilenumbers)