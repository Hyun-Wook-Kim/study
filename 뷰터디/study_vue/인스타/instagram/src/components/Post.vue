<template>
<div class="post">
    <div class="post-header">
      <div class="profile" :style="{ backgroundImage : `url(${data.userImage})` }"></div>
      <span class="profile-name">{{data.name}}</span>
    </div>
    <div class="post-body" :style="{ backgroundImage : `url(${data.postImage})`}" :class="data.filter">
    </div>
    <div class="post-content">
      <p v-if="liked == false" @click="$store.commit('like'); liked=true">{{ $store.state.likes }} likes</p>
      <p v-else-if="liked == true" @click="$store.commit('dislike'); liked=false">{{ $store.state.likes }} likes</p>
      <p><strong>{{ data.name }}</strong> {{ data.content }}</p>
      <p class="date">{{ data.date }}</p>
    </div>
</div> 
</template>


<script>
    export default {
        name: 'Post', 
        props : { 
            data : Object,
        },
        data(){
          return {
            liked : false
          }
        }
    }

</script>


<style>
.post {
  width: 100%;
}
.profile {
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
  float: left;
}
.profile-name {
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 14px;
}
.post-header {
  height: 30px;
  padding: 10px;
}
.post-body {
  background-image: url("https://placeimg.com/640/480/animals");
  height: 450px;
  background-position: center;
  background-size: cover;
}
.post-content {
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
}
.date {
  font-size: 11px;
  color: grey;
  margin-top: -8px;
} 
</style>
