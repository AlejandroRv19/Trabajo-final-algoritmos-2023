export default class profile_top extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {

        const Main_box = this.ownerDocument.createElement('section');
        Main_box.classList.add("Main_box")
        this.shadowRoot?.appendChild(Main_box);

        const div_top = this.ownerDocument.createElement('div');
        div_top.classList.add("div_top")
        Main_box.appendChild(div_top);

        const div_button = this.ownerDocument.createElement('button');
        div_button.classList.add("div_button")
        div_button.innerText = ("Latiana")
        div_top.appendChild(div_button);


        const div_top2 = this.ownerDocument.createElement('div');
        div_top2.classList.add("div_top2")
        Main_box.appendChild(div_top);

        const div_h2 = this.ownerDocument.createElement('h1');
        div_h2.classList.add("div_h2")
        div_h2.innerText = ("Latiana")
        div_top2.appendChild(div_h2);

        
    }
}

customElements.define('app-profile_top', profile_top)