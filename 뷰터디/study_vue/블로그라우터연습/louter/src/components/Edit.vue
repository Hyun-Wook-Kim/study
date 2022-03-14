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
      <tr>
        <td>
             <input type="text" v-model="title">
        </td>
        <td>
              <select name="" id="">
              <option value="">퍼블팀</option>
              <option value="">디자인팀</option>
              <option value="">개발팀</option>
              <option value="">기획팀</option>
              </select>
        </td>
        <td>
              <select name="" id="">
              <option value="">퍼블팀</option>
              <option value="">디자인팀</option>
              <option value="">개발팀</option>
              <option value="">기획팀</option>
              </select>
        </td>
        <td>
            <textarea name="" id="" cols="30" rows="10">
            </textarea>
        </td>
        <td>
                {{ new Date().toDateString() }}
        </td>
        <td>
                         <input type="range" min="0" max="10" v-bind="importance"><span>{{ importance }}</span>
        </td>
        <td>
              <select>
                <option value="">완료</option>
                <option value="" selected>미완료</option>
              </select>
        </td>
  </tr>

      <button @click="$router.push(`/list/${$route.params.id}`)">저장</button>

    </table>



</template>

<script>
export default {
  data(){
    return{
      importance : null,
      title : this.datum.title,
      content : this.datum.content,
    }
  },
  props : {
    datum : Object,
  }
}
</script>

<style>



</style>