<template>
  <div>
  <div class="header">
    <ul class="header-button-left">
      <li v-if="step == 1" @click="reset">Cancel</li>
      <li v-else-if="step == 2" @click="step--">back</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step == 0"></li>
      <li v-else-if="step == 1" @click="step++">Next</li>
      <li v-else-if="step == 2" @click="uploadPost">등록</li>

    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <Container :instaData="instaData" :step="step" :uploadedImage="uploadedImage" @newText="newText" :filterList="filterList" :selectedFilter="selectedFilter" @filterChange="showFilter"/>


  <button class="moreBtn" @click="getMore">더 보기</button>
  <div class="footer">
    <ul class="footer-button-plus">
      <input type="file" id="file" class="inputfile" @change="upload"/>
      <label for="file" class="input-plus">+</label>
    </ul>
 </div>
  </div>
</template>

<script>

import Container from './components/Container.vue'
import instaData from './assets/instaData'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    Container : Container
  },
  data(){
    return{
      instaData : instaData,
      step : 0,
      bringIndex:0,
      uploadedImage : '',
      uploadedText: '',
      filterList : [ "aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson", 
"inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua", 
"reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"],
      selectedFilter: '',


    }
  },
  methods: {
    showFilter(value){
      console.log('받은 필터', value)
      this.selectedFilter = value
    },

    getMore(){
      axios.get(`https://codingapple1.github.io/vue/more${this.bringIndex}.json`).then((a)=>{
        this.instaData.push(a.data)
        this.bringIndex++
      }).catch(()=>{
        alert('마지막 게시룸입니다')
      })
    },
    upload(e){
      let newFile = e.target.files;
      let newFileUrl = URL.createObjectURL(newFile[0]);
      this.uploadedImage = newFileUrl;
      console.log(this.uploadedImage)
      this.step++

    },
    reset(){
      this.step = 0;
      this.uploadedImage = "";
    },
    newText(value){
      this.uploadedText = value
    },
    uploadPost(){
       let newpost = {
      name: "Kim Hyun",
      userImage: "https://placeimg.com/100/100/arch",
      postImage: this.uploadedImage,
      likes: 0,
      date: new Date(),
      liked: false,
      content: this.uploadedText,
      filter: this.selectedFilter,
    }
      this.instaData.unshift(newpost);
      this.uploadedImage="";
      this.uploadedText="";
      this.step = 0;
    }
  },
}
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}

.moreBtn{
  width:100%;
  margin-top: 20px;
  font-weight: 600;
  background: none;
  border: none;
  cursor: pointer;
}

.moreBtn:hover{
  color: blueviolet;
}
</style>
