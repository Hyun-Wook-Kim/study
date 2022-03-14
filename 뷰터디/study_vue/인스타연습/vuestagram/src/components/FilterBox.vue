<template>
  <div class="filter-item" :style="{backgroundImage : `url(${uploadedImage})`}" ></div> 
</template>

<script>
export default {
    props : {
        uploadedImage : String,
        filterList : Array,
    }
}
</script>

<style>
    .filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : white;
  background-size: cover;
  background-position : center;
}
</style>