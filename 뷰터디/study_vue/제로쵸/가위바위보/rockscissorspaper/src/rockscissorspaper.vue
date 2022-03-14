<template>
  <div>                               <!-- 클래스와 스타일에는 객체형식으로 가능 -->
      <div id="computer" :class="{ state:true, hello:false }" :style="computedStyleObject"></div>
      <div>
      <button @click="onClickButton('바위')" v-if="fight">바위</button>
      <button @click="onClickButton('가위')" v-if="fight">가위</button>
      <button @click="onClickButton('보')" v-if="fight">보</button>
      </div>
      <div>{{result}}</div>
      <div>현재 {{score}} 점</div>
  </div>
</template>

<script>

const scores = {
  가위 : 1,
  바위 : 0,
  보 : -1,
}

const computerChoice = (imgCord) => {
  return Object.entries(rspCoords).find(function(v) {
    return v[1] === imgCord
  })[0]
}

let interval = null
let timeout = null
const rspCoords = {
  바위 : '0',
  가위 : '-142px',
  보 : '-284px'
};

export default {
  name: 'App',
  data() {
    return{
      result : '',
      score : 0,
      imgCord : rspCoords.바위,
      fight : true
    }
  },
  computed : {
    computedStyleObject() { 
      return {
        background : `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${this.imgCord} 0`
      }
    }
  },
  methods: {
    changeHand() { 
          interval = setInterval(() => {
      if(this.imgCord == rspCoords.바위){
        this.imgCord = rspCoords.가위
      } else if(this.imgCord == rspCoords.가위){
        this.imgCord = rspCoords.보
      } else if( this.imgCord == rspCoords.보){
        this.imgCord = rspCoords.바위
      }
    },100)
    },
    onClickButton(choice) {
      clearInterval(interval)
      const myScore = scores[choice]
      const computerScore = scores[computerChoice(this.imgCord)]
      const diff = myScore - computerScore
      console.log(myScore, computerScore)
      if(diff === 0){
        this.result = "비겼습니다"
      } else if([-1, 2].includes(diff)){
        this.result = "이겼습니다"
        this.score++
      } else {
        this.result = "졌습니다"
        this.score--
      }
      this.fight = false
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        this.changeHand()
              this.fight = true
      }, 1000);
    }
  },
  created() {
    console.log('만들어짐')
  },
  mounted() {
    console.log('마운트됨')
            this.changeHand()
  },
  updated() {
    console.log('화면이 바뀌어서 다시 그려질 때')
  },
  destroyed() {
    console.log('컴포넌트가 사라짐')
  },
}
</script>

<style scoped>
  #computer {
    width: 142px;
    height: 200px;
    background-position: 0 0;
  }
</style> 
