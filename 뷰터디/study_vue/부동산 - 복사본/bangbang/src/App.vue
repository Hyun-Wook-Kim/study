<template>

  <h2> 깜짝 세일!! </h2>
  <h3> {{ saleLimit }}까지 구매하시면 총 금액에서 {{salePercent*100}}% 세일~!!</h3>


  <div class="btn_wrap"> <button @click="titleSort">이름순 정렬</button> <button  @click="priceSort">가격순 정렬</button> <button @click="resetSort"> 필터 제거 </button> </div>
  <transition name="fade">
    <Modal v-if="modalOn" @modalClose="modalOn = false" :room="thisItem" :salePercent="salePercent"></Modal>
  </transition>

 
  <div class="wrap">
  <cardList v-for="(room, index) in roomsData" :key="index" :room="room" :num="index"  @click="modalOn = true; thisItem=room"></cardList>
  </div>
</template>

<script>

import roomsData from './assets/data.js'
import cardList from './components/CardList.vue'
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: {
    'cardList' : cardList,
    'Modal' : Modal,
  },
  data() { 
    return {
      roomsData:roomsData,
      modalOn : false,
      thisItem : null,
      saleLimit : '2021-12-31',
      salePercent : 0,
      originalData : [...roomsData],
    }
  },

  mounted() {
    let percent = Math.floor(Math.random() * (30 - 15) + 15);
    this.salePercent = (percent / 100);
  },

  methods: {
    priceSort(){
      this.roomsData.sort((a,b)=> a.price - b.price );
      console.log(roomsData)
    },
    titleSort(){
      this.roomsData.sort((a,b) => {
        let x = a.title.toLowerCase();
        let y = b.title.toLowerCase();
        if(x < y ){
          return -1
        }
        else if(x == y){
          return 0
        }
        else {
          return 1
        }
      })
      console.log(roomsData)
    },
    resetSort() {
      this.roomsData = [...this.originalData]
    }
  },
}
</script>

<style>

.fade-enter-from{
  opacity: 0;
}
.fade-enter-active{
  transition:all 1s;
}
.fade-enter-to{
  opacity: 1;
}
.fade-leave-from{
  opacity: 1;
}
.fade-leave-active{
  transition:all 1s;
}
.fade-leave-to{
  opacity: 0;
}

html{
padding: 0;
margin: 0;
}

body{
padding: 0;
margin: 0;
}

.wrap{
padding: 50px;
}
h2{
text-align: center;
}
h3{
text-align:center
}


</style>
