<template>
<table>
 <tr-component v-for="(rowData, index) in tableData" :row-Data = "rowData" :row-index = "index">
 </tr-component>
</table>

</template>

<script>
    import TrComponents from './TrComponents'

    export default { 
        props: {
            tableData : Array,
        },
        components : {
            TrComponents,
        },
    }; 

</script>