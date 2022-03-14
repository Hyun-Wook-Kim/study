<template>
    <div>
        <div v-for="(data, index) in blogData" :key="index">
            <h5 @click="$router.push(`/detail/${index}`)">{{ data.title }} </h5>
            <p>{{ data.content }} </p>
            <p>{{ data.date }} </p>
        </div>

    </div>

</template>

<script>
export default {
    name : 'List',
    props : {
        'blogData' : Object,
    },
}

</script>


<style>
</style>