<template>

    <div class = "ball" :style = "background"> {{ number }} </div>

</template>


<script>

    export default {
        name : 'LottoBall',
        // props는 일종의 read-only 값이라고 생각하면 된다.
        props : {
            number: Number,
        },

        computed : {
            background() {
            let background;
            if(this.number <= 10){
                background = 'red'
            } else if (this.number <= 20){
                background = 'orange'
            } else if (this.number <= 30) {
                background = 'green'
            } else if (this.number <= 40) {
                background = "blue"
            } else {
                background = 'green'
            }
            return { 
                background,
                numberData : this.number,
            }
            }
        },
        methods : {
        }
    }

</script>

<style>


.ball {
        display : inline-block;
        border: 1px solid black;
        border-radius: 20px;
        width: 40px;
        height: 40px;
        line-height: 40px;
        font-size: 20px;
        text-align: center;
        margin-right: 20px;
    }


</style>