<template>
    <tr>
        <td-component v-for = "(cellData, index) in rowData" :cell-data = "cellData" :cell-index = "cellIndex" :row-index="rowIndex">
        </td-component>
    </tr>
</template>


<script>

    import TrComponents from './TdComponent'


export default {
    props : {
        rowData : Array,
        rowIndex : Number,
    },
    components : {
        TdComponent,
    }
}

</script>