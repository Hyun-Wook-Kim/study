<template>
  <div>
    <div id="screen" v-bind:class="state" @click="onClickScreen"> {{ message }} </div>
    <template v-if="result.length">             <!-- Array.reduce(accumulate(누적값), cur(자신의값), index) => {return acc + cur}, 초기값)-->
      <div>평균 시간 : {{ average }}ms</div>
      <button @click="onReset">리셋</button>
    </template>
  </div>
</template>

<script>
let startTime = 0;
let endTIme = 0;
let timeout = null;


export default {
  name: 'App',
  data() {
    return{
    result : [],
    state : 'waiting',
    message : '클릭해서 시작하세요!',
    }
  },
  computed : {
    average() {
      return this.result.reduce((a, c) => a + c, 0) / this.result.length || 0
    }
  },
  methods: {
    onReset() {
      this.result = []
    },
    onClickScreen() { 
      if(this.state === 'waiting'){
        this.state = 'ready'
        this.message = "초록색이 되면 클릭하세요!"
        timeout = setTimeout(() => {
          this.state = 'now'
          this.message = "지금 클릭!"
          startTime = new Date();
        }, Math.floor(Math.random() * 1000) + 2000);
      } else if (this.state == 'ready'){
        this.state = 'waiting';
        this.message = "너무 빨랐어요! 초록색이 되면 클릭하세요!"
        clearTimeout(timeout)
      } else if (this.state == 'now'){
        this.state = 'waiting';
        this.message = "클릭해서 시작하세요!"
          endTIme = new Date();
          this.result.push(endTIme - startTime)
      }
    }
  },
}
</script>

<style>
#screen{
width:300px;
height: 200px;
text-align: center;
user-select: none;
font-weight: bold;
}

#screen.waiting{
background-color: aqua;
}
#screen.ready{
background-color: red;
}
#screen.now{
background-color: greenyellow;
}

</style>

