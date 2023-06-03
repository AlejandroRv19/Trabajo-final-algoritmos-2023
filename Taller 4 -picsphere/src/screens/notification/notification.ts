export default class notification extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {



       
    }
}

customElements.define('app-notification', notification)