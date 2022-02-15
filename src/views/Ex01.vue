<template>
  <div class="teamList">
    <h1>野球チーム一覧</h1>
    <div v-for="team of getTeams" v-bind:key="team.id">
      <router-link :to="'/Ex01Detail/' + team.id">
        {{ team.teamName }}
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Team } from "@/types/team";
@Component
export default class Ex01 extends Vue {
  /**
   * Vuexストア内のチーム一覧を取得して返す.
   *
   * @returns チーム一覧情報
   */
  get getTeams(): Array<Team> {
    return this.$store.getters.getTeams;
  }
}
</script>

<style scoped>
.teamList {
  text-align: left;
}
</style>
