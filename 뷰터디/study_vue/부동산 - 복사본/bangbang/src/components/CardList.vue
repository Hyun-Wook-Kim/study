<template>
        <div>
         <h4>{{room.title}}</h4>
        <img :src="room.image" alt="">
        <p>{{room.content}}</p>
        <p>{{room.price}}</p>

        </div>
        


</template>


<script>

export default {
    name : 'cardList',
    props : {
        room : Object,
        num : Number,
    }
}

</script>


<style scoped>

div{
width:800px;
height:auto;
margin-top: 30px;
border-bottom: 5px solid;

}

img{
width:100%;
height:auto;
}


</style>