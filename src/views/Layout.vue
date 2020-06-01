<template>
    <div>
        <top-bar></top-bar>
        <router-view/>
        <bottom-bar></bottom-bar>
    </div>
</template>

<script>
    import '@/assets/icons.css'
    import TopBar from './TopBar'
    import BottomBar from './BottomBar'

    export default {
        name: 'Layout',
        components: {
            TopBar,
            BottomBar
        },
        data: () => ({
            bottomNav: 'recent',
        }),
    };
</script>

<style scoped>

</style>
