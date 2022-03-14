<template>
    <div class = "clearAllcontainer">
        <span class = "clearAllBtn" v-on:click = "removeAll">Clear All</span>
    </div>

</template>


<script>
export default{

    methods : {
        removeAll(){
            this.$emit('removeAll')
        }
    }


}
</script>

<style scoped>

    .clearAllcontainer{
        width:8.5rem;
        height:50px;
        line-height:50px;
        background-color:white;
        border-radius : 5px;
        margin : 0 auto;
    }
    .clearAllBtn{
        color:#e20303;
        display: black;
    }

</style>