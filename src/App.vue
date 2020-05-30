<template>
  <v-app style="background-color: #384256">
    <v-app-bar
      app
      color="#4c586a"
      dark
    >
         <div class="d-flex align-center goback-icon">
          <v-icon class="set-icon">mdi-chevron-left</v-icon>
        </div>

      <div class="d-flex align-center title">
        <span>更新公告</span>
      </div>

    </v-app-bar>
    <v-content>
      <HelloWorld/>
    </v-content>
    <v-bottom-navigation
            v-model="bottomNav"
            app
            dark
            background-color="#4c586a"
            width="100%"
            grow
            class="d-flex"
    >
      <v-btn value="home">
        <span>首页</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn value="favorites">
        <span>我的矿机</span>
        <v-icon>mdi-store</v-icon>
      </v-btn>

      <v-btn value="nearby">
        <span>我的团队</span>
        <v-icon>mdi-cart</v-icon>
      </v-btn>
      <v-btn value="nearby">
        <span>交易平台</span>
        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
      <v-btn value="nearby">
        <span>会员中心</span>
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data: () => ({
      bottomNav: 'recent',
  }),
};
</script>

<style lang="scss" scoped>
  @import "assets/styles/global";
  .set-icon {
    font-size: px2rem(90) !important;
  }
  .goback-icon {
    position: absolute
  }
  .title {
    display: flex;
    flex: 1;
    justify-content: center;
  }
</style>
