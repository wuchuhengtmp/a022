<template>
    <div>
        <v-bottom-navigation
                v-model="bottomNav"
                app
                dark
                background-color="#4c586a"
                width="100%"
                grow
                class="d-flex"
        >
            <v-btn value="home" class="navigation">
                <span>首页</span>
                <span class="icon-wrapper icon-home"></span>
            </v-btn>

            <v-btn value="favorites" class="navigation">
                <span>我的矿机</span>
                <span class="icon-wrapper icon-store"></span>
            </v-btn>

            <v-btn value="nearby" class="navigation">
                <span>我的团队</span>
                <span class="icon-wrapper icon-cart"></span>
            </v-btn>
            <v-btn value="nearby" class="navigation">
                <span>交易平台</span>
                <span class="icon-wrapper icon-location"></span>
            </v-btn>
            <v-btn value="nearby" class="navigation">
                <span>会员中心</span>
                <span class="icon-wrapper icon-user"></span>
            </v-btn>
        </v-bottom-navigation>
    </div>
</template>

<script>
export default {
    name: "BottomBar"
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/global";
.icon-wrapper {
    font-size: px2rem(50);
}
</style>
