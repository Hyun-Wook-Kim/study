<template>

<table>
    <tr>
  <td>
    제목
  </td>
  <td>
    to
  </td>
  <td>
    from
  </td>
  <td>
    상세내용
  </td>
  <td>
    날짜
  </td>
  <td>
    중요도
  </td>
  <td>
    완료여부
  </td>
    </tr>
      <tr class="todoList" v-for="(content, index) in list" :key="index" @click="$router.push(`/list/${index}`)">
        <td>
            {{ content.title }} 
        </td>
        <td :class="{ puble : content.to == '퍼블팀', design : content.to == '디자인팀', devel : content.to == '개발팀'}">
            {{ content.to }} 
        </td>
        <td :class="{ puble : content.from == '퍼블팀', design : content.from == '디자인팀', devel : content.from == '개발팀'}">
            {{ content.from }} 
        </td>
        <td>
            {{ content.content }} 
        </td>
        <td>
            {{ content.date }} 
        </td>
        <td :class="{veryImportant : content.importance >= 8}">
            {{ content.importance }} 
        </td>
        <td :class="{waiting : content.done=='미완료', done : content.done=='완료', confirming : content.done=='검수중'}"
>
            {{ content.done }} 
        </td>
  </tr>
</table>

 
 
</template>

<script>
export default {
    name : 'TodoList',
    props : {
        list : Object,
    },

}
</script>

<style>

</style>