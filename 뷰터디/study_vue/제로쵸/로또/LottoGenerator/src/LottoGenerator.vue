<template>
  <div>
      <div>당첨 숫자</div>
      <div id="결과창">
        <lotto-ball v-for="(ball, index) in winBalls" :key='ball' v-bind:number = "ball"> {{ winNumbers[index] }} </lotto-ball>
      </div>
      <div>보너스
      </div>
      <lotto-ball v-bind:number = "bonus" v-if = "bonus">보너스</lotto-ball>
      <button v-if="redo" v-bind:number = "bonus" @click="onClickRedo">한 번 더!</button>
  </div>
</template>

<script>
  import LottoBall from './LottoBall.vue'
  const timeouts = []


  function getWinNumbers() {
    console.log('getWinNumbers');
    const candidate = Array(45).fill().map((v, i) => i + 1)
    const shuffle = [];
    while (candidate.length > 0 ) {
      shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length),1)[0])
    }
    const bonusNumber = shuffle[shuffle.length - 1];
    const winNumbers = shuffle.slice(0, 6).sort((p,c) => p - c);
    return [...winNumbers, bonusNumber]

  }

export default {
  components : {
    'lotto-ball' : LottoBall,
  },
  name: 'App',
  data() {
    return{
      winNumbers : getWinNumbers(),
      winBalls : [],
      bonus : null,
      redo : false,
    }
  },
  computed : {

  },
  methods: {
    onClickRedo() {
      this.winNumbers = getWinNumbers()
      this.winBalls = []
      this.bonus = null
      this.redo = false

    },
    showBalls(){
    for (let i = 0; i < this.winNumbers.length -1; i++){
      timeouts[i] = setTimeout( () => {
        this.winBalls.push(this.winNumbers[i]);
      }, (i + 1) * 1000);
    }
    }
  },
  created() {
    console.log('만들어짐')
  },
  mounted() {
    console.log('마운트됨')
    this.showBalls();
    timeouts[6] = setTimeout(() => {
      this.bonus = this.winNumbers[6]
      this.redo = true
    },7000)

  },
  updated() {
    console.log('화면이 바뀌어서 다시 그려질 때')
  },

  beforeDestroy(){
    timeouts.forEach((t) => {
      clearTimeout(t)
    })
  },

  destroyed() {
    console.log('컴포넌트가 사라짐')
    
  },

  watch : { 
    // 근데 watch는 피할 수 있으면 최대한 피하기.
    // 여기는 함수이름의 개념보다는, watch 할 대상의 이름을 적어주면 된다.
    bonus(value, oldval) {
      console.log(value, oldval)
      if(value === 0) {
        this.showBalls()
      }
    }
  }
}
</script>

<style scoped>



</style> 
