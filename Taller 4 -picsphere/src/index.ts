import "./components/export"
import "./screens/export"
import { addObserver, appState } from "./store";
import { Screens } from "./types/store";
import { loadCss } from "./utils/main_styles";
import index from "./utils/index.css"


class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
        // addObserver(this);
    }
       
    connectedCallback() {
        this.render()
    }
       
    render() {

        loadCss (this, index)

        // switch (appState.screen) {
        //     case Screens.LOGIN:
        //       const login = this.ownerDocument.createElement("app-login");
        //       this.shadowRoot?.appendChild(login);
        //       break;
    
        //     case Screens.REGISTER:
        //       const signup = this.ownerDocument.createElement("app-register");
        //       signup.innerText = "esta es la pantalla de signup";
        //       this.shadowRoot?.appendChild(signup);
        //       break;
    
        //     case Screens.DASBOARD:
        //       const dasboard = this.ownerDocument.createElement("app-dasboard");
        //       this.shadowRoot?.appendChild(dasboard);
        //       break;
    
        //     default:
        //       break;
        //   }


        const Main_wrapper = this.ownerDocument.createElement('section');
        Main_wrapper.classList.add("Main_wrapper")
        this.shadowRoot?.appendChild(Main_wrapper);
        

        const dasboard_wrapper = this.ownerDocument.createElement('div');
        dasboard_wrapper.classList.add("dasboard_wrapper")
        Main_wrapper.appendChild(dasboard_wrapper);

        const dasboard = this.ownerDocument.createElement('app-dasboard');
        dasboard_wrapper.appendChild(dasboard);


        const login_wrapper = this.ownerDocument.createElement('div');
        login_wrapper.classList.add("login_wrapper")
        Main_wrapper.appendChild(login_wrapper);

        const Login = this.ownerDocument.createElement('app-login');
        login_wrapper.appendChild(Login);


        const register_wrapper = this.ownerDocument.createElement('div');
        register_wrapper.classList.add("register_wrapper")
        Main_wrapper.appendChild(register_wrapper);

        const Register = this.ownerDocument.createElement('app-register');
        register_wrapper.appendChild(Register);


        const message_wrapper = this.ownerDocument.createElement('div');
        message_wrapper.classList.add("message_wrapper")
        Main_wrapper.appendChild(message_wrapper);

        const message = this.ownerDocument.createElement('app-message');
        message_wrapper.appendChild(message);


        const notification_wrapper = this.ownerDocument.createElement('div');
        notification_wrapper.classList.add("notification_wrapper")
        Main_wrapper.appendChild(message_wrapper);

        const notification = this.ownerDocument.createElement('app-notification');
        notification_wrapper.appendChild(notification)


        const search_wrapper = this.ownerDocument.createElement('div');
        search_wrapper.classList.add("search_wrapper")
        Main_wrapper.appendChild(search_wrapper);

        const search = this.ownerDocument.createElement('app-search');
        search_wrapper.appendChild(search)


        const user_profile_wrapper = this.ownerDocument.createElement('div');
        user_profile_wrapper.classList.add("user_profile_wrapper")
        Main_wrapper.appendChild(user_profile_wrapper);

        const profile = this.ownerDocument.createElement('user_profile');
        user_profile_wrapper.appendChild(profile)

       
    }
}

customElements.define('app-container', AppContainer)