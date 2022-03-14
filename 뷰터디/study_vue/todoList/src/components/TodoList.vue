<template>
    <section>
        <!-- 트렌지션 그룹은 애니메이션을 줄 떄 사용하는 속성. -->
        <transition-group tag="ul" name = "list">
        <li v-for = "(todoItem, index) in propsdata" :key="todoItem"  class = "shadow">
            <i class = "checkBtn fas fa-check" aria-hidden = "true"></i>
            {{todoItem}}
            <span class = "removeBtn" type = "button" v-on:click = "removeTodo(todoItem, index)">
                <i class = "fas fa-trash-alt" aria-hidden="true"></i>
            </span>
        </li>
        </transition-group>
    </section>
</template>


<script>
export default{
    props:['propsdata'],
methods : {
    removeTodo(todoItem, index){
        this.$emit('removeTodo', todoItem, index);

    }
}
}
</script>

<style scoped>


/* 뷰 애니메이션,  앞에 붙은 값은 name값이다.*/
.list-enter-active, .list-leave-active {
    transition : all 1s;
}

.list-enter, .list-leave-to{
    opacity:0;
    transform:translateY(30px);
}

ul{
    list-style-type: none;
    padding-left:0px;
    margin-top:0;
    text-align : left;
}

li{
    display : flex;
    min-height: 50px;
    height:50px;
    line-height:50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background : white;
    border-radius : 5px;

}

.checkBtn{
    line-height:45px;
    color:#62acde;
    margin-right:5px;
}

.removeBtn{
    margin-left:auto;
    color:#de4343;
}

</style>