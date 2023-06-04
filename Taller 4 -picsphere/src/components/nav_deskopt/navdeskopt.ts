import { loadCss } from "../../utils/main_styles";
import navD from "./navD.css"


export default class desk extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        

        loadCss(this, navD)

        const Main_box = this.ownerDocument.createElement('section');
        Main_box.classList.add("Main_box");
        this.shadowRoot?.appendChild(Main_box);

        
        const navBar = this.ownerDocument.createElement('div');
        navBar.classList.add("nav_bar");
        Main_box.appendChild(navBar);
        
        const homeButton = this.ownerDocument.createElement('button');
        homeButton.classList.add("nav_button");
        homeButton.innerText = "Home";
        homeButton.innerHTML = '<img src=".././src/utils/img/Home_button.png" alt="home" />'; 
        navBar.appendChild(homeButton);

       
        const navBar_2 = this.ownerDocument.createElement('div');
        navBar_2.classList.add("nav_bar");
        Main_box.appendChild(navBar_2);
        
        const notificationsButton = this.ownerDocument.createElement('button');
        notificationsButton.classList.add("nav_button");
        notificationsButton.innerText = "Notifications";
        notificationsButton.innerHTML = '<img src=".././src/utils/img/notification_button.png" alt="notification" />'; 
        navBar_2.appendChild(notificationsButton);


        const navBar_3 = this.ownerDocument.createElement('div');
        navBar_3.classList.add("nav_bar");
        Main_box.appendChild(navBar_3);
       
        const searchButton = this.ownerDocument.createElement('button');
        searchButton.classList.add("nav_button");
        searchButton.innerText = "Search";
        searchButton.innerHTML = '<img src=".././src/utils/img/Search_image.png" alt="Search" />'; 
        navBar_3.appendChild(searchButton);


        const navBar_4 = this.ownerDocument.createElement('div');
        navBar_4.classList.add("nav_bar");
        Main_box.appendChild(navBar_4);
       
        const commentsButton = this.ownerDocument.createElement('button');
        commentsButton.classList.add("nav_button");
        commentsButton.innerText = "Comments";
        commentsButton.innerHTML = '<img src=".././src/utils/img/message_button.png" alt="Comments" />'; 
        navBar_4.appendChild(commentsButton);


        const navBar_5 = this.ownerDocument.createElement('div');
        navBar_5.classList.add("nav_bar");
        Main_box.appendChild(navBar_5);
        
        const profileButton = this.ownerDocument.createElement('button');
        profileButton.classList.add("nav_button");
        profileButton.innerText = "Profile";
        profileButton.innerHTML = '<img src=".././src/utils/img/profile_button.png" alt="profile" />'; 
        navBar_5.appendChild(profileButton);
        
    }
}

customElements.define('app-desk', desk)