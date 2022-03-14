<template>
<div>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Wook's blog</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">내 소개</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
          포폴연결
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">한화시스템</a>
          <a class="dropdown-item" href="#">워프레임</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">프로필</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>


<router-link to="/list">리스트페이지</router-link>
<router-link to="/Greeting">홈페이지</router-link>
<!-- <router-link to="/Detail" :blogData="blogData">디테일</router-link> -->
<router-view :blogData="blogData">

</router-view>

<!-- <List :blogData="blogData"></List> -->

<!-- <button type="button" class="btn btn-primary">Primary</button> -->

</div>
</template>

<script>
// import List from './components/List.vue'
import data from './assets/data'

export default {
  name: 'App',
  components: {
    // List : List
  },
  data(){
    return{
      blogData : data,
    }
  },
  
}
</script>

<style>

</style>
