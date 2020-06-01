<template>
    <div>
        <v-app-bar
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
    </div>
</template>

<script>
export default {
    name: "TopBar"
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/global";
.goback-icon {
    position: absolute
}
.title {
    display: flex;
    flex: 1;
    justify-content: center;
}
.set-icon {
    font-size: px2rem(90) !important;
}
</style>
