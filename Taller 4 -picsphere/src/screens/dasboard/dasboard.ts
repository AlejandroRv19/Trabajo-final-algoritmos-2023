import { addObserver } from "../../store";
import { loadCss } from "../../utils/main_styles";
import dasboardstyle from "./dasboardstyle.css"
import data_stories from "../../components/Stories/data_stories";
import { setAttributes } from "../../utils/atributtes";
import { AttrStories } from "../../utils/interfaces";

export default class dasboard extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
        addObserver(this);
    }

    connectedCallback() {
        this.render()
    }

    render() {

         if(this.shadowRoot)this.shadowRoot.innerHTML = "";

        loadCss(this, dasboardstyle)

        const main_box = this.ownerDocument.createElement('section');
        main_box.classList.add ("main_box")
        this.shadowRoot?.appendChild(main_box);   



        const div_search = this.ownerDocument.createElement('div');
        div_search.classList.add ("div_search")
        main_box.appendChild(div_search);

        const search = this.ownerDocument.createElement('app-searchc');
        search.classList.add ("search")
        div_search.appendChild(search)


        const div_Stories = this.ownerDocument.createElement('div');
        div_Stories.classList.add ("div_Stories")
        main_box.appendChild(div_Stories);

        const stories = this.ownerDocument.createElement('app-stories');
        stories.classList.add ("stories")
        div_Stories.appendChild(stories)

        // data_stories.forEach(({name,image}) => {
        //         const appStories = this.ownerDocument.createElement("app-stories");
        //         const cardProps: AttrStories = {
        //             name: `${name}`,
        //             image: `${image}`,
        //         }
        //         setAttributes<AttrStories>(cardProps, appStories);
        //         div_Stories.appendChild(appStories)
        //     })


        const div_poster = this.ownerDocument.createElement('div');
        div_poster.classList.add ("div_poster")
        main_box.appendChild(div_poster);
       
        const poster = this.ownerDocument.createElement('app-poster');
        poster.classList.add ("poster")
        div_poster.appendChild(poster);


        const div_navcell = this.ownerDocument.createElement('div');
        div_navcell.classList.add ("div_navcell")
        main_box.appendChild(div_navcell);

        const navcell = this.ownerDocument.createElement('app-navcellphone');
        navcell.classList.add ("navcell")
        div_navcell.appendChild(navcell);

        



        
    }
}

customElements.define('app-dasboard', dasboard)