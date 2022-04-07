import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle('환경설정')
    }

    getHtml(){
        return `
            <div>
                <p>이거는 환경설정이에요!</p>
            </div>
        `    
    }

}