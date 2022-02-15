<template>
  <div>
    <h1>ホテル検索</h1>
    <div><input type="text" v-model="searchPrice" />円以下</div>
    <button type="button" v-on:click="search">検索</button>

    <div class="inputTable">
      <table v-for="hotel of searchHotels" v-bind:key="hotel.id">
        <tr>
          <th>ホテル名</th>
          <td>検索結果</td>
        </tr>
        <tr>
          <th>最寄駅</th>
          <td>検索結果</td>
        </tr>
        <tr>
          <th>価格</th>
          <td>検索結果</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class XXXComponent extends Vue {
  private searchPrice = "";
  private searchHotels = [];
}
</script>

<style scoped></style>
