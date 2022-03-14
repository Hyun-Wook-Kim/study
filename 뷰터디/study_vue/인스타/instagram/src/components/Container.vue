<template>

    <div>

    <div class="postPage"  v-if="step == 0">
    <Post v-for="(data, index) in instaData" :data="data" :key="index"></Post>
    </div>

    <!-- 필터선택페이지 -->
    <div class="filterPage" v-if="step == 1">

  <div class="upload-image" :style="{backgroundImage : `url(${uploadedImg})`}" :class="selectedFilter"></div>
  <div class="filters">

  <FilterBox v-for="filter in filterList" :key="filter" :uploadedImg="uploadedImg" :class="filter" :filter="filter">

  </FilterBox>

  </div>
      </div>

<!-- 글작성페이지 -->
    <div class="filterPage" v-if="step == 2">
  <div class="upload-image"  :style="{backgroundImage : `url(${uploadedImg})`}" :class="selectedFilter"></div>
  <div class="write">
    <textarea class="write-box" v-model="text" @input="this.$emit('textSend', $event.target.value)">write!</textarea>
  </div>
    </div>

  <!--마이페이지 -->
  <div v-if="step == 3">
  <MyPage :one="1"></MyPage>  
  </div>


</div>


</template>

<script>
import  Post from './Post'
import FilterBox from './FilterBox.vue'
import MyPage from './MyPage.vue'

export default { 
    name: 'Container',
    components: {
        Post : Post,
        FilterBox : FilterBox,
        MyPage : MyPage,
    },

    props : {
        instaData : Array,
        step : Number,
        uploadedImg: String,
        selectedFilter : String,
        
    },

    data(){
      return {
        text: '',
        filterList : [ "aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson", 
"inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua", 
"reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"],

      }
    },



}
</script>

<style>

.upload-image{
width: 100%;
height: 450px;
background: cornflowerblue;
background-size : cover;
}
.filters{
overflow-x:scroll;
white-space: nowrap;
}
.filter-1 {
width: 100px;
height: 100px;
background-color: cornflowerblue;
margin: 10px 10px 10px auto;
padding: 8px;
display: inline-block;
color : white;
background-size: cover;
}
.filters::-webkit-scrollbar {
height: 5px;
}
.filters::-webkit-scrollbar-track {
background: #f1f1f1; 
}
.filters::-webkit-scrollbar-thumb {
background: #888; 
border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
background: #555; 
}
.write-box {
border: none;
width: 90%;
height: 100px;
padding: 15px;
margin: auto;
display: block;
outline: none;
}

</style>