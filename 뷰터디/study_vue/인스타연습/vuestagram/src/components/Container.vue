<template>
  <div>
    <div class="postSection" v-if="step==0">
    <Post v-for="post in instaData" :key="post" :post="post"   />  
    </div>

<!-- 필터선택페이지 -->
    <div  v-if="step == 1">
  <div class="upload-image" :style="{backgroundImage : `url(${uploadedImage})`}" :class="selectedFilter"></div>
  <div class="filters">
    <FilterBox :uploadedImage="uploadedImage" v-for="filter in filterList" :key="filter" :class="filter" @click="sendFilter(filter)"></FilterBox>
  </div>
    </div>

<!-- 글작성페이지 -->
<div  v-if="step==2">
  <div class="upload-image"  :style="{backgroundImage : `url(${uploadedImage})`}"  :class="selectedFilter"></div>
  <div class="write">
    <textarea class="write-box" placeholder="내용을 입력하세요!" @input="show($event.target.value)"></textarea>
  </div>
  </div>
</div>
  

</template>

<script>
import Post from './Post.vue'
import FilterBox from './FilterBox.vue'

export default {
    
    components : {
        Post : Post,
        FilterBox : FilterBox,
    },
    props : {
        instaData : Array,
        step : Number,
        uploadedImage : String,
        filterList : Array,
        selectedFilter : String,
    },
    methods: {
        show(value){
            this.$emit('newText',value)
        },
        sendFilter(filter){
            console.log('필터 변경', filter)
            this.$emit('filterChange', filter)
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