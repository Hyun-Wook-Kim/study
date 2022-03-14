<template>
<div style="padding : 10px">
  <h4>팔로워</h4>
  <input placeholder="🔍" @input="search($event.target.value)" />
  <div class="post-header" v-for="follower in follower" :key="follower">
    <div class="profile" :style="{backgroundImage : `url(${follower.image})`}"></div>
    <span class="profile-name">{{ follower.name}}</span>
  </div>
</div>
</template>

<script>
import { onMounted, reactive, ref, toRefs, watch, } from 'vue';
import axios from 'axios';
import {useStore} from 'vuex';

export default {
    name : 'myPage',

    props: {
        one : Number,
    },

    data(){
        return{
            searchName : '',

        }
    },

    // created랑 비슷함. 컴포넌트 만들기 전에 이거부터 실행해 주셈!
    setup(props) {

        function search(a){
            follower.value = originalFollower.value
            let filtered = follower.value.filter((value)=> value.name.includes(a) == true)
            follower.value = filtered

}


        // 첫번째는 항상 props, 두번째는 특별한 변수들
        // props 쓸 때는 ref로 감싸셈
        let { one } = toRefs(props);
        console.log(one.value)


        // watch(감시할 거,()=>{코드})
        watch(one, ()=>{
            console.log('변경되었습니다', one)
        })


        // let result =  computed(()=>{
        //     return follower.value.length
        // })
        // console.log(result.value)
        // 얘는 아직 안됨. 데이터가 있기 전에 실행되서. 나중에 옮겨야 함

        let store = useStore();
        console.log(store.state.name2)
        // commit dispatch 다 할 수 있음.
        // 다만 컴포지션에서는 map기능은 못한다고 함.


        //setup 안에 넣을 때는 ref()라는 함수를 만들어야 함.
        let follower = ref([]);
        let originalFollower = ref([])
        // 얘도 ref랑 같은 역할 아는 애임. 보통 array 나 object를 넣고 ref는 원시 값을 주로 넣음.
        let test = reactive({name : 'kim'})
        test



        //composition API setup 안에서 라이프 사이클 쓰려면 on을 앞에 붙혀주면 된다.
        onMounted(()=>{
        axios.get('/follower.json').then((a)=>{
            console.log(a.data)
            follower.value = a.data
            originalFollower.value = a.data
        })
        })



        return {follower, search}
    },
}
</script>

<style>

</style>