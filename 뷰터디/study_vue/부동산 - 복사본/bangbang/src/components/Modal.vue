<template>
    <div class="blackBg">
        <div class="whiteBg">
        <h4>{{ room.title }}</h4>
        <img :src="room.image" alt="이미지">
        <p>{{ room.content }}</p>
        <span class="originalPrice">{{ room.price }}</span> <span>=></span> <span>{{ newPrice }} </span>
                <p>계약기간</p><input type="range" min="0" max="24" v-model="month"
                ><p> {{ month }} 개월</p> <p>총 금액 : {{ month * newPrice}} 원</p>
        <div class="btn_wrap">
        <span>{{ accuse }} </span><button @click="accuse++">허위 매물 신고</button><button @click="modalClose">닫기</button>
        </div>

        </div>
    </div>

</template>

<script>

export default { 
    name:'Modal',

    methods: {
        modalClose(){
            this.$emit('modalClose')
        }
    },

    props : {
        'room' : Object,
        'salePercent' : Number,
    },

    data() {
        return{
            month:0,
             accuse : '',
        }
    },

    computed : {
        newPrice : function(){
            return this.room.price * (1- this.salePercent)
        }
    },
    watch : {
        month() { 
            if(this.month == 24){
                alert('2년이상 대여는 유선 문의를 이용해주세요!');
                this.month = 23
            }
        }
    }
}

</script>


<style scoped>

.blackBg{
    background: #00000095;
    width: 100%;
    height: 100vh;
    padding: 25px;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
}

.whiteBg{
    background: white;
    position: relative;
    padding: 30px;
    text-align: center;
}

.btn_wrap{
position: absolute;
bottom: 0%;
margin-bottom: 10px;
left:50%;
transform: translateX(-50%);
}

img{
width: 40%;
height: auto;
}

.originalPrice{
text-decoration: line-through;
}

</style>