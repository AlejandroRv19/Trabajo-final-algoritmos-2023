import { loadCss } from "../../utils/main_styles";
import messages from "./messages.css"

export default class messagess extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {

        if(this.shadowRoot)this.shadowRoot.innerHTML = "";
        loadCss (this , messages)

        
        const Main_wrapper = this.ownerDocument.createElement('section');
        Main_wrapper.classList.add("Main_wrapper")
        this.shadowRoot?.appendChild(Main_wrapper);

        const contentDiv = this.ownerDocument.createElement('div');
        contentDiv.classList.add("contentDiv");
        Main_wrapper.appendChild(contentDiv);

        const divname_user = this.ownerDocument.createElement('div');
        divname_user.classList.add("divname_user");
        contentDiv.appendChild( divname_user);

        const nameUser = this.ownerDocument.createElement('h3');
        nameUser.classList.add("name_user");
        nameUser.textContent = "miukdi";
        divname_user.appendChild(nameUser);

        const divSearch = this.ownerDocument.createElement('div');
        divSearch.classList.add("div_search");
        contentDiv.appendChild(divSearch);

        const Search_input= this.ownerDocument.createElement('input');
        Search_input.classList.add("Search_input");
        Search_input.placeholder = "Search..."
        divSearch.appendChild(Search_input);

        const Mesagges_div = this.ownerDocument.createElement('div');
        Mesagges_div.classList.add("messages_div");
        Main_wrapper.appendChild(Mesagges_div);

        const Mesagges = this.ownerDocument.createElement('h1');
        Mesagges.classList.add("messages");
        Mesagges.textContent = "Messages"
        Mesagges_div.appendChild(Mesagges);

        const Content_messages = this.ownerDocument.createElement('div');
        Content_messages.classList.add("content_mesagges");
        Main_wrapper.appendChild(Content_messages);

        const images_div = this.ownerDocument.createElement('div');
        images_div .classList.add("img_div");
        Content_messages.appendChild(images_div );

        const image1 = this.ownerDocument.createElement('img');
        image1.classList.add("img_friends");
        image1.src = "https://i.pinimg.com/564x/25/1c/68/251c68dfeac4111e11e4e8f660024492.jpg";
        images_div.appendChild(image1);


        const conteiner_generM= this.ownerDocument.createElement('div');
        conteiner_generM.classList.add("container_generalM");
        Content_messages.appendChild(conteiner_generM);

        const text_containerUser= this.ownerDocument.createElement('div');
        text_containerUser .classList.add("text_container");
        conteiner_generM.appendChild(text_containerUser);

        const name_friend = this.ownerDocument.createElement('h3');
        name_friend.classList.add("name_friend");
        name_friend.textContent = "Sara_bolaños";
        text_containerUser.appendChild(name_friend);


        const text_containerhour= this.ownerDocument.createElement('div');
        text_containerhour.classList.add("text_containerH");
        conteiner_generM.appendChild(text_containerhour)
        
        const text_containerM= this.ownerDocument.createElement('div');
        text_containerM.classList.add("text_containerH");
        text_containerhour.appendChild(text_containerM);

        const message_friend = this.ownerDocument.createElement('h4');
        message_friend.classList.add("message_friend");
        message_friend.textContent = "JAJAJA";
        text_containerM.appendChild(message_friend);

        const text_containerH= this.ownerDocument.createElement('div');
        text_containerH.classList.add("text_containerH");
        text_containerhour.appendChild(text_containerH);

        const hour = this.ownerDocument.createElement('h6');
        hour.classList.add("message_hour");
        hour.textContent = "30 min";
        text_containerH.appendChild(hour);




        const Content_messages1 = this.ownerDocument.createElement('div');
        Content_messages1.classList.add("content_mesagges");
        Main_wrapper.appendChild(Content_messages1);

        const images_div1 = this.ownerDocument.createElement('div');
        images_div1 .classList.add("img_div");
        Content_messages1.appendChild(images_div1);

        const image2 = this.ownerDocument.createElement('img');
        image2.classList.add("img_friends");
        image2.src = "https://i.pinimg.com/564x/12/50/0c/12500c48e65726f67f10dffb578a924d.jpg";
        images_div1.appendChild(image2);


        const conteiner_generM1= this.ownerDocument.createElement('div');
        conteiner_generM1.classList.add("container_generalM");
        Content_messages1.appendChild(conteiner_generM1);

        const text_containerUser1= this.ownerDocument.createElement('div');
        text_containerUser1.classList.add("text_container");
        conteiner_generM1.appendChild(text_containerUser1);

        const name_friend1 = this.ownerDocument.createElement('h3');
        name_friend1.classList.add("name_friend");
        name_friend1.textContent = "emanuel";
        text_containerUser1.appendChild(name_friend1);


        const text_containerhour1= this.ownerDocument.createElement('div');
        text_containerhour1.classList.add("text_containerH");
        conteiner_generM1.appendChild(text_containerhour1)
        
        const text_containerM1= this.ownerDocument.createElement('div');
        text_containerM1.classList.add("text_containerH");
        text_containerhour1.appendChild(text_containerM1);

        const message_friend1= this.ownerDocument.createElement('h4');
        message_friend1.classList.add("message_friend");
        message_friend1.textContent = "Holaa";
        text_containerM1.appendChild(message_friend1);

        const text_containerH1= this.ownerDocument.createElement('div');
        text_containerH1.classList.add("text_containerH");
        text_containerhour1.appendChild(text_containerH1);

        const hour1 = this.ownerDocument.createElement('h6');
        hour1.classList.add("message_hour");
        hour1.textContent = "50 min";
        text_containerH1.appendChild(hour1);



        
        const Content_messages2 = this.ownerDocument.createElement('div');
        Content_messages2.classList.add("content_mesagges");
        Main_wrapper.appendChild(Content_messages2);

        const images_div2 = this.ownerDocument.createElement('div');
        images_div2 .classList.add("img_div");
        Content_messages2.appendChild(images_div2);

        const image3= this.ownerDocument.createElement('img');
        image3.classList.add("img_friends");
        image3.src = "https://i.pinimg.com/564x/3d/90/c1/3d90c1eea0268bb66e2e02cf95ceb66a.jpg";
        images_div2.appendChild(image3);


        const conteiner_generM2= this.ownerDocument.createElement('div');
        conteiner_generM2.classList.add("container_generalM");
        Content_messages2.appendChild(conteiner_generM2);

        const text_containerUser2= this.ownerDocument.createElement('div');
        text_containerUser2.classList.add("text_container");
        conteiner_generM2.appendChild(text_containerUser2);

        const name_friend2 = this.ownerDocument.createElement('h3');
        name_friend2.classList.add("name_friend");
        name_friend2.textContent = "Santi_450";
        text_containerUser2.appendChild(name_friend2);


        const text_containerhour2= this.ownerDocument.createElement('div');
        text_containerhour2.classList.add("text_containerH");
        conteiner_generM2.appendChild(text_containerhour2)
        
        const text_containerM2= this.ownerDocument.createElement('div');
        text_containerM2.classList.add("text_containerH");
        text_containerhour2.appendChild(text_containerM2);

        const message_friend2= this.ownerDocument.createElement('h4');
        message_friend2.classList.add("message_friend");
        message_friend2.textContent = "I mention you in...";
        text_containerM2.appendChild(message_friend2);

        const text_containerH2= this.ownerDocument.createElement('div');
        text_containerH2.classList.add("text_containerH");
        text_containerhour2.appendChild(text_containerH2);

        const hour2= this.ownerDocument.createElement('h6');
        hour2.classList.add("message_hour");
        hour2.textContent = "1 hour";
        text_containerH2.appendChild(hour2);
       

   

        const Content_messages3 = this.ownerDocument.createElement('div');
        Content_messages3.classList.add("content_mesagges");
        Main_wrapper.appendChild(Content_messages3);

        const images_div3 = this.ownerDocument.createElement('div');
        images_div3 .classList.add("img_div");
        Content_messages3.appendChild(images_div3);

        const image4= this.ownerDocument.createElement('img');
        image4.classList.add("img_friends");
        image4.src = "https://i.pinimg.com/564x/a5/2a/ba/a52abaf3f0c976b9d51472ee2b580aaf.jpg";
        images_div3.appendChild(image4);


        const conteiner_generM3= this.ownerDocument.createElement('div');
        conteiner_generM3.classList.add("container_generalM");
        Content_messages3.appendChild(conteiner_generM3);

        const text_containerUser3= this.ownerDocument.createElement('div');
        text_containerUser3.classList.add("text_container");
        conteiner_generM3.appendChild(text_containerUser3);

        const name_friend3 = this.ownerDocument.createElement('h3');
        name_friend3.classList.add("name_friend");
        name_friend3.textContent = "Liz_ro";
        text_containerUser3.appendChild(name_friend3);


        const text_containerhour3= this.ownerDocument.createElement('div');
        text_containerhour3.classList.add("text_containerH");
        conteiner_generM3.appendChild(text_containerhour3)
        
        const text_containerM3= this.ownerDocument.createElement('div');
        text_containerM3.classList.add("text_containerH");
        text_containerhour3.appendChild(text_containerM3);

        const message_friend3= this.ownerDocument.createElement('h4');
        message_friend3.classList.add("message_friend");
        message_friend3.textContent = "I'm hungry";
        text_containerM3.appendChild(message_friend3);

        const text_containerH3= this.ownerDocument.createElement('div');
        text_containerH3.classList.add("text_containerH");
        text_containerhour3.appendChild(text_containerH3);

        const hour3= this.ownerDocument.createElement('h6');
        hour3.classList.add("message_hour");
        hour3.textContent = "4 hour";
        text_containerH3.appendChild(hour3);
       
        const navcell = this.ownerDocument.createElement('app-navcellphone');
        navcell.classList.add ("navcell")
        Main_wrapper.appendChild(navcell);
       


    }
}

customElements.define('app-messagess', messagess)