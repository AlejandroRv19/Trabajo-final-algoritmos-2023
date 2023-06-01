import "./components/export"
import "./screens/export"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {


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


        const profile_wrapper = this.ownerDocument.createElement('div');
        profile_wrapper.classList.add("profile_wrapper")
        Main_wrapper.appendChild(profile_wrapper);

        const profile = this.ownerDocument.createElement('app-profile');
        profile_wrapper.appendChild(profile)

       
    }
}

customElements.define('app-container', AppContainer)