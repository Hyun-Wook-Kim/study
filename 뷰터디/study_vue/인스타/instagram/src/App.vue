<template>
<div>
  <h4>안녕 {{ $store.state.name }} {{ $store.state.age }}</h4>
  <input type="text" v-model="name">
  <button @click="$store.commit('이름변경', name)">이름변경</button>
  <button @click="나이변경(10)">나이변경</button>

<div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step == 1" @click="step++">Next</li>
      <li v-if="step == 2" @click="publish">발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
</div>


  <p>{{내이름}} {{age}} {{likes}} </p>
  <Container :instaData="instaData" :step="step" :uploadedImg="uploadedImg" @textSend="textReceive" :selectedFilter="selectedFilter"/>
  <button @click="more">더 보기</button>

  <p> {{ $store.state.more }} </p>
                <!-- commit은 mutation, dispatch는 actions에서 가져옴 -->
  <button @click="$store.dispatch('getData')">더보기 버튼</button>



  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile" multiple accept="image/*" />
      <label for="file" class="input-plus">+</label>
    </ul>
 </div>



  <button @click="step = 0">피드</button>
  <button @click="step = 1">필터선택</button>
  <button @click="step = 2">게시물등록</button>
  <button @click="step = 3">마이페이지</button>

</div>
</template>

<script>
import Container from './components/Container.vue'
import instaData from './assets/instaData.js'
import  axios from 'axios'
import {mapState} from 'vuex'
import {mapMutations} from 'vuex'



export default {
  name: 'App',
  components: {
    Container
  },
  data(){
    return{
    instaData : instaData,
    pageIndex : '0',
    step : 0,
    uploadedImg : '',
    uploadedText: '',
    selectedFilter : '',
    name : '',
    // more : {},
    카운터 : 0,
    }
  },

  // computed 함수는 꼭 return을 지어놔야 함.
  computed : {
    name2(){
      return this.$store.state.name
    },
    ...mapState(['name2','age','likes',]),
     ...mapState({내이름 : 'name2', })   // <<- 이름을 정해주고 싶을 땐  오브젝트 형식으로 가능.
  },

  methods: {
    ...mapMutations(['setMore','like','dislike','나이변경']),


    now(){
      return new Date()
    },
    // 실패했을 경우에는 catch, 성공했을 때는 then,
    more(){
      axios.get(`https://codingapple1.github.io/vue/more${this.pageIndex}.json`).then((result) =>{
        this.instaData.push(result.data)
        this.pageIndex ++ 
      }
      ).catch(()=>{alert('마지막 게시물입니다')})
    },
    upload(e){
      let file = e.target.files;
      console.log(file[0])
      if(file[0].type.indexOf('image') == -1){
        alert('이미지 파일만 가능합니다');
        return false;
      }
      let url = URL.createObjectURL(file[0]);
      this.uploadedImg = url;
      console.log(this.uploadedImg)
      this.step++;
    },

    publish(){
      let myPost = {
      name: "Kim Hyun",
      userImage: "https://placeimg.com/100/100/arch",
      postImage: this.uploadedImg,
      likes: 0,
      date: "May 15",
      liked: false,
      content: this.uploadedText,
      filter: this.selectedFilter,
    };
      this.instaData.unshift(myPost)
      this.step = 0;
      this.selectedFilter = '';
      this.uploadedImg = '';
    },
      textReceive(value){
        this.uploadedText = value;
}
  },
  mounted() {
    this.emitter.on('filter',(filter)=>{
      this.selectedFilter = filter
      console.log(filter)
    })
  },


}
</script>

<style src="./assets/style.css">


</style>
