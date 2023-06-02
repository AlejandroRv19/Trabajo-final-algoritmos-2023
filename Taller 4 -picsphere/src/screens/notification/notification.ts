export default class notification extends HTMLElement {
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

        const divnotificaction = this.ownerDocument.createElement('div');
        divnotificaction.classList.add("divnotificaction")
        Main_wrapper.appendChild(Main_wrapper);

        




       

       
    }
}

customElements.define('app-notification', notification)