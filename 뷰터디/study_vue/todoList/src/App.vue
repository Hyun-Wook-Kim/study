<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodo = "addTodo"></TodoInput>
    <TodoList v-bind:propsdata = "todoItems" v-on:removeTodo="removeTodo"></TodoList>
    <TodoFooter v-on:removeAll = "removeAll"></TodoFooter>
  </div>
</template>


<script>


</script>
<script>

import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  components : {
    'TodoHeader' : TodoHeader,
    'TodoInput' : TodoInput,
    'TodoList' : TodoList,
    'TodoFooter' : TodoFooter,
  },



  data() { 
    return { 
      todoItems : []
    }
  },


  methods : {
    addTodo(todoItem){
      console.log(todoItem)
      localStorage.setItem(todoItem, todoItem);
      console.log(this.todoItems);
      console.log(todoItem)
      this.todoItems.push(todoItem);
    },

    removeAll(){
      localStorage.clear();
      this.todoItems = [];
    },

    removeTodo(todoItem, index){
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index,1)
    }

  },

  created(){
    if (localStorage.length > 0){
        for (let i = 0; i < localStorage.length; i++){
            this.todoItems.push(localStorage.key(i));
        }
    }
},



}
</script>

<style>

    body{
        text-align:center;
        background-color:#f6f6f8;
    }
    input{
        border-style: groove;
        width:200px;
    }

    button{
        border-style:groove
    }

    .shadow{
        box-shadow : 5px 10px 10px rgba(0,0,0,0.03)
    }
</style>
