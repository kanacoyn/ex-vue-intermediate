<template>
  <div>
    <h1>ホテル検索</h1>
    <div><input type="text" v-model="searchPrice" />円以下</div>
    <button type="button" v-on:click="search">検索</button>

    <div class="inputTable">
      <table v-for="hotel of searchHotels" v-bind:key="hotel.id">
        <tr>
          <th>ホテル名</th>
          <td>
            {{ hotel.hotelName }}
          </td>
        </tr>
        <tr>
          <th>最寄駅</th>
          <td>{{ hotel.nearestStation }}</td>
        </tr>
        <tr>
          <th>価格</th>
          <td>{{ hotel.price }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Hotel } from "@/types/hotel";
@Component
export default class Ex02 extends Vue {
  private searchPrice = "";
  private searchHotels = [];

  /**
   * 価格で検索する.
   *
   * @returns 入力された値段以下のホテルを検索
   */
  search(): void {
    let searchPriceNumber = parseInt(this.searchPrice);
    this.searchHotels = this.$store.getters.getHotelByPrice(searchPriceNumber);
    if (this.searchPrice === "") {
      // 結果が0件なら全件検索
      this.searchHotels = this.$store.getters.getHotels;
    }
  }
}
</script>

<style scoped>
table {
  border: solid;
}
</style>
