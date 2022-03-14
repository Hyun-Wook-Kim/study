<template>
<div>

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
      <tr class="todoList" @click="$router.push(`/list/${$route.params.id}/edit`)">
        <td>
            {{ list[$route.params.id].title }} 
        </td>
        <td>
            {{ list[$route.params.id].to }} 
        </td>
        <td>
            {{ list[$route.params.id].from }} 
        </td>
        <td>
            {{ list[$route.params.id].content }} 
        </td>
        <td>
            {{ list[$route.params.id].date}} 
        </td>
        <td>
            {{ list[$route.params.id].importance }} 
        </td>
        <td>
            {{ list[$route.params.id].done }} 
        </td>
  </tr>
    </table>
    <div class="router_wrap">
    <router-link to="/list">리스트로 돌아가기</router-link>
    </div>

    <router-view :datum="list[$route.params.id]"></router-view>

</div>
</template>

<script>
export default {
    name : 'DetailTodo',
    props : {
        list : Object,
    }
}
</script>

<style>

</style>