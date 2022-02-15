<template>
  <div class="teamList">
    <div class="title">球団名</div>
    <div>
      {{ selectTeam.teamName }}
    </div>
    <div class="title">本拠地</div>
    <div>{{ selectTeam.headquarters }}</div>
    <div class="title">発足日</div>
    <div>
      {{ selectTeam.formatInauguration }}
    </div>
    <div class="title">歴史</div>
    <div>
      <pre>{{ selectTeam.history }}</pre>
    </div>
    <button type="button" v-on:click="backPage">戻る</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Team } from "@/types/team";
import { format } from "date-fns";

@Component
export default class Ex01Detail extends Vue {
  private selectTeam!: Team;

  /**
   * VuexストアのGetter経由で受け取ったリクエストパラメータのIDから１件のチーム情報を取得する.
   *
   */
  created(): void {
    const teamId = parseInt(this.$route.params.id);
    this.selectTeam = this.$store.getters.getTeamById(teamId);
  }

  /**
   * チーム一覧画面に戻る.
   *
   */
  backPage(): void {
    this.$router.push("/Ex01");
  }
}
</script>

<style scoped>
.teamList {
  text-align: left;
}
.title {
  font: bold;
  font-size: 20px;
}
</style>
