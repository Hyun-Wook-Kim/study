import AbstractView from "./AbstractView.js";
import EnvSettings from "./EnvSettings.js";
import AccountSettings from './AccountSettings.js'
import DisplaySettings from './DisplaySettings.js'


export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Settings");
    this.subRouter()
  }
  async getHtml() {
    return `
      <h1> welcome. this is Settings </h1>
      <p>이 페이지는 Settings 페이지입니다.</p>
      <a href="?settings" class="sub-router" data-sub-router>환경설정</a>
      <a href="?account" class="sub-router" data-sub-router>계정설정</a>
      <a href="?display" class="sub-router" data-sub-router>화면설정</a>
      <div class="subRouter"></div>
      
      `;
  }

  subRouter(){
    
    document.addEventListener('click',(e)=>{
      if(e.target.matches("[data-sub-router]")){
        e.preventDefault();
        console.log('이건 서브 라우터임')
        const targetUrl = e.target.href;
        console.log(targetUrl)
        history.pushState(null, null, targetUrl)
      }

      this.example()
    
    })

  }


  example(){
    const quary = [
      {
        quary : '?settings',
        view : EnvSettings,
      },
      {
        quary : '?account',
        view : AccountSettings,
      },
      {
        quary : '?display',
        view : DisplaySettings,
      },
    ]
    const currentQuary = '?' + location.search.split('?')[1].toString();
    console.log(currentQuary);
    const potentialMatch = quary.map((quary)=>{
      return {
        quary : quary,
        isMatch : quary.quary === currentQuary
      }
    })
    console.log(potentialMatch)
    let match = potentialMatch.find((quary) => quary.isMatch === true)
    console.log(match)

    if(!match) {
      match = {
        quary : quary[0],
        isMatch : true,
      }
    }

    const subView = new match.quary.view();
    document.querySelector('.subRouter').innerHTML =subView.getHtml();

  }
}
