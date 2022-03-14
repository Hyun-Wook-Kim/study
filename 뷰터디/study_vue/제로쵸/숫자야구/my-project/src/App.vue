<template>
  <div id="app">
    <form @submit.prevent>
    <input ref="answer" minlength="4" maxlength="4" v-model="value">
    <div> {{ result }} </div>
    <button type="submit" @click="onSubmitForm">입력</button>
    </form>
    <div>시도 : {{ tries.length }}</div>
    <ul>
    <li v-for="(t , index) in tries" :key="index">
    <div>{{t.try}}</div>
    <div>{{ t.result }}</div>
    </li>
    </ul>
  </div>
</template>

<script>

const getNumbers = () => {
  const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const array = []
  for (let i = 0; i < 4; i++) {
    const chosen = candidates.splice(Math.floor(Math.random() * (9 - i)) , 1)[0]
    array.push(chosen)
  }
  return array
}

export default {
  name: 'App',
  data () {
    return {
      answer: getNumbers(),
      tries: [],
      value: '',
      result: '',
      count: []
    }
  },
  components: {},
  methods: {
    onSubmitForm (e) {
      this.count++
      if(this.value === this.answer.join('')) {
        this.tries = []
        this.result = '홈런'
        alert('게임을 다시 실행합니다.')
        
      }
      else{
        if(this.tries.length >= 9){
          alert(`패배! 답은 ${this.answer.join('')} 이었습니다.`)
          this.tries = []
          this.count = []
        } else{
                  let strike = 0;
        let ball = 0;
        const answerArray = this.value.split('').map(v => parseInt(v))
        for (let i = 0; i < 4; i++) {
          if (answerArray[i] === this.answer[i]) { // 숫자 자리수 모두 정답 ()
            strike++
          } else if (this.answer.includes(answerArray[i])) { // 숫자만 정답 (볼)
            ball++
          }
        }
        this.tries.push({
          result: `${strike} 스트라이크 ${ball} 볼 입니다.`,
          try: this.value
        })
        }

      }
      this.value = ''
      this.$refs.answer.focus()
    }
  }
}
</script>









<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
