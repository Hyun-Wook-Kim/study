<template>
  <table-component v-bind:tableData = "tableData"></table-component>
</template>

<script>

export default {
  name: 'App',
  data() {
    return{
      // 2차원 배열, 배열 안에 또 배열이 들어있는 거
      tableData : [
        ['', '' ,''],
        ['', '', ''],
        ['', '', ''],
      ]
    }
  },
  computed : {

  },
  methods: {

  },

}
</script>

<style scoped>
  #computer {
    width: 142px;
    height: 200px;
    background-position: 0 0;
  }
</style> 
